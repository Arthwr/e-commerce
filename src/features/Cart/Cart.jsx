import { Link } from "react-router-dom";
import { useCart } from "@contexts/CartContext.jsx";
import CartItem from "@components/CartItem/CartItem.jsx";
import ActionButton from "@components/ActionButton/ActionButton.jsx";
import img from "@assets/images/cart-topbg.webp";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cartItems, getTotalCartPrice } = useCart();

  return (
    <section className={styles.cart}>
      <div className={styles.banner}>
        <img src={img} alt="" height={85} />
      </div>
      <div className={styles["cart-wrapper"]}>
        <h1>Your cart</h1>
        <div className={styles.summary}>
          <div className={styles.head}>
            <div className={styles.label}>Item</div>
            <div className={styles.label}>Price</div>
            <div className={styles.label}>Quantity</div>
            <div className={styles.label}>Total</div>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.sku} {...item} />
          ))}
        </div>
        <div className={styles["checkout-group"]}>
          <div className={styles["total-wrapper"]}>
            <div className={styles["total-label"]}>Subtotal:</div>
            <span className={styles["total-price"]}>{`${getTotalCartPrice()} $`}</span>
          </div>
          <div className={styles.actions}>
            <ActionButton path="/checkout" label="Checkout" ariaLabel="confirm purchase" />
            <Link to="/products" className={styles.return}>
              Keep shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
