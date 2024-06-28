import { useState } from 'react';
import { DataItem } from '../util/types';

const usePagination = (data: DataItem[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 함수
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 수 계산
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // 이전 페이지로 이동
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    currentPage,
    currentItems,
    totalPages,
    paginate,
    goToPrevPage,
    goToNextPage,
  };
};

export default usePagination;
