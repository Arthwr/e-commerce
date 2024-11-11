import PropTypes from "prop-types";
import styles from "./SegmentHeader.module.css";

export default function SegmentHeader({ label }) {
  return <h2 className={styles.headline}>{label}</h2>;
}

SegmentHeader.propTypes = {
  label: PropTypes.string,
};
