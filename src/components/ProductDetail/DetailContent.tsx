import React, { useState } from 'react';
import { CompanyTab, DetailTab, ReviewTab } from './Tab';

const DetailContent = () => {
  const [activeTab, setActiveTab] = useState('detail'); // 'detail', 'review', 'otherProducts'

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'detail':
        return <DetailTab />;
      case 'review':
        return <ReviewTab />;
      case 'otherProducts':
        return <CompanyTab />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-6 mb-16">
      <div className="flex justify-center mb-4 relative">
        <div className="absolute inset-x-0 bottom-0 border-b border-gray-300"></div>
        <button
          className={`w-full px-4 py-2 border-r ${activeTab === 'detail' ? 'bg-[#5EC7B8] text-white' : 'bg-transparent text-[#A0A4A8]'}`}
          onClick={() => handleTabChange('detail')}
        >
          상세 정보
        </button>
        <div className="absolute inset-x-0 bottom-0 left-0 border-b border-gray-300"></div>
        <button
          className={`w-full px-4 py-2 border-r ${activeTab === 'review' ? 'bg-[#5EC7B8] text-white' : 'bg-transparent text-[#A0A4A8]'} `}
          onClick={() => handleTabChange('review')}
        >
          리뷰
        </button>
        <div className="absolute inset-x-0 bottom-0 right-0 border-b border-gray-300"></div>
        <button
          className={`w-full px-4 py-2 ${activeTab === 'otherProducts' ? 'bg-[#5EC7B8] text-white' : 'bg-transparent text-[#A0A4A8]'}`}
          onClick={() => handleTabChange('otherProducts')}
        >
          업체 다른 상품
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default DetailContent;
