import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductProvider } from "@contexts/ProductContext.jsx";
import Root from "./routes/layouts/Root.jsx";
import MainPage from "./routes/pages/MainPage.jsx";
import ProductsPage from "./routes/pages/ProductsPage.jsx";
import AboutPage from "./routes/pages/AboutPage.jsx";
import CartPage from "./routes/pages/CartPage.jsx";
import SingleProductPage from "./routes/pages/SingleProductPage.jsx";


const routes = [
  {
    path: "/",
    element: (
      <ProductProvider>
        <CartProvider>
          <Root />
        </CartProvider>
      </ProductProvider>
    ),
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
        path: "products/:productId",
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
