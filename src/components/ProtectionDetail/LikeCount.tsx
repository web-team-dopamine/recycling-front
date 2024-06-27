import React, { useEffect, useState } from 'react';
import { BiLike } from 'react-icons/bi';

interface LikeCountProps {
  likeCount: number;
  liked: boolean;
}

const LikeCount: React.FC<LikeCountProps> = ({ likeCount, liked }) => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if (liked) {
      setColor('#5EC7B8');
    } else {
      setColor('black');
    }
  }, [liked]);

  return (
    <div className="text-sm text-gray-600 mb-2 flex items-center justify-end mr-3">
      <span className="mr-1 flex-shrink-0">
        <BiLike style={{ color: color }} />
      </span>
      <span style={{ color: color }}>{likeCount}</span>
    </div>
  );
};

export default LikeCount;
