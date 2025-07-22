# Product Listing Application- NextJS+React-Query

A responsive seller dashboard where users can view, search, filter, sort, and simulate adding products using data from a public API. It also supports infinite scrolling and product detail pages.

## Tech-Stack
- [Next-js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [RadixUi (Popover)](https://www.radix-ui.com/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) (for persistent simulated products)

## Feature
### Product Listing
- fetches data from dummy api(`https://dummyjson.com/products`)
- Displays all product data in a grid layout
- support infinite query using React-query
- Each product has a detail page with product description, reviews,etc.

### Filter and sorting
-search by title of the product
-sort the product according to price,stock or title.
-filter the product according to the category of the product.
-filter are globals

### Add new product
- Form with the title, Price, Category, Quantity and imageurl.
- product is added to the local storage.
- product is smoothly added to the ui.

### Product Details Page

- View full product info, including:
  - Description, SKU, brand, availability
  - Warranty, dimensions, and reviews
- Opens via /product/[id] route

### Getting Started
clone the Repo
```bash
git clone https://github.com/yourusername/seller-dashboard.git
cd Productlisting
npm install
npm run dev
it will give you link to view the app(localhost:3000(if you have not open any other port));

### API Source
All data is fetched from:
https://dummyjson.com/products

### Project Structure
src/
├── app/
│   ├── page.tsx               // Main dashboard
│   └── product/[id]/page.tsx  // Product detail route
├── components/
│   ├── AddProductModal.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductFilters.tsx
│   └── ProductDetailsPage.tsx
├── hooks/
│   └── useProduct.ts          // Data fetching + local persistence
├── types/
│   └── product.ts             // Product types


### Author 
Saurabh Kumar



