import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';

const ProtectionItem = ({
  image,
  title,
  nickname,
  date,
  likes,
}: ProtectionItemProps) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false); // 좋아요 클릭 여부

  const {
    openModal: openLikeModal,
    closeModal: closeLikeModal,
    Modal: LikeModal,
  } = useModal();

  // 임의로 로그인했다고 표시
  const isLoggedIn = () => {
    return true;
  };

  // 좋아요 클릭
  const handleLikeClick = () => {
    if (isLoggedIn()) {
      setLiked((prevLiked) => !prevLiked); // Toggle liked state
      closeLikeModal(); // Close modal if open
    } else {
      openLikeModal(); // Open login modal if not logged in
    }
  };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img className="w-full h-34 object-cover" src={image} alt={title} />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="text-white text-center">
              <button
                className={`text-gray-400 hover:text-gray-500 mr-1 `}
                onClick={handleLikeClick}
              >
                <BiLike
                  className={`inline-block ${liked ? 'text-[#2E9093]' : ''} `}
                />
              </button>
              {likes}
            </div>
          </div>
        )}
      </div>
      <div
        className="px-4 py-4 cursor-pointer"
        onClick={() => navigate('/protection/:id')}
      >
        <div
          className={`font-bold text-l mb-2 ${
            hovered ? 'hover:underline' : ''
          }`}
        >
          {title}
        </div>
        <p className="text-gray-700 text-sm mb-2 ">{nickname}</p>
        <p className="text-gray-700 text-base mb-2 ">{date}</p>
      </div>

      {/* 좋아요 버튼 클릭 modal */}
      <LikeModal>
        {isLoggedIn() ? (
          <></> // No content when logged in and liked
        ) : (
          <>
            <div className="text-gray-800 mb-4">로그인이 필요합니다.</div>
            <button
              className="bg-[#2E9093] text-white px-4 py-2 rounded hover:bg-opacity-80 mr-2"
              onClick={() => navigate('/login')}
            >
              로그인 하기
            </button>
          </>
        )}
      </LikeModal>
    </div>
  );
};

export default ProtectionItem;
