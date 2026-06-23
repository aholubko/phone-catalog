# Phone Catalog

## Introduction

Welcome to the Phone Catalog project, a responsive e-commerce application built with React and TypeScript.

The application allows users to browse a catalog of mobile phones, tablets, and accessories, open detailed product pages, search and sort products, add items to favorites, and manage a shopping cart.

The project was implemented according to a Figma design and focuses on creating a modern, responsive, and user-friendly shopping experience. It demonstrates practical skills in React component architecture, TypeScript, routing, state management, API data processing, URL parameters, and Local Storage persistence.

## Key Features

- Responsive Design: The application is optimized for desktop, tablet, and mobile devices.

- Product Categories: Users can browse separate catalog pages for phones, tablets, and accessories.

- Home Page: Includes promotional banners, product sliders, hot-price products, brand-new products, and links to product categories.

- Product Details: Each product has a dedicated page with images, available colors, capacities, descriptions, and technical specifications.

- Product Search: Users can search for products by name on catalog pages.

- Sorting: Products can be sorted by newest, alphabetically, or by price.

- Pagination: Product lists support pagination and configurable numbers of products per page.

- URL Parameters: Search, sorting, pagination, and items-per-page values are stored in the URL and restored after page reload.

- Shopping Cart: Users can add products to the cart, remove them, and change item quantities.

- Cart Calculation: The total quantity and total price are calculated automatically.

- Favorites: Products can be added to or removed from the favorites list.

- Persistent State: Cart and favorite products are saved to Local Storage and restored when the application is opened again.

- Product Suggestions: The product details page includes a selection of suggested products.

- Breadcrumb Navigation: Product pages contain navigation links back to the home page and product category.

- Loading and Error States: The application displays loaders and appropriate messages while data is loading or when an error occurs.

- Not Found Pages: The application includes both a general page-not-found state and a product-not-found state.

- Responsive Navigation: The header provides access to the main catalog sections, favorites, cart, and mobile navigation.

- Theme Interface: The application uses a modern dark visual theme based on the selected design.

- Back-to-Top Button: Users can smoothly return to the top of the page from the footer.

## Challenges

Developing the Phone Catalog involved building a complete multi-page React application with shared state, reusable components, and dynamic data.

### Key Challenges

- Application Architecture: Organizing pages, reusable components, contexts, types, utilities, and API logic required a clear and scalable project structure.

- Product Data Processing: Product information was loaded from local API files and needed to be filtered, sorted, paginated, and matched with detailed product data.

- Routing: Implementing navigation between category pages, product details, favorites, cart, and fallback pages required careful route configuration.

- Dynamic Product Routes: Product cards needed to open the correct details page based on a dynamic product ID.

- URL State Management: Search values, sorting options, pagination, and the number of items per page needed to be synchronized with URL search parameters.

- Cart State Management: Adding products, preventing duplicates, updating quantities, removing products, and calculating totals required centralized and predictable state logic.

- Favorites State Management: Favorite products needed to remain synchronized across product cards, product pages, the header counter, and the favorites page.

- Local Storage Persistence: Cart and favorites data needed to be saved after every change and restored safely when the application loaded.

- Responsive Product Layouts: Product cards, sliders, navigation, details sections, and the shopping cart had to adapt to multiple screen sizes.

- Image Paths and Deployment: Product and banner images stored in the public directory required correct URL handling for both local development and GitHub Pages deployment.

- Reusable Components: Components such as ProductCard, ProductsList, ProductSlider, Pagination, Breadcrumbs, Loader, Header, and Footer needed to work consistently across different pages.

- Loading and Empty States: The interface needed to display the correct content for loading, errors, empty categories, unsuccessful searches, and missing products.

Overcoming these challenges improved my understanding of React architecture, TypeScript types, shared state management, client-side routing, Local Storage, reusable UI components, and responsive application development.

## Technical Requirements

To run this project locally, you need:

- A modern web browser
- Node.js
- NPM

## Installation and Setup

Follow these steps to install and run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/aholubko/landing-page.git
``` 

### 2. Navigate to the project directory

```bash
cd landing-page 
```

### 3. Install dependencies

```bash
npm install 
```

### 4. Start the local development server

```bash
npm start 
```

After starting the project, open the local address displayed in the terminal.

## Usage

After opening the application, users can:

1. Browse products from the home page or category pages.
2. Search, sort, and filter the product catalog.
3. Change the number of products displayed per page.
4. Open a product to view its complete information.
5. Select available product colors and capacities.
6. Add products to favorites.
7. Add products to the shopping cart.
8. Change cart quantities or remove products.
9. Review the total price and number of products in the cart.
10. Navigate between pages using the header, breadcrumbs, and footer.

## Live Preview

[View the live website](https://aholubko.github.io/phone-catalog/)

## Design Reference

The project was implemented according to a Figma design:

[View the Figma design]([http://PASTE_YOUR_FIGMA_LINK_HERE](https://www.figma.com/design/WMdJ24eHk4EkSr25mrt7Y2/Phone-catalog--V2--Original-Dark?node-id=0-1&p=f&t=pTBYgn4W4ZHt3eqN-0))

## Application Pages

- Home
- Phones
- Tablets
- Accessories
- Product Details
- Favorites
- Shopping Cart
- Page Not Found
- Product Not Found

## Technologies Used

This project was built using the following technologies:

- React: Used to build the application interface from reusable components.
- TypeScript: Used to provide static typing and improve code reliability.
- React Router: Used for client-side routing and dynamic product pages.
- React Context: Used to manage shared cart and favorites state.
- React Hooks: Used to manage component state, side effects, context, and reusable logic.
- Vite: Used as the development server and production build tool.
- SCSS: Used to create reusable and responsive styles.
- CSS Flexbox: Used for flexible component layouts and alignment.
- CSS Grid: Used for product grids and responsive page layouts.
- Local Storage: Used to preserve cart and favorites data between sessions.
- URL Search Parameters: Used to store search, sorting, and pagination settings.
- REST-style Data Layer: Used to load and process product information from local API data.
- Git: Used for version control.
- GitHub: Used to host and manage the repository.
- GitHub Pages: Used to deploy the live application.

## Design Specifications

### Responsive Layout

- Desktop: Optimized for wide screens and multi-column product grids.
- Tablet: Adapted navigation, cards, sliders, and page spacing.
- Mobile: Compact navigation, single-column layouts, and touch-friendly controls.

### Main UI Elements

- Sticky header
- Responsive navigation menu
- Promotional image slider
- Product sliders
- Product cards
- Category links
- Product image gallery
- Color and capacity selectors
- Pagination
- Search field
- Shopping cart controls
- Favorites controls
- Breadcrumbs
- Footer with back-to-top button
- Loading and error messages

## Available Scripts

Run the project locally:

```bash
npm start
```

Run the tests:

```bash
npm test 
```

Deploy the project to GitHub Pages:

```bash
npm run deploy
```
