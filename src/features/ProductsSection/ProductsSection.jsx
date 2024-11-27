import ProductsGallery from "@components/ProductsGallery/ProductsGallery.jsx";
import DropdownFilter from "@components/DropdownFilter/DropdownFilter.jsx";
import Pagination from "@components/Pagination/Pagination.jsx";
import styles from "./ProductsSection.module.css";

export default function ProductsSection() {
  return (
    <section className={styles.products}>
      <DropdownFilter />
      <ProductsGallery />
      <Pagination />
    </section>
  );
}
