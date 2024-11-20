import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import starIcon from "@assets/svg/star-rating.svg";
import placeholder from "@assets/svg/img-placeholder.svg";

export default function ProductCard({
  product = {
    name: "Model 001 Black & White",
    price: 149,
    description: "All-day comfort, supportive, durable",
    rating: 5,
  },
}) {
  const { name, price, description, rating } = product;

  return (
    <div className={styles.card}>
      <div className={styles["product-img"]}>
        <img src={placeholder} alt="placeholder image" width={320} height={400} draggable="false" />
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <span>{name}</span>
          <span>{price} $</span>
          <span className={styles.description}>{description}</span>
        </div>
        <div className={styles.rating} aria-label={`rating ${rating} stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={starIcon}
              alt="star rating icon"
              className={index < rating ? styles.filled : styles.empty}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
  }),
};
