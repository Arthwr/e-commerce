import { useCart } from "@contexts/CartContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import ProductCounter from "@components/ProductCounter/ProductCounter.jsx";

export default function CartItem(props) {
  const { title, sku, price, quantity, images } = props;
  const { removeFromCart, updateQuantity } = useCart();
  const total = (price * quantity).toFixed(2);

  return (
    <div className={styles.item}>
      <div className={styles["item-info"]}>
        {images[0] ? (
          <img src={images[0]} alt={`${title}`} width={140} height={140} />
        ) : (
          <div className={styles.placeholder}></div>
        )}
        <div>
          <Link to={`/products/${sku}`}>{title}</Link>
        </div>
      </div>
      <div>{`${price} $`}</div>
      <div>
        <ProductCounter count={quantity} onChange={(newCount) => updateQuantity(sku, newCount)} />
      </div>
      <div>{`${total} $`}</div>
      <div>
        <button onClick={() => removeFromCart(sku)}>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
