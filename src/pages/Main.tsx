import React from 'react';
import { Banner, ProductList, ProtectionList } from '../components/Main';

const Main = () => {
  return (
    <div>
      {/* 웹페이지 소개 */}
      <div className="mb-16">
        <Banner />
      </div>

      {/* 상품 찜 top4 */}
      <div className="mb-6">
        <ProductList />
      </div>

      {/*  인증글 top4 */}
      <div className="mb-6">
        <ProtectionList />
      </div>
    </div>
  );
};

export default Main;
