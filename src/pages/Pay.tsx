import React from 'react';
import { PayTitle } from '../components/Common';
import { Buttons, DeliveryInfo, OrderProducts } from '../components/Pay';

const Pay = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-6 mb-16">
      <PayTitle section2="#2E9093" />

      <div className="border-b mb-4"></div>

      {/* 배송지 */}
      <DeliveryInfo />

      <div className="border-b  mb-4"></div>

      {/* 주문 상품 내역 */}
      <OrderProducts />

      {/* 결제, 취소 버튼 */}
      <Buttons />
    </div>
  );
};

export default Pay;
