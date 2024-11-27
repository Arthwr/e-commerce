import PropTypes from "prop-types";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ label }) {
  return (
    <h1 id="section-title" className={styles.header}>
      {label}
    </h1>
  );
}

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
};
