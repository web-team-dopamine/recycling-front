import React, { ChangeEvent, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressInput = () => {
  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const completeHandler = (data: AddressData) => {
    console.log(data);
    const { zonecode, address } = data;
    setZonecode(zonecode);
    setAddress(address);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const toggleHandler = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  const postCodeStyle = {
    width: '400px',
    height: '480px',
  };

  return (
    <>
      <label
        htmlFor="nickname"
        className="block text-gray-700 text-m font-bold mb-2"
      >
        주소<span className="text-red-600">*</span>
      </label>
      <div className="flex flex-col">
        <div className="flex">
          <div
            className="appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight placeholder:text-sm focus:outline-none focus:shadow-outline w-full"
            onClick={toggleHandler}
          >
            {zonecode}
          </div>
          <button
            type="button"
            onClick={toggleHandler}
            className="bg-[#5EC7B8] hover:bg-[#2E9093] text-white text-sm rounded min-w-[140px] px-4 py-2 ml-4 focus:outline-none focus:shadow-outline"
          >
            우편번호 검색
          </button>
        </div>
        <div className="appearance-none border h-[35px] rounded-l mt-4 py-2 px-3 text-gray-700 leading-tight mb-4 placeholder:text-sm focus:outline-none focus:shadow-outline">
          {address}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur"
            onClick={closeHandler}
          ></div>
          <DaumPostcode
            style={postCodeStyle}
            onComplete={completeHandler}
            onClose={closeHandler}
          />
        </div>
      )}
      <div className="flex flex-col">
        <input
          value={detailAddress}
          onChange={inputChangeHandler}
          placeholder="상세 주소를 입력하세요."
          className="appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight mb-4 placeholder:text-sm focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
};

export default AddressInput;
