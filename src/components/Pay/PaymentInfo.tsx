import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import { FaCheckCircle } from 'react-icons/fa';

interface PaymentInfoProps {
  totalProductPrice: number;
  shippingFee: number;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  totalProductPrice,
  shippingFee,
}) => {
  const {
    value: mileageInput,
    onChange: handleMileageInputChange,
    reset: resetMileageInput,
  } = useInput();
  const [useAllMileage, setUseAllMileage] = useState(false);
  const [alwaysUseAllMileage, setAlwaysUseAllMileage] = useState(false);
  const availableMileage = 5000; // dummy data

  const handleUseAllMileage = () => {
    resetMileageInput();
    setUseAllMileage(!useAllMileage); // toggle 사용
    if (!alwaysUseAllMileage) {
      setAlwaysUseAllMileage(true); // 항상 사용하기 체크
    } else {
      setAlwaysUseAllMileage(false); // 항상 사용하기 체크 해제
    }
  };

  const handleToggleAlwaysUseAllMileage = () => {
    setAlwaysUseAllMileage(!alwaysUseAllMileage); // 항상 전액 사용하기 옵션 토글
    if (!alwaysUseAllMileage && !useAllMileage) {
      setUseAllMileage(true); // 항상 사용하기 체크 시 현재 사용 중인 마일리지 적용
    } else {
      setUseAllMileage(false); // 항상 사용하기 체크 해제
    }
  };

  // 총 결제 가격 계산
  let totalPayment = totalProductPrice + shippingFee;

  if (useAllMileage || alwaysUseAllMileage) {
    totalPayment -= availableMileage;
  } else {
    const mileageToUse = parseInt(mileageInput, 10);
    if (!isNaN(mileageToUse)) {
      totalPayment -= mileageToUse;
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold m-4 text-[#2E9093]">결제 정보</h2>

      <div className="m-4">
        <div className="flex justify-between mb-3">
          <p className="font-semibold">총 상품 가격 </p>
          <p>{totalProductPrice.toLocaleString()}원</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="font-semibold">보유 마일리지</p>
          <p>{availableMileage.toLocaleString()}</p>
        </div>

        <div className="mb-3 flex justify-between items-center mt-3">
          <input
            type="text"
            value={mileageInput}
            onChange={handleMileageInputChange}
            placeholder="마일리지를 입력해주세요"
            className="appearance-none w-4/5 mr-3 border rounded-l py-2 px-3 text-gray-700 leading-tight placeholder:text-sm focus:outline-none focus:shadow-outline"
            readOnly={useAllMileage || alwaysUseAllMileage} // 전액 사용 중일 때만 readOnly
          />
          <button
            onClick={handleUseAllMileage}
            className="bg-[#2E9093] hover:bg-[#257276] text-white text-sm py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline"
          >
            전액 사용
          </button>
        </div>

        <div
          className={`flex items-center justify-end text-sm text-gray-400 mb-6 cursor-pointer alwaysUseAllMileage ? 'text-[#2E9093]' : 'text-gray-400'`}
          onClick={handleToggleAlwaysUseAllMileage}
        >
          <FaCheckCircle
            className={`${
              alwaysUseAllMileage ? 'text-[#2E9093]' : 'text-gray-400'
            } mr-1`}
          />{' '}
          항상 전액 사용하기
        </div>
      </div>

      <div className="m-4 mt-5">
        <div className="flex justify-between mb-3">
          <p className="font-semibold">배송비</p>
          <p> {shippingFee.toLocaleString()}원</p>
        </div>
      </div>

      <div className="border-b mt-6 mb-6"></div>

      <div className="flex flex-end items-center justify-end m-4">
        <h2 className="text-lg font-semibold m-4 text-[#2E9093]">
          총 결제 가격
        </h2>
        <h2 className="text-xl font-semibold">
          {totalPayment ? totalPayment.toLocaleString() : 0}원
        </h2>
      </div>
    </div>
  );
};

export default PaymentInfo;
