import CartItem from "@components/CartItem/CartItem";
import styles from "./Cart.module.css";
import img from "@assets/images/cart-topbg.webp";
import ActionButton from "@components/ActionButton/ActionButton";
import { Link } from "react-router-dom";

export default function Cart() {
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
          <CartItem name="Product A" id="cFasLs4" price={100} quantity={2} total={200} />
          <CartItem name="Product B" id="asQefr5" price={2000} quantity={4} total={8000} />
          <CartItem name="Product C" id="asQwer1" price={349} quantity={1} total={349} />
        </div>
        <div className={styles["checkout-group"]}>
          <div className={styles["total-wrapper"]}>
            <div className={styles["total-label"]}>Subtotal:</div>
            <span className={styles["total-price"]}>8549 $</span>
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
