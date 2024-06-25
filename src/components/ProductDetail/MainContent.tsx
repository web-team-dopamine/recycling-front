import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ImgCarousel from './ImgCarousel';
import { useState } from 'react';

const MainContent = () => {
  const navigate = useNavigate();
  const [isMark, setIsMarked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMarkToggle = () => {
    setIsMarked((prev) => !prev);
  };

  const increateQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex max-w-screen-lg mx-auto mt-6 mb-16">
      <div className="w-1/2 pr-8">
        <ImgCarousel />
      </div>

      <div className="w-1/2 mr-8 flex flex-col justify-center">
        <div className="mb-4 flex justify-between">
          <h1 className="text-xl font-bold mr-4">
            [누깍] GAS-MASK WALLY&SQUARE CROSS 월리&스퀘어 크로스백
          </h1>
          <button className="text-gray-600" onClick={handleMarkToggle}>
            <FaHeart
              className={`inline-block mr-1 ${isMark ? 'text-red-500' : ''}`}
            />
          </button>
        </div>
        <div className="mb-4 text-xl font-bold text-end">20,000원</div>
        <div className="mb-4">
          <div className="flex justify-between">
            <div>기본 배송비</div>
            <div>3,000원</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div>수량</div>
            <div className="flex items-center">
              <button className="text-gray-600" onClick={decreaseQuantity}>
                <FaMinus />
              </button>
              <div className="mx-2">{quantity}</div>
              <button className="text-gray-600" onClick={increateQuantity}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <div>적립 마일리지</div>
            <div>1,000 M</div>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => navigate('/user/:id/basket')}
            className="w-full px-4 py-2 bg-[#2E9093] hover:bg-opacity-80 text-white rounded-lg"
          >
            장바구니 담기
          </button>
          <button
            onClick={() => navigate('/user/:id/pay')}
            className="w-full px-4 py-2 bg-[#5EC7B8] hover:bg-opacity-80 text-white rounded-lg"
          >
            바로 구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
