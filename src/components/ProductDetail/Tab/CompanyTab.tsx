import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyTab = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="textxl font-bold mb-2">
        누깍의 다른 제품들도 구경해보세요!
      </h2>
      <button
        className="mt-10 bg-[#5EC7B8] hover:bg-opacity-80 text-white mb-5 py-2 px-4 rounded-lg focus:outline-none"
        onClick={() => navigate('/:companyid')}
      >
        누깍 구경하러 가기
      </button>
    </div>
  );
};

export default CompanyTab;
