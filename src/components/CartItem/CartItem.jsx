import { useCart } from "@contexts/CartContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import ProductCounter from "@components/ProductCounter/ProductCounter.jsx";

export default function CartItem({ title, sku, price, quantity, images }) {
  const { removeFromCart, updateQuantity } = useCart();
  const total = (price * quantity).toFixed(2);

  return (
    <div className={styles.item}>
      <div className={styles["item-info"]}>
        {images[0] ? (
          <img src={images[0]} alt={`${title}`} width={140} height={140} />
        ) : (
          <div className={styles.placeholder} aria-label="no image available"></div>
        )}
        <div>
          <Link to={`/products/${sku}`} aria-label={`view details for ${title}`}>
            {title}
          </Link>
        </div>
      </div>
      <div aria-label={`price: ${price}`}>{`${price} $`}</div>
      <div>
        <ProductCounter count={quantity} onChange={(newCount) => updateQuantity(sku, newCount)} />
      </div>
      <div aria-label={`total price: ${total}`}>{`${total} $`}</div>
      <div>
        <button onClick={() => removeFromCart(sku)} aria-label={`remove ${title} from cart`}>
          Remove
        </button>
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
