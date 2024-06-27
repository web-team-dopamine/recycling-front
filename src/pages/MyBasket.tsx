import React, { useEffect, useState } from 'react';
import { PayTitle } from '../components/Common';
import {
  BasketItem,
  BasketNotice,
  CheckButton,
  PaySummary,
} from '../components/MyBasket';
import { useNavigate } from 'react-router-dom';

const MyBasket = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/asset/main-1-2.png',
      productName: '[니올] 하늘풍선 니올링 업사이클링 키링',
      quantity: 1,
      price: 20000,
      isChecked: false,
    },
    {
      id: 2,
      image: '/asset/p-8.png',
      productName: '[기시히] 백팩 5',
      quantity: 1,
      price: 60000,
      isChecked: false,
    },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  useEffect(() => {
    // update total amount
    calculateTotalAmount();
  }, [cartItems]);

  const handleSelectAll = () => {
    const allChecked = cartItems.every((item) => item.isChecked);
    setCartItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isChecked: !allChecked,
      })),
    );
  };

  const handleDeleteAll = () => {
    setCartItems([]);
  };

  const calculateTotalAmount = () => {
    const total = cartItems.reduce(
      (acc, item) => (item.isChecked ? acc + item.quantity * item.price : acc),
      0,
    );
    return total;
  };

  const handleOrder = () => {
    navigate('/user/:id/pay');
  };

  const handleDeleteItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckboxChange = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="max-w-screen-lg mx-auto mt-6 mb-16">
      <PayTitle section1="#2E9093" />

      <div className="text-2xl font-semibold m-4 text-[#2E9093]">장바구니</div>

      <div className="border-b"></div>

      {isCartEmpty ? (
        <div className="text-center h-28 my-8 text-gray-500 bg-white flex justify-center items-center">
          장바구니가 비었습니다
        </div>
      ) : (
        <>
          {/* 장바구니에 담긴 items */}
          {cartItems.map((item) => (
            <BasketItem
              key={item.id}
              image={item.image}
              productName={item.productName}
              quantity={item.quantity}
              price={item.price}
              isChecked={item.isChecked}
              onChangeQuantity={(quantity) =>
                handleQuantityChange(item.id, quantity)
              }
              onDelete={() => handleDeleteItem(item.id)}
              onCheckboxChange={() => handleCheckboxChange(item.id)}
            />
          ))}
        </>
      )}

      <div className="border-b"></div>

      <div className="flex justify-end text-xs text-red-400 mt-2 mb-2">
        * 50,000원 이상 주문 시 배송비 무료입니다. (기본 배송비: 3,000원)
      </div>

      {/* 전체 선택/ 선체 삭제 버튼 */}
      <CheckButton
        onSelectAll={handleSelectAll}
        onDeleteAll={handleDeleteAll}
      />

      {/* 총 상품 금액 / 배송비 / 주문하기 버튼*/}
      <PaySummary totalAmount={calculateTotalAmount()} onOrder={handleOrder} />

      {/* 장바구니 안내 문구 */}
      <BasketNotice />
    </div>
  );
};

export default MyBasket;
