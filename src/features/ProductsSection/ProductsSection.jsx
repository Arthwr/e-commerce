import { useParams } from "react-router-dom";
import { useProduct } from "@contexts/ProductContext.jsx";
import ProductsGallery from "@components/ProductsGallery/ProductsGallery.jsx";
import DropdownFilter from "@components/DropdownFilter/DropdownFilter.jsx";
import Pagination from "@components/Pagination/Pagination.jsx";
import styles from "./ProductsSection.module.css";

export default function ProductsSection() {
  const { products, isLoading } = useProduct();
  const { page } = useParams();

  const totalProducts = products.length;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <section className={styles.products}>
      <DropdownFilter />
      <ProductsGallery page={page} products={paginatedProducts} isLoading={isLoading} />
      <Pagination totalCount={totalProducts} currentPage={currentPage} pageSize={10} siblingCount={1} />
    </section>
  );
}
