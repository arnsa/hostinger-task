import range from 'lodash/fp/range';
import { PAGES, PAGE_NEIGHBOURS } from './Pagination.const';

export function getPages({ totalPages, currentPage }) {
  const totalNumbers = (PAGE_NEIGHBOURS * 2) + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    let pages = [];

    const leftBound = currentPage - PAGE_NEIGHBOURS;
    const rightBound = currentPage + PAGE_NEIGHBOURS;
    const beforeLastPage = totalPages - 1;

    const startPage = leftBound > 2 ? leftBound : 2;
    const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

    pages = range(startPage, (endPage + 1));

    const pagesCount = pages.length;
    const singleSpillOffset = totalNumbers - pagesCount - 1;

    const leftSpill = startPage > 2;
    const rightSpill = endPage < beforeLastPage;

    if (leftSpill && !rightSpill) {
      const extraPages = range(startPage - singleSpillOffset, startPage);

      pages = [PAGES.LEFT, ...extraPages, ...pages];
    } else if (!leftSpill && rightSpill) {
      const extraPages = range(endPage + 1, (endPage + singleSpillOffset) + 1);

      pages = [...pages, ...extraPages, PAGES.RIGHT];
    } else if (leftSpill && rightSpill) {
      pages = [PAGES.LEFT, ...pages, PAGES.RIGHT];
    }

    return [1, ...pages, totalPages];
  }

  return range(1, totalPages + 1);
}
