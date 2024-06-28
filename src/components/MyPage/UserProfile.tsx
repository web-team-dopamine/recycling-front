import React from 'react';
import { GrMoney } from 'react-icons/gr';
import { FaHeart, FaRegCommentDots } from 'react-icons/fa';
import useModal from '../../hooks/useModal';
import EditMyProfile from './EditMyProfile';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { openModal, Modal } = useModal();
  const navigate = useNavigate();

  return (
    <div className="mb-8 m-4 ">
      {/* User Profile Section */}
      <div className="p-4  flex justify-between border-b">
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full">
            <img
              src={`${process.env.PUBLIC_URL}/asset/profile.png`}
              alt="profile"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">어푸어푸</h2>{' '}
            <p className="text-gray-600 text-sm">example@email.com</p>{' '}
            <button
              onClick={openModal}
              className="bg-[#5EC7B8] hover:bg-opacity-80 text-white text-xs px-2 py-1 rounded-lg mt-3"
            >
              정보 수정
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center justify-end">
          <div className="flex flex-col items-center text-gray-600 mr-4">
            <GrMoney className="w-8 h-8 text-yellow-500 mb-2" />
            <div className="text-sm">마일리지</div>
            <div className="text-sm">5000</div>
          </div>
          <button
            onClick={() => navigate('/user/:id/bookmark')}
            className="flex flex-col items-center text-gray-600 mr-4 hover:underline hover:text-gray-400"
          >
            <FaHeart className="w-8 h-8 text-red-500 mb-2" />
            <div className="text-sm">찜한 제품</div>
            <div className="text-sm">보러가기</div>
          </button>
          <button
            onClick={() => navigate('/user/:id/comment')}
            className="flex flex-col items-center text-gray-600 mr-4 hover:underline hover:text-gray-400"
          >
            <FaRegCommentDots className="w-8 h-8  mb-2" />
            <div className="text-sm">내가 쓴 리뷰</div>
            <div className="text-sm">보러가기</div>
          </button>
        </div>
      </div>

      {/* edit modal */}
      <Modal>
        <EditMyProfile />
      </Modal>
    </div>
  );
};

export default UserProfile;
