import ActionButton from "@components/ActionButton/ActionButton.jsx";
import bgImg from "@assets/images/about-img.webp";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.imgwrapper}>
        <img src={bgImg} alt="" width={1187} height={405} />
      </div>
      <div className={styles.content}>
        <div>
          <p>
            At Tanoshi, we believe that shopping should bring a little joy to every day. Our name means &quot;fun&quot;
            in Japanese, and we aim to live up to it by offering a curated selection of products that add value, style,
            and a touch of happiness to your life. From the latest mobile phones to trendy bags and wardrobe essentials,
            we carefully choose items that combine quality, functionality, and affordability.
          </p>
          <p>
            Whether you&apos;re searching for a perfect gift or a useful addition to your home, we&apos;re here to make
            shopping easy, enjoyable, and reliable. Tanoshi is committed to delivering value, convenience, and a
            delightful experience—so you can find exactly what you need and enjoy the journey.
          </p>
        </div>
        <ActionButton path="/products" label="Start shopping" ariaLabel="visit products page" />
      </div>
    </section>
  );
}
