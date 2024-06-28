import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => navigate('/user/:id/payend')}
        className="bg-[#5EC7B8] hover:bg-opacity-80 w-1/4 text-white border rounded px-4 py-2 m-4"
      >
        결제하기
      </button>
      <button
        onClick={() => navigate('/user/:id/basket')}
        className="bg-[#D9D9D9] hover:bg-opacity-80 w-1/4 text-white border rounded px-4 py-2"
      >
        취소
      </button>
    </div>
  );
};

export default Buttons;
