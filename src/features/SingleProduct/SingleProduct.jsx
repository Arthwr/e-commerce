import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";
import styles from "./SingleProduct.module.css";
import PropTypes from "prop-types";
import ActionButton from "@components/ActionButton/ActionButton";

export default function SingleProduct({ imgSrc }) {
  return (
    <section className={styles["single-section"]}>
      <Breadcrumbs label="Model 001 Black & White" />
      <div className={styles.product}>
        <div className={styles.left}>
          {imgSrc ? <img src={imgSrc} alt="" width={575} /> : <div className={styles.placeholder}></div>}
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div>
              <h1>Model 001 Black & White</h1>
              <div className={styles.price}>149 $</div>
            </div>
            <p>
              The frame&apos;s design was inspired by classic silhouettes and the acetate styles of Old Hollywood. Its
              subtle cat eye shape, precious metal plating and precious metal lenses reflect the sophisticated
              lifestyles of Runyon Canyon&apos;s residents.
            </p>
          </div>
          <div className={styles.actions}>
            <ActionButton path="/cart" label="Add to cart" />
          </div>
        </div>
      </div>
    </section>
  );
}

SingleProduct.propTypes = {
  imgSrc: PropTypes.string,
};
