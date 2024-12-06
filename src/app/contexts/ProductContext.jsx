import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://dummyjson.com/products?limit=10&skip=0&select=title,id,price,description,images,rating";

  const fetchProduct = useCallback(async (controllerSignal) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, { signal: controllerSignal });
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setProducts(result.products);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Failed to fetch products: ", err);
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchProduct(signal);

    return () => {
      controller.abort();
    };
  }, [fetchProduct]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const contextValue = useMemo(
    () => ({
      products,
      isLoading,
      error,
    }),
    [products, isLoading, error]
  );

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
