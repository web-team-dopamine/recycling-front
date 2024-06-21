import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const ProtectionItem = ({
  image,
  title,
  nickname,
  date,
  likes,
}: ProtectionItemProps) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

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
              <button className="text-gray-400 hover:text-[#2E9093] mr-1">
                <BiLike className="inline-block" />
              </button>
              {likes}
            </div>
          </div>
        )}
      </div>
      <div className="px-4 py-4" onClick={() => navigate('/protection/:id')}>
        <div
          className={`font-bold text-l mb-2 ${hovered ? 'hover:underline' : ''}`}
        >
          {title}
        </div>
        <p className={`text-gray-700 text-sm mb-2 `}>{nickname}</p>
        <p className={`text-gray-700 text-base mb-2 `}>{date}</p>
      </div>
    </div>
  );
};

export default ProtectionItem;
