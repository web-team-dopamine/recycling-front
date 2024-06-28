import React from 'react';
import BookMarkList from '../components/MyBookMark/BookMarkList';

const MyBookMark = () => {
  const products = [
    {
      id: 1,
      productName: '아이폰 12 Pro',
      companyName: 'Apple',
      price: 1500000,
      reviewCount: 120,
    },
    {
      id: 2,
      productName: '갤럭시 S21 Ultra',
      companyName: 'Samsung',
      price: 1400000,
      reviewCount: 90,
    },
    {
      id: 3,
      productName: '맥북 프로 2021',
      companyName: 'Apple',
      price: 2500000,
      reviewCount: 80,
    },
    {
      id: 4,
      productName: '아이패드 프로',
      companyName: 'Apple',
      price: 1200000,
      reviewCount: 100,
    },
    {
      id: 5,
      productName: 'LG 그램',
      companyName: 'LG',
      price: 1800000,
      reviewCount: 60,
    },
    {
      id: 6,
      productName: '소니 알파 A7 III',
      companyName: 'Sony',
      price: 2000000,
      reviewCount: 70,
    },
    {
      id: 7,
      productName: '닌텐도 스위치',
      companyName: 'Nintendo',
      price: 300000,
      reviewCount: 150,
    },
    {
      id: 8,
      productName: '아마존 에코',
      companyName: 'Amazon',
      price: 150000,
      reviewCount: 200,
    },
    {
      id: 9,
      productName: '구글 픽셀 5',
      companyName: 'Google',
      price: 900000,
      reviewCount: 50,
    },
    {
      id: 10,
      productName: '로지텍 MX 마스터 3',
      companyName: 'Logitech',
      price: 150000,
      reviewCount: 120,
    },
    {
      id: 11,
      productName: '로지텍 MX 마스터 3',
      companyName: 'Logitech',
      price: 150000,
      reviewCount: 120,
    },
    {
      id: 12,
      productName: '로지텍 MX 마스터 3',
      companyName: 'Logitech',
      price: 150000,
      reviewCount: 120,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-6 mb-16">
      <BookMarkList products={products} />
    </div>
  );
};

export default MyBookMark;
