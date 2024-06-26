import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EditButtonProps {
  createUrl: string;
  cancelUrl: string;
}

const EditButton: React.FC<EditButtonProps> = ({ createUrl, cancelUrl }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(createUrl)}
        className="bg-[#5EC7B8] hover:bg-[#2E9093] w-1/4 text-white font-bold rounded px-2 py-2 mr-4 focus:outline-none focus:shadow-outline"
      >
        등록하기
      </button>
      <button
        onClick={() => navigate(cancelUrl)}
        className="bg-gray-300 hover:bg-gray-400 w-1/4 text-gray-800 font-bold py-2 px-4 rounded"
      >
        취소
      </button>
    </>
  );
};

export default EditButton;
