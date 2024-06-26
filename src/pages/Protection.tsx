import React from 'react';
import SearchInput from '../hooks/useSearch';
import { PostButton } from '../components/Common';
import ProtectionItemList from '../components/ProtectionMain/ProtectionItemList';

interface ProtectionProps {
  isLoggedIn: boolean;
  userType: 'user' | 'seller' | 'admin';
}

const Protection: React.FC<ProtectionProps> = ({ isLoggedIn, userType }) => {
  // dummy data
  const items = [
    {
      id: 1,
      image: '/asset/main-2-1.png',
      title: '텀블러 사용 인증합니다~',
      nickname: '누깍',
      likes: 55,
      date: new Date('2024-06-24'),
      liked: false,
    },
    {
      id: 2,
      image: '/asset/main-2-2.png',
      title: '오늘 점심은 한강!',
      nickname: '여의도지박령',
      likes: 20,
      date: new Date('2024-06-01'),
      liked: true,
    },
    {
      id: 3,
      image: '/asset/main-2-3.png',
      title: '마라탕도 다회용기에 포장했어요',
      nickname: '마라탕후루',
      likes: 16,
      date: new Date('2024-05-04'),
      liked: false,
    },
    {
      id: 4,
      image: '/asset/main-2-4.png',
      title: '플라스틱없는 샴푸바 구매 후기',
      nickname: '어푸어푸',
      likes: 15,
      date: new Date('2024-05-02'),
      liked: true,
    },
    {
      id: 5,
      image: '/asset/pro-5.png',
      title: '제로웨이스트샵에 다녀왔어요',
      nickname: '오나오',
      likes: 440,
      date: new Date('2023-04-22'),
      liked: false,
    },
    {
      id: 6,
      image: '/asset/pro-6.png',
      title: '잠실 야구장에서 야구푸드',
      nickname: '잠실주인',
      likes: 12,
      date: new Date('2024-03-30'),
      liked: false,
    },
    {
      id: 7,
      image: '/asset/pro-7.png',
      title: '다회용기로 배달시켜봤어요',
      nickname: '자취러',
      likes: 40,
      date: new Date('2024-03-22'),
      liked: true,
    },
    {
      id: 8,
      image: '/asset/pro-8.png',
      title: '떡볶이 포장',
      nickname: '떡볶이는먹고싶어',
      likes: 150,
      date: new Date('2024-01-22'),
      liked: true,
    },
    {
      id: 9,
      image: '/asset/pro-8.png',
      title: '떡볶이 포장',
      nickname: '떡볶이는먹고싶어',
      likes: 9,
      date: new Date('2024-01-12'),
      liked: true,
    },
    {
      id: 10,
      image: '/asset/main-2-2.png',
      title: '떡볶이 포장',
      nickname: '떡볶이는먹고싶어',
      likes: 88,
      date: new Date('2023-12-22'),
      liked: false,
    },
    {
      id: 11,
      image: '/asset/pro-5.png',
      title: '떡볶이 포장',
      nickname: '떡볶이는먹고싶어',
      likes: 5,
      date: new Date('2023-11-22'),
      liked: false,
    },
    {
      id: 12,
      image: '/asset/pro-7.png',
      title: '떡볶이 포장',
      nickname: '떡볶이는먹고싶어',
      likes: 70,
      date: new Date('2023-05-29'),
      liked: false,
    },
  ];

  return (
    <div>
      {/* 검색창 */}
      <div className="mt-6 mb-6 justify-end flex ml-4 mr-20">
        {userType === 'user' && <PostButton url="/protection/post" />}
        <SearchInput />
      </div>

      {/* 환경 인증글 list */}
      <div className="mb-6 mt-6">
        <ProtectionItemList items={items} />
      </div>
    </div>
  );
};

export default Protection;
