import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import ProductCounter from "@components/ProductCounter/ProductCounter.jsx";

export default function CartItem({ name, id, price, quantity, total, imgSrc }) {
  return (
    <div className={styles.item}>
      <div className={styles["item-info"]}>
        {imgSrc ? <img src={imgSrc} alt="" width={140} /> : <div className={styles.placeholder}></div>}
        <div>
          <Link to={`/products/${id}`}>{name}</Link>
        </div>
      </div>
      <div>{`${price} $`}</div>
      <div>
        <ProductCounter quantity={quantity} />
      </div>
      <div>{`${total} $`}</div>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  total: PropTypes.number,
  imgSrc: PropTypes.string,
};
