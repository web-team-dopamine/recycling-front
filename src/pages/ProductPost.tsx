import React from 'react';
import { EditButton, EditorComponent, TitleInput } from '../components/Common';
import OptionInput from '../components/ProductPost/OptionInput';

const ProductPost = () => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* 제목 input */}
      <TitleInput />

      {/* 제품 가격, 배송비, 수량 제한(optional) 작성 */}
      <div className="flex mb-4">
        <OptionInput />
      </div>

      {/* text editor (제품 자세한 정보 입력) */}
      <EditorComponent />

      {/* 작성/취소 button */}
      <div className="mt-4 mb-10 flex justify-center">
        <EditButton createUrl="/product/:productid" cancelUrl="/:companyid" />
      </div>
    </div>
  );
};

export default ProductPost;
