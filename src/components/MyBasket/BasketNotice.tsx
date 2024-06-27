import React from 'react';

const BasketNotice = () => {
  return (
    <ul className="bg-white border border-gray-200 rounded-lg px-8 py-4 m-3 mt-14 list-disc list-inside text-sm text-gray-500">
      <li className="mb-2">바구니 상품은 최대 90일간 저장됩니다.</li>
      <li className="mb-2">
        가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
      </li>
      <li className="mb-2">
        오늘출발 정보는 판매자가 설정한 정보에 의해 제공되며, 물류위탁 상품인
        경우 물류사의 사정에 따라 실제와 다를 수 있습니다.
      </li>
      <li>
        일부 상품의 경우 카드 할부기간이 카드사 제공 기간보다 적게 제공될 수
        있습니다.
      </li>
    </ul>
  );
};

export default BasketNotice;
