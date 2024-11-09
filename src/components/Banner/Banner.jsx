import ActionButton from "@components/ActionButton/ActionButton.jsx";
import bannerImg from "@assets/images/main-banner.webp";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <img src={bannerImg} alt="" width={2292} height={675} />
        <div className={styles.cta}>
          <div>
            <span>Curated with joy,</span>
            <span>crafted to inspire every day.</span>
          </div>
          <ActionButton path="/products" label="Shop now" ariaLabel="shop products"/>
        </div>
      </div>
    </section>
  );
}
