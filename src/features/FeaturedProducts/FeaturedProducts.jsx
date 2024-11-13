import useHorizontalDrag from "./hooks/useHorizontalDrag.jsx";
import SegmentHeader from "@components/SegmentHeader/SegmentHeader.jsx";
import ProductCard from "@components/ProductCard/ProductCard.jsx";
import styles from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
  const { sliderRef, isDragging, dragProps } = useHorizontalDrag({
    sensitivity: 1.5,
    momentumMultiplier: 0.08,
    friction: 0.96,
    minimumVelocity: 0.3,
  });

  return (
    <section className={styles.featured}>
      <SegmentHeader label="Explore today" />
      <div ref={sliderRef} {...dragProps} className={`${styles.slider} ${isDragging ? styles.grabbing : ""}`}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
