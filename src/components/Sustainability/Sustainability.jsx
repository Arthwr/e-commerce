import SegmentHeader from "@components/SegmentHeader/SegmentHeader.jsx";
import ActionButton from "@components/ActionButton/ActionButton.jsx";
import styles from "./Sustainability.module.css";
import img from "@assets/images/sust-pic.webp";

export default function Sustainability() {
  return (
    <section className={styles.sustainability} role="">
      <SegmentHeader label="Sustainability" />
      <div className={styles.content}>
        <div className={styles["info-group"]}>
          <div className={styles.info}>
            <p className={styles.headline}>Mindful for your space, gentle on the planet</p>
            <p className={styles.description}>
              Our products are made with over 60% recycled materials based on product weight.
            </p>
          </div>
          <ActionButton path="/about" label="Learn more" ariaLabel="learn about us" />
        </div>
        <div className={styles["img-wrapper"]}>
          <img src={img} alt="" width={1200} height={800} />
        </div>
      </div>
    </section>
  );
}
