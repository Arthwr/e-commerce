import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import usePagination from "./hooks/usePagination.jsx";
import styles from "./Pagination.module.css";

export default function Pagination({ totalCount, currentPage, pageSize = 10, siblingCount = 1 }) {
  const { paginationRange, isFirstPage, isLastPage, getNextPage, getPreviousPage, isCurrentPage, totalPages } =
    usePagination({
      totalCount,
      currentPage,
      pageSize,
      siblingCount,
    });

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    navigate(`/products/page/${page}`);
  };

  const handlePrevClick = () => {
    if (!isFirstPage) {
      handlePageChange(getPreviousPage());
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      handlePageChange(getNextPage());
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        <button className={styles.nextpage} onClick={handlePrevClick} disabled={isFirstPage} aria-label="previous page">
          Prev
        </button>
        <div>
          {paginationRange.map((page, index) => {
            if (page === "...") {
              return (
                <div key={`dots-${index}`} className={styles.pagebtn} aria-hidden="true">
                  &#8230;
                </div>
              );
            }

            return (
              <Link
                key={page}
                to={`/products/page/${page}`}
                className={`${styles.pagebtn} ${isCurrentPage(page) ? styles.active : ""}`}
                aria-label={`Go to page ${page}`}
                aria-current={isCurrentPage(page) ? "page" : undefined}
              >
                {page}
              </Link>
            );
          })}
        </div>
        <button className={styles.nextpage} onClick={handleNextClick} disabled={isLastPage} aria-label="next page">
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
