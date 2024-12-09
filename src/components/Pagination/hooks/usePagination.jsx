import { useMemo } from "react";

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export default function usePagination({ totalCount, currentPage, pageSize = 10, siblingCount = 1 }) {
  return useMemo(() => {
    const safeCount = Math.max(0, totalCount);
    const totalPages = Math.ceil(safeCount / pageSize);

    const calculatePaginationRange = () => {
      const DOTS = "...";
      const totalPageNumbers = siblingCount + 4;

      if (totalPages <= totalPageNumbers) {
        return range(1, totalPages);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

      const firstPageIndex = 1;
      const lastPageIndex = totalPages;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        let visibleLeftPages = 3 + 2 * siblingCount;
        let leftRange = range(1, visibleLeftPages);

        return [...leftRange, DOTS, lastPageIndex];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        let visibleRightPages = 3 + 2 * siblingCount;
        let rightRange = range(totalPages - visibleRightPages + 1, totalPages);

        return [firstPageIndex, DOTS, ...rightRange];
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);

        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      }

      return [];
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalCount);

    return {
      // Pagination range for rendering page numbers
      paginationRange: calculatePaginationRange(),

      // Pagination metdata
      currentPage,
      totalPages,
      pageSize,
      totalCount,

      // Slice indices for current page items
      startIndex,
      endIndex,

      // Utility methods
      isFirstPage: currentPage === 1,
      isLastPage: currentPage === totalPages,

      // Pagination helpers
      getNextPage: () => Math.min(currentPage + 1, totalPages),
      getPreviousPage: () => Math.max(currentPage - 1, 1),

      // Check if specific page is current
      isCurrentPage: (page) => page === currentPage,
    };
  }, [totalCount, pageSize, currentPage, siblingCount]);
}
