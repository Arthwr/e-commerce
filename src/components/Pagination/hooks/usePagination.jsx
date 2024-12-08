import { useMemo } from "react";

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export default function usePagination({ totalCount, currentPage, pageSize = 10, siblingCount = 1 }) {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 4;
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const DOTS = `...`;

    if (totalPageCount <= totalPageNumbers) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let visibleLeftPages = 3 + 2 * siblingCount;
      let leftRange = range(1, visibleLeftPages);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let visibleRightPages = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - visibleRightPages + 1, totalPageCount);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [totalCount, pageSize, currentPage, siblingCount]);

  return paginationRange;
}
