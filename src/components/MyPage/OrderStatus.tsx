import React from 'react';

interface OrderStatusProps {
  products: string[]; // List of ordered product names
  trackingNumber: string; // Tracking number
  deliveryStatus: string; // Delivery status
}

const OrderStatus: React.FC<OrderStatusProps> = ({
  products,
  trackingNumber,
  deliveryStatus,
}) => {
  return (
    <div className="p-4 text-white">
      <div className="text-xl font-semibold mb-4 text-white">배송 조회</div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">주문한 제품</h3>
        <ul className="bg-white text-black px-2 py-1 rounded text-cente">
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">송장 번호:</h3>
        <p className="bg-white text-black px-2 py-1 rounded text-center">
          {trackingNumber}
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">배송 상태</h3>
        <p className="bg-white text-black px-2 py-1 rounded text-center">
          {deliveryStatus}
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;
