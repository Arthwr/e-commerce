import useHorizontalDrag from "./hooks/useHorizontalDrag.jsx";
import SegmentHeader from "@components/SegmentHeader/SegmentHeader.jsx";
import ProductCard from "@components/ProductCard/ProductCard.jsx";
import styles from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
  const { sliderRef, isDragging, handleDragStart, handleDragMove, handleDragEnd } = useHorizontalDrag();

  return (
    <section className={styles.featured}>
      <SegmentHeader label="Explore today" />
      <div
        ref={sliderRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        className={`${styles.slider} ${isDragging ? styles.grabbing : ""}`}
      >
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
