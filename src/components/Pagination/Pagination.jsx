import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import usePagination from "./hooks/usePagination.jsx";
import styles from "./Pagination.module.css";

export default function Pagination({ totalCount, currentPage, pageSize, siblingCount }) {
  const paginationRange = usePagination({ totalCount, currentPage, pageSize, siblingCount });
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    navigate(`/products/page/${page}`);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < paginationRange.length) {
      handlePageChange(currentPage + 1);
    }
  };

  console.log("Curent page:", currentPage);
  console.log("Pagination range:", paginationRange.length);

  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        <button className={styles.nextpage} onClick={handlePrevClick} disabled={currentPage <= 1}>
          Prev
        </button>
        <div>
          {paginationRange.map((page, index) => {
            if (page === "...") {
              return (
                <div key={`dots-${index}`} className={styles.pagebtn}>
                  &#8230;
                </div>
              );
            }

            return (
              <Link
                key={index}
                to={`/products/page/${page}`}
                className={`${styles.pagebtn} ${page === currentPage ? styles.active : ""}`}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </Link>
            );
          })}
        </div>
        <button
          className={styles.nextpage}
          onClick={handleNextClick}
          disabled={currentPage >= Math.ceil(totalCount / pageSize)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  siblingCount: PropTypes.number,
};
