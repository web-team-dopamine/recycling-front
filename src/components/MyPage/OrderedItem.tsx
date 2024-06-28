import React from 'react';
import { OrderedItemProps } from '../../util/types';

const OrderedItem: React.FC<OrderedItemProps> = ({
  companyName,
  productImage,
  productName,
  price,
  options,
}) => {
  return (
    <div className="mb-4 m-2">
      <div className="flex flex-col mb-2">
        <div className="mb-2 font-semibold">[{companyName}]</div>
        <div className="flex justify-between">
          <div className="w-1/3">
            <img
              src={productImage}
              alt={productName}
              className="w-25 h-20 mr-2 cover"
            />
          </div>
          <div className="w-2/3">
            <div className="font-semibold text-[#2E9093]">{productName}</div>
            <div className="text-gray-600 text-sm mt-1">
              {price.toLocaleString()}원
            </div>
            <div className="text-gray-600 text-xs mt-1">옵션: {options}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
