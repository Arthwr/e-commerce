import Root from "./routes/layouts/Root.jsx";
import MainPage from "./routes/pages/MainPage.jsx";
import ProductsPage from "./routes/pages/ProductsPage.jsx";
import AboutPage from "./routes/pages/AboutPage.jsx";
import CartPage from "./routes/pages/CartPage.jsx";
import SingleProductPage from "./routes/pages/SingleProductPage.jsx";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
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
