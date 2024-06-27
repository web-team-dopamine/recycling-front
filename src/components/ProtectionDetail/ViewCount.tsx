import React from 'react';
import { IoEyeOutline } from 'react-icons/io5';

const ViewCount = ({ viewCount }: { viewCount: number }) => {
  return (
    <div className="text-sm text-gray-600 mb-2 flex items-center justify-end mr-3">
      <span className="mr-1 flex-shrink-0">
        <IoEyeOutline />
      </span>
      <span>{viewCount}</span>
    </div>
  );
};

export default ViewCount;
