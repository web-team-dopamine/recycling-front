import React from 'react';
import { PayTitle } from '../components/Common';
import { useNavigate } from 'react-router-dom';

const PayEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-lg mx-auto mt-6 mb-16">
      <PayTitle section3="#2E9093" />

      <div className="flex items-center justify-center flex-col  h-[600px]">
        <h1 className="text-2xl font-semibold m-4">결제가 완료되었습니다!</h1>
        <h1 className="text-2xl font-semibold m-4 text-[#2E9093]">
          주문 및 배송 관련은{' '}
          <button
            className="underline hover:text-[#ACDACD]"
            onClick={() => navigate('/mypage')}
          >
            마이페이지
          </button>
          를 통해 확인
        </h1>
        <h1 className="text-2xl font-semibold m-4">하실 수 있습니다.</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-[#2E9093] hover:bg-opacity-80 w-1/4 text-white border rounded-lg px-4 py-2 m-6"
        >
          메인 페이지로 이동
        </button>
      </div>
    </div>
  );
};

export default PayEnd;
