import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface BasketItemProps {
  image: string;
  productName: string;
  quantity: number;
  price: number;
  isChecked: boolean;
  onChangeQuantity: (quantity: number) => void;
  onDelete: () => void;
  onCheckboxChange: () => void;
}

const BasketItem: React.FC<BasketItemProps> = ({
  image,
  productName,
  quantity,
  price,
  isChecked,
  onChangeQuantity,
  onDelete,
  onCheckboxChange,
}) => {
  const navigate = useNavigate();

  const handleCheckBoxClick = () => {
    onCheckboxChange();
  };

  const handleIncrease = () => {
    onChangeQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onChangeQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    onDelete();
  };

  const totalPrice = price * quantity;

  return (
    <div className="flex items-center py-4">
      {/* Checkbox */}
      <div className="flex items-center justify-center w-1/12">
        {isChecked ? (
          <MdCheckBox
            className="w-6 h-6 text-[#2E9093] cursor-pointer"
            onClick={handleCheckBoxClick}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            className="w-6 h-6 text-gray-400 cursor-pointer"
            onClick={handleCheckBoxClick}
          />
        )}
      </div>

      {/* Product Image and Name */}
      <div className="flex items-center w-6/12">
        {/* Product Image */}
        <img
          src={image}
          alt={productName}
          className="w-20 h-20 object-cover rounded mr-4"
        />
        <p
          className="text-l font-semibold hover:underline cursor-pointer"
          onClick={() => navigate('/product/:id')}
        >
          {productName}
        </p>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center justify-center w-3/12">
        <button onClick={handleDecrease} className="px-2 py-1">
          <FaMinus />
        </button>
        <span className="px-2 py-1 bg-white border text-sm">{quantity}</span>
        <button onClick={handleIncrease} className="px-2 py-1">
          <FaPlus />
        </button>
      </div>

      {/* Total Price */}
      <div className="text-l text-right w-2/12">
        {totalPrice.toLocaleString()}원
      </div>

      {/* 삭제 버튼 */}
      <div className=" text-right w-2/12">
        <button className="mr-1" onClick={handleDelete}>
          <MdDelete className="w-5 h-5 hover:text-[#2E9093]" />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
