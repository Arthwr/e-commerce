import { useCart } from "@contexts/CartContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import ProductCounter from "@components/ProductCounter/ProductCounter.jsx";

export default function CartItem(props) {
  const { name, id, price, quantity, imgSrc } = props;
  const { removeFromCart, updateQuantity } = useCart();
  const total = price * quantity;

  return (
    <div className={styles.item}>
      <div className={styles["item-info"]}>
        {imgSrc ? <img src={imgSrc} alt={`${name}`} width={140} /> : <div className={styles.placeholder}></div>}
        <div>
          <Link to={`/products/${id}`}>{name}</Link>
        </div>
      </div>
      <div>{`${price} $`}</div>
      <div>
        <ProductCounter count={quantity} onChange={(newCount) => updateQuantity(id, newCount)} />
      </div>
      <div>{`${total} $`}</div>
      <div>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  imgSrc: PropTypes.string,
};
