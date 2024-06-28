import React from 'react';
import usePagination from '../../hooks/usePagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BookmarkItem from './BookMarkItem';

interface Product {
  id: number;
  productName: string;
  companyName: string;
  price: number;
  reviewCount: number;
}

interface MyBookMarkProps {
  products: Product[];
}

const BookMarkList: React.FC<MyBookMarkProps> = ({ products }) => {
  const itemsPerPage = 10;
  const {
    currentPage,
    currentItems,
    paginate,
    totalPages,
    goToPrevPage,
    goToNextPage,
  } = usePagination(products, itemsPerPage);

  return (
    <div className="mb-8 h-screen flex flex-col justify-center">
      <div className="text-xl font-semibold m-4 p-4 text-[#2E9093]">
        찜한 제품 리스트
      </div>

      <div className="p-4 rounded-lg m-4">
        {currentItems.map((product, index) => (
          <BookmarkItem
            key={product.id}
            index={(currentPage - 1) * itemsPerPage + index + 1}
            productName={product.productName}
            companyName={product.companyName}
            price={product.price}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>

      {/* Pagination controls */}
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
              className={`px-2 py-2 rounded mr-2 ${
                currentPage === index + 1
                  ? 'text-[#2E9093] font-bold'
                  : 'text-gray-400'
              }`}
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

export default BookMarkList;
