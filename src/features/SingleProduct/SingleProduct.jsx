import { useState } from "react";
import { useCart } from "@contexts/CartContext.jsx";
import { useParams } from "react-router-dom";
import { useProduct } from "@contexts/ProductContext.jsx";
import PropTypes from "prop-types";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs.jsx";
import ProductCounter from "@components/ProductCounter/ProductCounter.jsx";
import styles from "./SingleProduct.module.css";

export default function SingleProduct() {
  const [productCount, setProductCount] = useState(1);
  const { addToCart } = useCart();
  const { productId } = useParams();
  const { products, isLoading } = useProduct();
  const product = products.find((item) => item.sku === productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const { title, price, description, images } = product;

  return (
    <section className={styles["single-section"]}>
      <Breadcrumbs label={title} />
      <div className={styles.product}>
        <div className={styles.left}>
          {images[0] ? (
            <img src={images[0]} alt={title} width={575} height={575} />
          ) : (
            <div className={styles.placeholder}></div>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div>
              <h1>{title}</h1>
              <div className={styles.price}>{`${price} $`}</div>
            </div>
            <p>{description}</p>
          </div>
          <div className={styles.actions}>
            <div>
              <span>Quantity:</span>
              <ProductCounter count={productCount} onChange={setProductCount} />
            </div>
            <button className={styles.btn} onClick={() => addToCart(product, productCount)}>
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
