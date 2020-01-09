import { getPages } from './Pagination.utils';

describe('getPages()', () => {
  it('should return correct values when totalPages is 1 and currentPage is 1', () => {
    expect(getPages({ totalPages: 1, currentPage: 1 })).toEqual([1]);
  });

  it('should return correct values when totalPages is 10 and currentPage is 1', () => {
    expect(getPages({ totalPages: 10, currentPage: 1 })).toEqual([1, 2, 3, 4, 5, 'RIGHT', 10]);
  });

  it('should return correct values when totalPages is 10 and currentPage is 5', () => {
    expect(getPages({ totalPages: 10, currentPage: 5 })).toEqual([1, 'LEFT', 4, 5, 6, 'RIGHT', 10]);
  });
});
