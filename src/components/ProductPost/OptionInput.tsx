import React from 'react';
import useInput from '../../hooks/useInput';

const OptionInput = () => {
  const costInput = useInput({ initialValue: '' });
  const milegeInput = useInput({ initialValue: '' });
  const numberInput = useInput({ initialValue: '' });

  return (
    <div className="flex justify-between w-full">
      <div className="w-1/3 mr-2">
        <input
          type="text"
          placeholder="가격"
          className="border border-gray-300 p-2 w-full placeholder:text-sm"
          value={costInput.value}
          onChange={costInput.onChange}
        />
      </div>
      <div className="w-1/3 mr-2">
        <input
          type="text"
          placeholder="적립 마일리지"
          className="border border-gray-300 p-2 w-full placeholder:text-sm"
          value={milegeInput.value}
          onChange={milegeInput.onChange}
        />
      </div>
      <div className="w-1/3">
        <input
          type="text"
          placeholder="수량 제한"
          className="border border-gray-300 p-2 w-full placeholder:text-sm"
          value={numberInput.value}
          onChange={numberInput.onChange}
        />
      </div>
    </div>
  );
};

export default OptionInput;
