import PropTypes from "prop-types";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ label }) {
  return (
    <section aria-labelledby="section-title">
      <h1 id="section-title" className={styles.header}>
        {label}
      </h1>
    </section>
  );
}

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
};
