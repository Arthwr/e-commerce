import styles from "./ProductCard.module.css";
import starIcon from "@assets/svg/star-rating.svg";
import placeholder from "@assets/svg/img-placeholder.svg";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles["product-img"]}>
        <img src={placeholder} alt="" width={320} height={400} draggable="false" />
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <span>Model 001 Black & White</span>
          <span>149 $</span>
          <span className={styles.description}>All-day comfort, supportive, durable</span>
        </div>
        <div className={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <img key={index} src={starIcon} />
          ))}
        </div>
      </div>
    </div>
  );
}
