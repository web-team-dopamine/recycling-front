import React, { ChangeEvent } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { AddressData } from '../../../util/types';

interface AddressInputProps {
  zonecode: string;
  address: string;
  detailAddress: string;
  onChange: (zonecode: string, address: string, detailAddress: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({
  zonecode,
  address,
  detailAddress,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const completeHandler = (data: AddressData) => {
    const { zonecode, address } = data;
    onChange(zonecode, address, detailAddress);
    setIsOpen(false);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const toggleHandler = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(zonecode, address, e.target.value);
  };

  const postCodeStyle = {
    width: '400px',
    height: '480px',
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <div
            className="appearance-none bg-white border rounded-l py-2 px-3 text-gray-700 leading-tight placeholder:text-sm focus:outline-none focus:shadow-outline w-full"
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
        <div className="appearance-none bg-white border h-[35px] rounded-l mt-4 py-2 px-3 text-gray-700 leading-tight mb-4 placeholder:text-sm focus:outline-none focus:shadow-outline">
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
