import React from 'react';
import ProductItem from './ProductItem'; // Import the ProductItem component
import { FaAngleRight } from 'react-icons/fa'; // Import the angle right icon for "더보기"
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();

  // Dummy data
  const products = [
    {
      id: 1,
      image: '/asset/main-1-1.png',
      title: '[누깍] FRODO 프로도 M 메신저백',
      company: '누깍',
      price: '30,000원',
    },
    {
      id: 2,
      image: '/asset/main-1-2.png',
      title: '[니올] 하늘풍선 니올링 업사이클링 키링',
      company: '니올',
      price: '10,000원',
    },
    {
      id: 3,
      image: '/asset/main-1-3.png',
      title: '[프라이탁] FREITAG F14 DEXTER 메신저 크로스백',
      company: '프라이탁',
      price: '50,000원',
    },
    {
      id: 4,
      image: '/asset/main-1-4.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
    },
  ];

  return (
    <div className="py-8 px-8 m-7">
      <div className="text-[#2E9093] text-xl font-bold ml-5 mb-4">
        상품 찜 많은 TOP4
      </div>

      <div className="flex justify-end mr-12 mb-2">
        <button
          className="flex items-center bg-transparent border-none text-gray-400 text-sm hover:text-gray-600"
          onClick={() => navigate('/products')}
        >
          <span>더보기</span>
          <FaAngleRight className="text-gray-400 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            company={product.company}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
