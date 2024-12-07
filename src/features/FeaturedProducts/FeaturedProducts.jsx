import { useProduct } from "@contexts/ProductContext.jsx";
import useHorizontalDrag from "./hooks/useHorizontalDrag.jsx";
import SegmentHeader from "@components/SegmentHeader/SegmentHeader.jsx";
import ProductCard from "@components/ProductCard/ProductCard.jsx";
import styles from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
  const { products } = useProduct();
  const { sliderRef, isDragging, dragProps } = useHorizontalDrag();

  return (
    <section className={styles.featured}>
      <SegmentHeader label="Explore today" />
      <div ref={sliderRef} {...dragProps} className={`${styles.slider} ${isDragging ? styles.grabbing : ""}`}>
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product.sku} {...product} />
        ))}
      </div>
    </section>
  );
}
