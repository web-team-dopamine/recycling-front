import React, { useState } from 'react';
import { AddressInput } from '../Common';
//import useModal from '../../hooks/useModal';

const EditMyProfile: React.FC = () => {
  const initialData = {
    username: '어푸어푸',
    phoneNumber: '010-1234-5678',
    zonecode: '12345',
    address: '서울시 강남구',
    detailAddress: '123-456',
  };

  const [name, setName] = useState(initialData.username);
  const [password, setPassword] = useState(initialData.phoneNumber);
  const [zonecode, setZonecode] = useState(initialData.zonecode);
  const [address, setAddress] = useState(initialData.address);
  const [detailAddress, setDetailAddress] = useState(initialData.detailAddress);

  //const { openModal, Modal, closeModal } = useModal();
  const [isModified, setIsModified] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsModified(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsModified(true);
  };

  const handleAddressChange = (
    newZonecode: string,
    newAddress: string,
    newDetailAddress: string,
  ) => {
    setZonecode(newZonecode);
    setAddress(newAddress);
    setDetailAddress(newDetailAddress);
    setIsModified(true);
  };

  const handleSaveChanges = () => {
    setIsModified(false);
    //openModal();
  };

  return (
    <div className="p-4 w-full">
      <h2 className="text-lg text-white font-semibold mb-4">정보 수정</h2>

      <div className="mt-2">
        <label className="text-white font-bold">닉네임</label>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 px-2 py-1 mt-1 w-full"
        />
      </div>

      <div className="mt-3">
        <label className="text-white font-bold">비밀번호</label>
        <input
          type="password"
          placeholder="새로운 비밀번호를 입력해주세요"
          value={password}
          onChange={handlePasswordChange}
          className="border border-gray-300 px-2 py-1 mt-1 w-full"
        />
      </div>

      <div className="mt-3">
        <label className="text-white font-bold">주소지 변경</label>
        <AddressInput
          zonecode={zonecode}
          address={address}
          detailAddress={detailAddress}
          onChange={handleAddressChange}
        />
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleSaveChanges}
          className="w-1/2 bg-[#68CBBD] hover:bg-opacity-80 text-white px-4 py-2 rounded"
        >
          수정하기
        </button>
      </div>

      {/* confirm modal */}
      {/* <Modal>
        <div className="p-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-4">수정되었습니다!</h2>
          <button
            className="bg-[#68CBBD] hover:bg-opacity-80 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            확인
          </button>
        </div>
      </Modal> */}
    </div>
  );
};

export default EditMyProfile;
