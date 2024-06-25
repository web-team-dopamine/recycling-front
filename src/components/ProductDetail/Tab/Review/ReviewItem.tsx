import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

interface Props {
  review: {
    nickname: string;
    datetime: string;
    content: string;
    likes: number;
  };
  onLikeClick: (isLiked: boolean) => void;
}

const ReviewItem: React.FC<Props> = ({ review, onLikeClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    onLikeClick(!isLiked);
  };

  return (
    <div className="border-t p-3">
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <span className="font-bold">{review.nickname}</span>
          <span className="text-gray-500 text-sm ml-2">{review.datetime}</span>
        </div>
        <div className="flex items-center">
          <button
            className={`text-black px-3 py-1 flex items-center focus:outline-none ${
              isLiked ? 'text-[#2E9093]' : ''
            }`}
            onClick={handleLikeClick}
          >
            <FaThumbsUp className={`mr-1 ${isLiked ? 'text-[#2E9093]' : ''}`} />
            <span className={`${isLiked ? 'text-[#2E9093]' : ''}`}>
              {review.likes}
            </span>
          </button>
        </div>
      </div>
      <p className="mb-2">{review.content}</p>
    </div>
  );
};

export default ReviewItem;
