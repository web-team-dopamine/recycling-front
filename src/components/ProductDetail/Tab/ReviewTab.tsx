import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import usePagination from '../../../hooks/usePagination';
import ReviewInput from './Review/ReviewInput';
import ReviewItem from './Review/ReviewItem';

// 리뷰 타입 정의
interface Review {
  nickname: string;
  datetime: string;
  content: string;
  likes: number;
}

const initialReviews: Review[] = [
  {
    nickname: '사용자1',
    datetime: '2024-06-25 09:30',
    content: '첫 번째 리뷰입니다.',
    likes: 3,
  },
  {
    nickname: '사용자2',
    datetime: '2024-06-24 15:20',
    content: '두 번째 리뷰입니다.',
    likes: 1,
  },
  {
    nickname: '사용자3',
    datetime: '2024-06-23 18:45',
    content: '세 번째 리뷰입니다.',
    likes: 2,
  },
  {
    nickname: '사용자4',
    datetime: '2024-06-22 10:10',
    content: '네 번째 리뷰입니다.',
    likes: 0,
  },
  {
    nickname: '사용자5',
    datetime: '2024-06-21 12:00',
    content: '다섯 번째 리뷰입니다.',
    likes: 5,
  },
  {
    nickname: '사용자6',
    datetime: '2024-06-20 17:55',
    content: '여섯 번째 리뷰입니다.',
    likes: 4,
  },
  {
    nickname: '사용자7',
    datetime: '2024-06-19 11:11',
    content: '일곱 번째 리뷰입니다.',
    likes: 2,
  },
  {
    nickname: '사용자8',
    datetime: '2024-06-18 14:40',
    content: '여덟 번째 리뷰입니다.',
    likes: 1,
  },
];

const ReviewTab: React.FC = () => {
  const itemsPerPage = 4;
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [sortedReviews, setSortedReviews] = useState<Review[]>(initialReviews);
  const { currentPage, currentItems, totalPages, paginate } = usePagination(
    sortedReviews,
    itemsPerPage,
  );
  const [sortOption, setSortOption] = useState<'latest' | 'likes' | null>(null);

  // 최신순 정렬 함수
  const sortByDate = (a: Review, b: Review) => {
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  };

  // 좋아요 많은 순 정렬 함수
  const sortByLikes = (a: Review, b: Review) => {
    return b.likes - a.likes;
  };

  // 초기화 및 정렬 상태 변경 시 호출되는 훅
  useEffect(() => {
    if (sortOption === 'latest') {
      setSortedReviews([...reviews].sort(sortByDate));
    } else if (sortOption === 'likes') {
      setSortedReviews([...reviews].sort(sortByLikes));
    }
  }, [sortOption, reviews]);

  // 리뷰 등록 핸들러
  const handleSubmitReview = (newReview: string) => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    const newReviewObject: Review = {
      nickname: '사용자', // 예시로 고정된 닉네임
      datetime: formattedDate,
      content: newReview,
      likes: 0, // 좋아요 초기 값
    };

    setReviews([newReviewObject, ...reviews]);
  };

  // 좋아요 클릭 핸들러
  const handleLikeClick = (index: number, isLiked: boolean) => {
    const updatedReviews = [...reviews];
    const originalIndex = (currentPage - 1) * itemsPerPage + index;
    updatedReviews[originalIndex].likes += isLiked ? 1 : -1;
    setReviews(updatedReviews);
  };

  // 정렬 옵션 변경 핸들러
  const handleSortChange = (option: 'latest' | 'likes') => {
    setSortOption(option);
  };

  return (
    <div>
      <div className="text-xl font-bold ml-4">리뷰 {reviews.length}개</div>
      <ReviewInput onSubmitReview={handleSubmitReview} charLimit={1000} />

      {/* 리뷰 목록 */}
      <div className="m-4">
        {/* 정렬 옵션 선택 */}
        <div className="flex justify-start mr-4 mb-2">
          <button
            className={`mr-4 text-[#2E9093] text-m font-bold ${sortOption === 'latest' ? 'text-[#2E9093]' : 'text-gray-500'}`}
            onClick={() => handleSortChange('latest')}
          >
            최신순
          </button>
          <button
            className={`text-[#2E9093] text-m font-bold ${sortOption === 'likes' ? 'text-[#2E9093]' : 'text-gray-500'}`}
            onClick={() => handleSortChange('likes')}
          >
            추천순
          </button>
        </div>

        {/* 정렬된 리뷰 목록 출력 */}
        {currentItems.map((review, index) => (
          <ReviewItem
            key={index}
            review={review}
            onLikeClick={(isLiked) => handleLikeClick(index, isLiked)}
          />
        ))}

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-4">
          <button
            className="flex items-center"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft className="mr-2 text-[#2E9093]" />
          </button>
          <div className="flex">
            {Array.from({ length: totalPages }).map((_, index) => (
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
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight className="ml-2 text-[#2E9093]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewTab;
