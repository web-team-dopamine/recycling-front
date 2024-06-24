import React from 'react';
import SearchInput from '../components/SearchInput';

const Products = () => {
  return (
    <div>
      리사이클링 물건 메인 페이지
      {/* search */}
      <div className="mb-6 flex items-center justify-end mr-5">
        <SearchInput />
      </div>
    </div>
  );
};

export default Products;
