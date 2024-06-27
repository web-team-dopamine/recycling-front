import React from 'react';
import { GoPlus } from 'react-icons/go';
import { FaEquals } from 'react-icons/fa6';

interface PaySummaryProps {
  totalAmount: number;
  onOrder: () => void;
}

const PaySummary: React.FC<PaySummaryProps> = ({ totalAmount, onOrder }) => {
  const shippingFee = totalAmount > 0 && totalAmount < 50000 ? 3000 : 0;
  const totalCost = totalAmount + shippingFee;

  return (
    <div className="max-w-screen-lg mx-auto mt-2 pt-4 border">
      <div className="flex justify-end items-center">
        <div className="mr-3">
          총 상품 금액{' '}
          <span className="font-bold">{totalAmount.toLocaleString()}원</span>
        </div>
        <div className="mr-2">
          <GoPlus />
        </div>
        <div className="mr-3">
          배송비{' '}
          <span className="font-bold">{shippingFee.toLocaleString()}원</span>
        </div>
      </div>

      <div className="flex justify-end font-bold text-lg m-4 items-center">
        <FaEquals className="mr-3" /> {totalCost.toLocaleString()}원
      </div>
      <div className="flex justify-end mt-6 mb-4 mr-3">
        <button
          onClick={onOrder}
          className="w-1/4 bg-[#2E9093] hover:bg-opacity-80 text-white font-bold px-6 py-2 rounded"
        >
          주문하기
        </button>
      </div>
    </div>
  );
};

export default PaySummary;
