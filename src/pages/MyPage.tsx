import React from 'react';
import { MyPostList, OrderHistory, UserProfile } from '../components/MyPage';

interface Product {
  id: number;
  companyName: string;
  productImage: string;
  productName: string;
  price: number;
  options: string;
}

interface Order {
  id: number;
  products: Product[];
}

const MyPage = () => {
  const orders: Order[] = [
    {
      id: 1,
      products: [
        {
          id: 1,
          companyName: '니올',
          productImage: '/asset/main-1-2.png',
          productName: '하늘풍선 니올링 업사이클링 키링',
          price: 10000,
          options: '오렌지 / 문구: 000',
        },
        {
          id: 2,
          companyName: '기시히',
          productImage: '/asset/p-8.png',
          productName: '백팩 5',
          price: 60000,
          options: '없음',
        },
      ],
    },
    {
      id: 2,
      products: [
        {
          id: 3,
          companyName: '누깍',
          productImage: '/asset/main-1-1.png',
          productName: 'FRODO 프로도 M 메신저백',
          price: 30000,
          options: '파우치 포함',
        },
      ],
    },
  ];

  const posts = [
    {
      id: 1,
      thumbnailUrl: '/asset/main-2-2.png',
      title: 'Post 1',
    },
    {
      id: 2,
      thumbnailUrl: '/asset/main-2-3.png',
      title: 'Post 2',
    },
    {
      id: 3,
      thumbnailUrl: '/asset/main-2-4.png',
      title: 'Post 3',
    },
    {
      id: 4,
      thumbnailUrl: '/asset/pro-5.png',
      title: 'Post 4',
    },
    {
      id: 5,
      thumbnailUrl: '/asset/pro-6.png',
      title: 'Post 5',
    },
    {
      id: 6,
      thumbnailUrl: '/asset/pro-7.png',
      title: 'Post 6',
    },
    {
      id: 7,
      thumbnailUrl: '/asset/pro-8.png',
      title: 'Post 7',
    },
    {
      id: 8,
      thumbnailUrl: '/asset/mypage-img.png',
      title: 'Post 8',
    },
    {
      id: 9,
      thumbnailUrl: '/asset/mypage-img.png',
      title: 'Post 9',
    },
    {
      id: 10,
      thumbnailUrl: '/asset/mypage-img.png',
      title: 'Post 10',
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-6 mb-16">
      {/* user 정보 (프로필, 닉네임, 이메일, 정보수정 버튼) */}
      {/* +) 마일리지/찜/리뷰 (찜과 댓글은 리뷰 시 페이지 이동) */}
      <UserProfile />

      {/* 주문 및 배송 내역 */}
      <OrderHistory orders={orders} />

      <div className="border-b m-4 mb-8"></div>

      {/* 내가 작성한 글 (환경 보호 인증 글) */}
      <MyPostList posts={posts} />
    </div>
  );
};

export default MyPage;
