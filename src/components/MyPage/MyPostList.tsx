import React from 'react';
import MyPost from './MyPost';
import usePagination from '../../hooks/usePagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Post {
  id: number;
  thumbnailUrl: string;
  title: string;
}

interface MyPostsProps {
  posts: Post[];
}

const MyPostList: React.FC<MyPostsProps> = ({ posts }) => {
  const itemsPerPage = 6;
  const {
    currentPage,
    currentItems,
    paginate,
    totalPages,
    goToPrevPage,
    goToNextPage,
  } = usePagination(posts, itemsPerPage);

  return (
    <div className="mb-8">
      <div className="text-xl font-semibold m-4 text-[#2E9093]">
        내가 작성한 글
      </div>

      <div className="p-4 rounded-lg m-4">
        <div className="grid grid-cols-3 gap-4">
          {currentItems.map((post) => (
            <MyPost key={post.id} post={post} />
          ))}
          {/* Fill remaining grid cells to maintain consistent layout */}
          {currentItems.length < itemsPerPage && (
            <div className="col-span-3"></div>
          )}
        </div>
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

export default MyPostList;
