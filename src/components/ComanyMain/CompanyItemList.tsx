import React, { useState } from 'react';
import usePagination from '../../hooks/usePagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import CompanyItem from './CompanyItem';

interface ItemListProps {
  items: {
    id: number;
    image: string;
    title: string;
    company: string;
    price: string;
    mark: number;
    date: any;
  }[];
}

const CompanyItemList: React.FC<ItemListProps> = ({ items }) => {
  const [sortBy, setSortBy] = useState('date'); // 초기 정렬 - 최신순

  // 최신순 정렬 함수
  const sortByDateDesc = (a: any, b: any) => b.date - a.date;

  // 찜 많은 순 정렬 함수 (예시에서는 mark를 기준으로 정렬)
  const sortByLikesDesc = (a: any, b: any) => b.mark - a.mark;

  // 정렬된 아이템 배열
  const sortedItems =
    sortBy === 'likes'
      ? [...items].sort(sortByLikesDesc)
      : [...items].sort(sortByDateDesc);

  // 상품 정렬 및 페이징 로직 적용
  const {
    currentPage,
    currentItems,
    totalPages,
    paginate,
    goToPrevPage,
    goToNextPage,
  } = usePagination(sortedItems, 8); // Pagination은 sortedItems에 적용

  // 정렬 변경 핸들러
  const handleSortChange = (sortType: string) => {
    setSortBy(sortType);
  };

  return (
    <div className="py-8 px-8 m-7">
      {/* 정렬 버튼 */}
      <div className="flex mb-4 ml-6">
        <button
          className={`mr-4 text-[#2E9093] text-m font-bold ${sortBy === 'date' ? 'text-[#2E9093]' : 'text-gray-500'}`}
          onClick={() => handleSortChange('date')}
        >
          최신순
        </button>
        <button
          className={`text-[#2E9093] text-m font-bold ${sortBy === 'likes' ? 'text-[#2E9093]' : 'text-gray-500'}`}
          onClick={() => handleSortChange('likes')}
        >
          찜 많은 순
        </button>
      </div>

      {/* 상품 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((item) => (
          <CompanyItem
            key={item.id}
            image={item.image}
            title={item.title}
            company={item.company}
            price={item.price}
          />
        ))}
      </div>

      {/* 페이지네이션 컨트롤 */}
      <div className="flex justify-center mt-4">
        <button
          className="flex items-center"
          onClick={() => goToPrevPage()}
          disabled={currentPage === 1}
        >
          <FaChevronLeft className="mr-2 text-[#2E9093]" />
        </button>
        <div className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-2 py-2 rounded mr-2 ${currentPage === index + 1 ? 'text-[#2E9093] font-bold' : 'text-gray-400'}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="flex items-center"
          onClick={() => goToNextPage()}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight className="ml-2 text-[#2E9093]" />
        </button>
      </div>
    </div>
  );
};

export default CompanyItemList;
