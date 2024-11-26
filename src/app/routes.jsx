import Root from "./routes/Root.jsx";
import Pages from "./routes/Pages.jsx";
import ProductPage from "./routes/ProductPage.jsx";
import AboutPage from "./routes/AboutPage.jsx";

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
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
];

export default routes;
