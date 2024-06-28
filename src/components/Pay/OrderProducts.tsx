import React from 'react';
import OrderProduct from './OrderProduct';
import PaymentInfo from './PaymentInfo';

const OrderProducts = () => {
  const products = [
    {
      id: 1,
      name: '[니올] 하늘풍선 니올링 업사이클링 키링',
      options: '없음',
      quantity: 2,
      price: 20000,
    },
    {
      id: 2,
      name: '[기시히] 백팩 5',
      options: '없음',
      quantity: 1,
      price: 60000,
    },
  ];

  // 총 상품 가격 계산
  const totalProductPrice = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0,
  );

  // 배송비 설정
  const shippingFee = totalProductPrice >= 50000 ? 0 : 3000;

  return (
    <div className="mt-6 mb-6">
      <h2 className="text-lg font-semibold m-4 text-[#2E9093]">주문 상품</h2>

      {products.map((product) => (
        <OrderProduct key={product.id} product={product} />
      ))}

      <div className="border-b mt-6 mb-6"></div>

      <PaymentInfo
        totalProductPrice={totalProductPrice}
        shippingFee={shippingFee}
      />
    </div>
  );
};

export default OrderProducts;
