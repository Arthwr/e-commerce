import styles from "./HeroTitle.module.css";
import logo from "@assets/svg/main-logo-large.svg";

export default function HeroTitle() {
  return (
    <section className={styles.headline}>
      <h1>Tanoshi</h1>
      <img src={logo} alt="tanoshi leaf logo" />
    </section>
  );
}
