import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "@contexts/ProductContext.jsx";
import ProductsGallery from "@components/ProductsGallery/ProductsGallery.jsx";
import DropdownFilter from "@components/DropdownFilter/DropdownFilter.jsx";
import Pagination from "@components/Pagination/Pagination.jsx";
import styles from "./ProductsSection.module.css";

export default function ProductsSection() {
  const { products, isLoading } = useProduct();
  const { page } = useParams();

  const sortedProducts = (products, filter) => {
    switch (filter) {
      case "featured":
        return products;
      case "name":
        return [...products].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      case "price":
        return [...products].sort((a, b) => a.price - b.price);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const [currentFilter, setCurrentFilter] = useState("featured");

  const filteredProducts = sortedProducts(products, currentFilter);

  const handleSortChange = (filter) => {
    setCurrentFilter(filter);
  };

  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <section className={styles.products}>
      <DropdownFilter onSortChange={handleSortChange} currentFilter={currentFilter} />
      <ProductsGallery page={page} products={paginatedProducts} isLoading={isLoading} />
      <Pagination totalCount={filteredProducts.length} currentPage={currentPage} pageSize={10} siblingCount={1} />
    </section>
  );
}
