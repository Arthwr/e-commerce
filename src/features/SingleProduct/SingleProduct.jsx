import PropTypes from "prop-types";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs.jsx";
import ProductCounter from "@components/ProductCounter/ProductCounter.jsx";
import styles from "./SingleProduct.module.css";
import { useState } from "react";
import { useCart } from "@contexts/CartContext";

export default function SingleProduct(product) {
  const foo = `The frame's design was inspired by classic silhouettes and the acetate styles of Old Hollywood. It's subtle cat eye shape, precious metal plating and precious metal lenses reflect the sophisticated lifestyles of Runyon Canyon's residents.`;

  const mockProduct = {
    name: "Model 003 Pink & White",
    id: "asQeRa",
    price: 249,
    description: foo,
  };

  const renderedProduct = product?.id ? product : mockProduct;
  const { name, price, description, imgSrc } = renderedProduct;

  const { addToCart } = useCart();
  const [productCount, setProductCount] = useState(1);

  return (
    <section className={styles["single-section"]}>
      <Breadcrumbs label={name} />
      <div className={styles.product}>
        <div className={styles.left}>
          {imgSrc ? <img src={imgSrc} alt={name} width={575} /> : <div className={styles.placeholder}></div>}
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div>
              <h1>{name}</h1>
              <div className={styles.price}>{`${price} $`}</div>
            </div>
            <p>{description}</p>
          </div>
          <div className={styles.actions}>
            <div>
              <span>Quantity:</span>
              <ProductCounter count={productCount} onChange={setProductCount} />
            </div>
            <button className={styles.btn} onClick={() => addToCart(renderedProduct, productCount)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

SingleProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};
