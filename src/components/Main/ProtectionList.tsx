import { FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import ProtectionItem from './ProtectionItem';

const ProtectionList = () => {
  const navigate = useNavigate();

  // Dummy data
  const protections = [
    {
      id: 1,
      image: '/asset/main-2-1.png',
      title: '텀블러 사용 인증합니다~',
      nickname: '누깍',
      date: '20xx.xx.xx',
      likes: 55,
    },
    {
      id: 2,
      image: '/asset/main-2-2.png',
      title: '오늘 점심은 한강!',
      nickname: '여의도지박령',
      date: '20xx.xx.xx',
      likes: 20,
    },
    {
      id: 3,
      image: '/asset/main-2-3.png',
      title: '마라탕도 다회용기에 포장했어요',
      nickname: '마라탕후루',
      date: '20xx.xx.xx',
      likes: 16,
    },
    {
      id: 4,
      image: '/asset/main-2-4.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      nickname: '플리츠마마',
      date: '20xx.xx.xx',
      likes: 15,
    },
  ];

  return (
    <div className="py-8 px-8 m-7">
      <div className="text-[#2E9093] text-xl font-bold ml-5 mb-4">
        환경보호 인증 좋아요 TOP4
      </div>

      <div className="flex justify-end mr-12 mb-2">
        <button
          className="flex items-center bg-transparent border-none text-gray-400 text-sm hover:text-gray-600"
          onClick={() => navigate('/protection')}
        >
          <span>더보기</span>
          <FaAngleRight className="text-gray-400 ml-1" />
        </button>
      </div>

      {/* 인증글 좋아요 top4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {protections.map((protection) => (
          <ProtectionItem
            key={protection.id}
            image={protection.image}
            title={protection.title}
            nickname={protection.nickname}
            date={protection.date}
            likes={protection.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default ProtectionList;
