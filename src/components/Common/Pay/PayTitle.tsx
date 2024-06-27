import React from 'react';

interface PayTitleProps {
  section1?: string;
  section2?: string;
  section3?: string;
}

const PayTitle: React.FC<PayTitleProps> = ({
  section1,
  section2,
  section3,
}) => {
  return (
    <div className="flex max-w-screen-lg mx-auto mt-6 mb-16 justify-end">
      <div
        className={`${section1 ? 'font-semibold' : ''} ${section1 ? 'text-[#2E9093]' : 'text-[#868686]'} mr-4`}
      >
        ① 장바구니
      </div>
      <div
        className={`${section2 ? 'font-semibold' : ''} ${section2 ? 'text-[#2E9093]' : 'text-[#868686]'} mr-4`}
      >
        ② 주문/결제
      </div>
      <div
        className={`${section3 ? 'font-semibold' : ''} ${section3 ? 'text-[#2E9093]' : 'text-[#868686]'} mr-4`}
      >
        ③ 결제완료
      </div>
    </div>
  );
};

export default PayTitle;
