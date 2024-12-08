import ProductCard from "@components/ProductCard/ProductCard.jsx";
import styles from "./ProductsGallery.module.css";
import PropTypes from "prop-types";

export default function ProductsGallery({ products, isLoading }) {
  return (
    <div className={styles.wrapper}>
      {isLoading && <span className={styles.loader}></span>}

      {products.map((product) => (
        <ProductCard key={product.sku} {...product} />
      ))}
    </div>
  );
}

ProductsGallery.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
