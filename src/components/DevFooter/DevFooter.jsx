import ghIcon from "@assets/svg/gh-icon.svg";
import styles from "./DevFooter.module.css";

export default function DevFooter() {
  return (
    <section className={styles.dev}>
      <div className={styles["dev-author"]}>
        <a href="https://github.com/arthwr" target="_blank" rel="noopener noreferrer">
          <img src={ghIcon} alt="github profile" />
        </a>
        <span>Designed & Developed by Arthur Utegenov</span>
      </div>
    </section>
  );
}
