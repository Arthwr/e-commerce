import CartItem from "@components/CartItem/CartItem";
import styles from "./Cart.module.css";
import img from "@assets/images/cart-topbg.webp";

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
          <CartItem name="Product A" price={100} quantity={2} total={200} />
          <CartItem name="Product B" price={2000} quantity={4} total={8000} />
          <CartItem name="Product C" price={349} quantity={1} total={349} />
        </div>
        <div className={styles.actions}></div>
      </div>
    </section>
  );
}
