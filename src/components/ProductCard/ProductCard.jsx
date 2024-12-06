import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import starIcon from "@assets/svg/star-rating.svg";

export default function ProductCard({ id, title, price, description, rating = 0, images = [] }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles["product-img"]}>
        {!imageLoaded && <div className={styles.loader}></div>}
        <img
          src={images[0]}
          alt={`${title} image`}
          width={320}
          height={400}
          loading="lazy"
          draggable="false"
          onLoad={handleImageLoad}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <span className={styles.title}>
            <Link to={`/products/${id}`}>{title}</Link>
          </span>
          <span className={styles.price}>{price} $</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
      <div className={styles.rating} aria-label={`Rating: ${rating} stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={starIcon}
            alt={`${index + 1} star`}
            className={index < Math.floor(rating) ? styles.filled : ""}
          />
        ))}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
