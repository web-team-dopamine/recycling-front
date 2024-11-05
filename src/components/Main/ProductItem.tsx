import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Importing icons for wishlist and cart
import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import { ProductItemProps } from '../../util/types';

const ProductItem = ({ image, title, company, price }: ProductItemProps) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  // 좋아요, 장바구니 추가 관련 modal
  const {
    openModal: openMarkModal,
    closeModal: closeMarkModal,
    Modal: MarkModal,
  } = useModal();
  const {
    openModal: openCartModal,
    closeModal: closeCartModal,
    Modal: CartModal,
  } = useModal();

  // 확인 modal
  const {
    openModal: openConfirmModal,
    closeModal: closeConfirmModal,
    Modal: ConfirmModal,
  } = useModal();

  // 임의로 login 했다고 가정
  const isLoggedIn = () => {
    return true;
  };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img className="w-full h-34 object-cover" src={image} alt={title} />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="text-white text-center">
              <button
                className="text-gray-400 hover:text-red-600 mx-2"
                onClick={openMarkModal}
              >
                <FaHeart className="inline-block" />
              </button>
              <button
                className="text-gray-400 hover:text-[#2E9093] mx-2"
                onClick={openCartModal}
              >
                <FaShoppingCart className="inline-block" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="px-4 py-4" onClick={() => navigate('/product/:id')}>
        <div
          className={`font-bold text-l mb-2 ${hovered ? 'hover:underline' : ''}`}
        >
          {title}
        </div>
        <p className={`text-gray-700 text-sm mb-2 `}>{company}</p>
        <p className={`text-gray-700 text-base mb-2 `}>{price}</p>
      </div>

      {/* 찜 버튼 클릭 modal */}
      <MarkModal>
        {isLoggedIn() ? (
          <>
            <div className="text-gray-800 mb-4">
              이 상품을 찜 리스트에 추가하시겠습니까?
            </div>
            <div className="flex justify-between">
              <button
                className="underline text-gray-800 px-4 py-2 rounded hover:text-[#2E9093]"
                onClick={openConfirmModal}
              >
                예
              </button>
              <button
                className="underline text-gray-800 px-4 py-2 rounded hover:text-[#2E9093]"
                onClick={closeMarkModal}
              >
                아니요
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 mb-4">로그인이 필요합니다.</div>
            <button
              className="bg-[#2E9093] text-white px-4 py-2 rounded hover:bg-opacity-80 mr-2"
              onClick={() => navigate('/login')}
            >
              로그인하기
            </button>
          </>
        )}
      </MarkModal>

      {/* 장바구니 클릭 modal */}
      <CartModal>
        {isLoggedIn() ? (
          <>
            <div className="text-gray-800 mb-4">
              이 상품을 장바구니에 추가하시겠습니까?
            </div>
            <div className="flex justify-between">
              <button
                className="underline text-gray-800 px-4 py-2 rounded hover:text-[#2E9093]"
                onClick={openConfirmModal}
              >
                예
              </button>
              <button
                className="underline text-gray-800 px-4 py-2 rounded hover:text-[#2E9093]"
                onClick={closeCartModal}
              >
                아니요
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-800 mb-4">로그인이 필요합니다.</div>
            <button
              className="bg-[#2E9093] text-white px-4 py-2 rounded hover:bg-opacity-80 mr-2"
              onClick={() => navigate('/login')}
            >
              로그인 하기
            </button>
          </>
        )}
      </CartModal>

      {/* 확인 modal */}
      <ConfirmModal>
        <div className="text-gray-800 mb-4">추가되었습니다!</div>
        <button
          className="bg-[#2E9093] text-white px-4 py-2 rounded hover:bg-opacity-80 mr-2"
          onClick={() => {
            closeConfirmModal();
            closeCartModal();
            closeMarkModal();
          }}
        >
          확인
        </button>
      </ConfirmModal>
    </div>
  );
};

export default ProductItem;
