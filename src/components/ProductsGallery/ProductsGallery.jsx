import ProductCard from "@components/ProductCard/ProductCard.jsx";
import styles from "./ProductsGallery.module.css";

export default function ProductsGallery() {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}
