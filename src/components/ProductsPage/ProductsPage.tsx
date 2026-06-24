import './ProductsPage.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Product } from '../../types/Product';
import { ProductList } from '../ProductList';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { ProductsControls } from '../ProductsControl';
import { Pagination } from '../Pagination';
import { Loader } from '../Loader';

type Props = {
  title: string;

  loadProducts: () => Promise<Product[]>;
};

export const ProductsPage = ({ title, loadProducts }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  //#region URL params
  const sortFromUrl = searchParams.get('sort') || 'newest';
  const queryFromUrl = searchParams.get('query') || '';
  const pageFromUrl = Number(searchParams.get('page')) || 1;
  const perPageFromUrl = searchParams.get('perPage') || '8';
  //#endregion

  //#region useState
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sortType, setSortType] = useState(sortFromUrl);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [perPage, setPerPage] = useState(perPageFromUrl);
  const [isUpdating, setIsUpdating] = useState(false);
  //#endregion

  const updateTimer = useRef<number | null>(null);
  const debounceQuery = useDebounce(queryFromUrl, 500);

  const loadPageProducts = useCallback(async () => {
    setIsLoading(true);

    setErrorMessage('');

    try {
      const productsFromServer = await loadProducts();

      setProducts(productsFromServer);
    } catch {
      setErrorMessage('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [loadProducts]);

  const updateSearchParams = (
    paramsToUpdate: Record<string, string | null>,
  ) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(paramsToUpdate).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  const imitatePageUpdate = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setIsUpdating(true);

    if (updateTimer.current !== null) {
      window.clearTimeout(updateTimer.current);
    }

    updateTimer.current = window.setTimeout(() => {
      setIsUpdating(false);
      updateTimer.current = null;
    }, 400);
  };

  //#region Derived products
  const sortedProducts = [...products].sort((product1, product2) => {
    switch (sortType) {
      case 'newest':
        return product2.year - product1.year;

      case 'alphabetically':
        return product1.name.localeCompare(product2.name);

      case 'cheapest':
        return product1.price - product2.price;

      default:
        return 0;
    }
  });

  const visibleProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(debounceQuery.toLowerCase()),
  );

  const productsPerPage =
    perPage === 'all' ? visibleProducts.length : Number(perPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const paginatedProducts = visibleProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(visibleProducts.length / productsPerPage);
  //#endregion

  useEffect(() => {
    loadPageProducts();
  }, [loadPageProducts]);

  useEffect(() => {
    return () => {
      if (updateTimer.current !== null) {
        window.clearTimeout(updateTimer.current);
      }
    };
  }, []);

  const showLoader = isLoading || isUpdating;

  return (
    <>
      <section className="products-page">
        <div className="products-page__top">
          <h1 className="products-page__title">{title}</h1>

          {showLoader && <Loader />}

          {!showLoader && errorMessage && (
            <>
              <p>{errorMessage}</p>

              <button type="button" onClick={loadPageProducts}>
                Reload
              </button>
            </>
          )}

          <p className="products-page__amount">
            {visibleProducts.length} models
          </p>
        </div>

        <div className="products-page__controls">
          <ProductsControls
            sortType={sortType}
            perPage={perPage}
            onSortChange={newSortType => {
              imitatePageUpdate();
              setSortType(newSortType);
              setCurrentPage(1);
              updateSearchParams({
                sort: newSortType === 'newest' ? null : newSortType,
                page: null,
              });
            }}
            onPerPageChange={newPerPage => {
              imitatePageUpdate();
              setPerPage(newPerPage);
              setCurrentPage(1);
              updateSearchParams({
                perPage: newPerPage === '8' ? null : newPerPage,
                page: null,
              });
            }}
          />
        </div>

        {!showLoader && !errorMessage && (
          <>
            {visibleProducts.length ? (
              <div className="products-page__content">
                <div className="products-page__list">
                  <ProductList products={paginatedProducts} />
                </div>

                <div className="products-page__pagination">
                  <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={newPage => {
                      imitatePageUpdate();
                      setCurrentPage(newPage);

                      updateSearchParams({
                        page: newPage === 1 ? null : String(newPage),
                      });
                    }}
                  />
                </div>
              </div>
            ) : (
              <p className="products-page__empty">
                There are no products matching the query
              </p>
            )}
          </>
        )}
      </section>
    </>
  );
};
