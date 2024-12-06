import { useProduct } from "@contexts/ProductContext.jsx";
import ProductCard from "@components/ProductCard/ProductCard.jsx";
import styles from "./ProductsGallery.module.css";

export default function ProductsGallery() {
  const { products } = useProduct();

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.sku} {...product} />
      ))}
    </div>
  );
}
