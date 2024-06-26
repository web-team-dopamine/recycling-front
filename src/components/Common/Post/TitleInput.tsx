import React from 'react';
import useInput from '../../../hooks/useInput';

const TitleInput = () => {
  const titleInput = useInput({ initialValue: '' });

  return (
    <div>
      <input
        type="text"
        placeholder="제목을 입력하세요."
        className="border border-gray-300 p-2 mt-4 mb-2 w-full placeholder:text-sm"
        value={titleInput.value}
        onChange={titleInput.onChange}
      />
    </div>
  );
};

export default TitleInput;
