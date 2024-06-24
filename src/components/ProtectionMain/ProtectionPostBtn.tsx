import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectionPostBtn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          onClick={() => navigate('/protection/post')}
          className="bg-[#5EC7B8] hover:bg-[#2E9093] text-white text-sm rounded px-2 py-2 mr-4 focus:outline-none focus:shadow-outline"
        >
          글 작성하기
        </button>
      </div>
    </div>
  );
};

export default ProtectionPostBtn;
