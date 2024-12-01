import Root from "./routes/Root.jsx";
import Pages from "./routes/Pages.jsx";
import ProductsPage from "./routes/ProductsPage.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import CartPage from "./routes/CartPage.jsx";
import SingleProductPage from "./routes/SingleProductPage.jsx";

const routes = [
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/",
    element: <Pages />,
    children: [
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productid",
        element: <SingleProductPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
