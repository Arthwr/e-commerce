import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

export default function CartItem({ name, price, quantity, total, imgSrc }) {
  return (
    <div className={styles.item}>
      <div className={styles["item-info"]}>
        {imgSrc ? <img src={imgSrc} alt="" width={140} /> : <div className={styles.placeholder}></div>}
        <div>{name}</div>
      </div>
      <div>{`${price} $`}</div>
      <div>{quantity}</div>
      <div>{`${total} $`}</div>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  total: PropTypes.number,
  imgSrc: PropTypes.string,
};
