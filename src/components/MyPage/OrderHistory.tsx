import React, { useState } from 'react';
import usePagination from '../../hooks/usePagination';
import OrderedItem from './OrderedItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Order, OrderHistoryProps, Product } from '../../util/types';
import useModal from '../../hooks/useModal';
import OrderStatus from './OrderStatus';

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  const itemsPerPage = 1;
  const {
    currentPage,
    currentItems,
    paginate,
    totalPages,
    goToPrevPage,
    goToNextPage,
  } = usePagination(orders, itemsPerPage);

  const navigate = useNavigate();

  const { openModal, Modal } = useModal();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleReviewClick = (order: Order) => {
    navigate('/product/:productid');
  };

  const handleTrackClick = (order: Order) => {
    setSelectedOrder(order);
    openModal();
  };

  return (
    <div className="mb-8">
      <div className="text-xl font-semibold m-4 text-[#2E9093]">
        주문 및 배송 내역
      </div>

      <div className="bg-white p-4 m-4 shadow-md rounded-lg">
        {/* Display current page of orders */}
        {currentItems.map((order) => (
          <div key={order.id} className="flex items-center py-4">
            {/* Order items */}
            <div className="flex-1">
              {order.products.map((product: Product) => (
                <OrderedItem
                  key={product.id}
                  companyName={product.companyName}
                  productImage={product.productImage}
                  productName={product.productName}
                  price={product.price}
                  options={product.options}
                  onReviewClick={() => handleReviewClick(order)}
                  onTrackClick={() => handleTrackClick(order)}
                />
              ))}
            </div>
            {/* Review and Track buttons */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => handleReviewClick(order)}
                className="bg-[#2E9093] hover:bg-opacity-80 text-white border rounded-lg px-4 py-2 m-6"
              >
                리뷰 쓰러가기
              </button>
              <button
                onClick={() => handleTrackClick(order)}
                className="bg-[#2E9093] hover:bg-opacity-80 text-white border rounded-lg px-4 py-2 m-6"
              >
                배송 조회하기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          className="flex items-center"
          onClick={() => goToPrevPage()}
          disabled={currentPage === 1}
        >
          <FaChevronLeft className="mr-2 text-[#2E9093]" />
        </button>
        <div className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-2 py-2 rounded mr-2 ${currentPage === index + 1 ? 'text-[#2E9093] font-bold' : 'text-gray-400'}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="flex items-center"
          onClick={() => goToNextPage()}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight className="ml-2 text-[#2E9093]" />
        </button>
      </div>

      {/* 배송조회 modal */}
      <Modal>
        {selectedOrder && (
          <OrderStatus
            products={selectedOrder.products.map(
              (product) => product.productName,
            )}
            trackingNumber={`TRK-${selectedOrder.id}`}
            deliveryStatus="배송준비중"
          />
        )}
      </Modal>
    </div>
  );
};

export default OrderHistory;
