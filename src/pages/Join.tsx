import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EmailInput,
  NicknameInput,
  PasswordInput,
  UserTypeSelection,
} from '../components/Join';
import { AddressInput } from '../components/Common';

const Join = () => {
  const navigate = useNavigate();

  // State variables for address input
  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  // Function to handle address input change
  const handleAddressChange = (
    zonecode: string,
    address: string,
    detailAddress: string,
  ) => {
    setZonecode(zonecode);
    setAddress(address);
    setDetailAddress(detailAddress);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded-lg px-10 py-8 max-w-lg w-full mt-7 mb-7">
        <label className="text-[#2E9093] font-bold text-3xl mt-16 mb-16 text-center">
          회원가입
        </label>

        {/* 회원가입 form */}
        <div className="mt-6 mb-6">
          {/* 판매자/구매자 선택 */}
          <UserTypeSelection />
        </div>

        <div className="mb-6">
          {/* 닉네임 */}
          <NicknameInput />
        </div>

        <div className="mb-6">
          {/* 이메일 */}
          <EmailInput />
        </div>

        <div className="mb-6">
          {/* 비밀번호 */}
          <PasswordInput />
        </div>

        <div className="mb-6">
          <label
            htmlFor="nickname"
            className="block text-gray-700 text-m font-bold mb-2"
          >
            주소<span className="text-red-600">*</span>
          </label>
          {/* 주소 입력 */}
          <AddressInput
            zonecode={zonecode}
            address={address}
            detailAddress={detailAddress}
            onChange={handleAddressChange}
          />
        </div>

        {/* 가입 button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#2E9093] hover:bg-[#257276] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate('/')}
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
