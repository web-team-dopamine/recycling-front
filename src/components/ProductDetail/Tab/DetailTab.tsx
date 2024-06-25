import React, { useState } from 'react';

const DetailTab = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <div className="relative text-center">
      {/* 이미지 부분 */}
      <div className={`overflow-hidden ${isMoreView ? 'h-auto' : 'h-[800px]'}`}>
        <img
          src={`${process.env.PUBLIC_URL}/asset/detail.png`}
          alt="detail-Img"
          className="mt-6 w-full"
        />
      </div>

      {/* 버튼 부분 */}
      <div className="flex justify-center mt-5 bg-[#5EC7B8] hover:bg-[#2E9093]">
        <div className="w-full max-w-xs mx-auto">
          <button
            onClick={onClickImageMoreViewButton}
            className={`w-full text-m px-4 py-2 text-white shadow-lg focus:outline-none relative ${
              isMoreView ? 'max-w-xs' : ''
            }`}
          >
            {isMoreView ? '상품정보 접기' : '상품정보 더보기'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailTab;
