import React from 'react';

interface CheckButtonPros {
  onSelectAll: () => void;
  onDeleteAll: () => void;
}

const CheckButton: React.FC<CheckButtonPros> = ({
  onSelectAll,
  onDeleteAll,
}) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <button
          onClick={onSelectAll}
          className="bg-[#5EC7B8] hover:bg-opacity-80 text-white border rounded px-4 py-2 m-4"
        >
          전체선택
        </button>
        <button
          onClick={onDeleteAll}
          className="bg-[#D9D9D9] hover:bg-opacity-80 text-white border rounded px-4 py-2"
        >
          전체삭제
        </button>
      </div>
    </div>
  );
};

export default CheckButton;
