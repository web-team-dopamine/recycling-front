import React from 'react';
import { BiLike } from 'react-icons/bi';

interface LikeButtonProps {
  onLike: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onLike }) => {
  const handleRecommend = () => {
    onLike(); // 추천하기 로직은 이곳에서 구현
  };

  return (
    <div className="flex justify-center mb-6">
      <button
        onClick={handleRecommend}
        className="w-1/5 flex items-center justify-center bg-[#5EC7B8] hover:bg-[#2E9093] text-white text-sm rounded px-2 py-2 focus:outline-none focus:shadow-outline"
      >
        <BiLike className="mr-2" /> 추천하기
      </button>
    </div>
  );
};

export default LikeButton;
