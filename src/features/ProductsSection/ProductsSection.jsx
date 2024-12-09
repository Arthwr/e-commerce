import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "@contexts/ProductContext.jsx";
import ProductsGallery from "@components/ProductsGallery/ProductsGallery.jsx";
import DropdownFilter from "@components/DropdownFilter/DropdownFilter.jsx";
import Pagination from "@components/Pagination/Pagination.jsx";
import styles from "./ProductsSection.module.css";
import usePagination from "@components/Pagination/hooks/usePagination";

const sortProductsBy = {
  featured: (products) => products,
  name: (products) => [...products].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())),
  price: (products) => [...products].sort((a, b) => a.price - b.price),
  rating: (products) => [...products].sort((a, b) => b.rating - a.rating),
};

export default function ProductsSection() {
  const { products, isLoading } = useProduct();
  const { page } = useParams();

  const [currentFilter, setCurrentFilter] = useState("featured");

  const filteredProducts = useMemo(() => {
    const sortingFunction = sortProductsBy[currentFilter] || sortProductsBy.featured;
    return sortingFunction(products);
  }, [products, currentFilter]);

  const { startIndex, endIndex, currentPage } = usePagination({
    totalCount: filteredProducts.length,
    currentPage: parseInt(page, 10) || 1,
    pageSize: 10,
    siblingCount: 1,
  });

  const renderedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleSortChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <section className={styles.products}>
      <DropdownFilter onSortChange={handleSortChange} currentFilter={currentFilter} />
      <ProductsGallery page={page} products={renderedProducts} isLoading={isLoading} />
      <Pagination totalCount={filteredProducts.length} currentPage={currentPage} pageSize={10} siblingCount={1} />
    </section>
  );
}
