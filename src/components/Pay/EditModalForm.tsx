import React, { useState } from 'react';
import { AddressInput } from '../Common';

interface EditModalFormProps {
  initialData: {
    username: string;
    phoneNumber: string;
    zonecode: string;
    address: string;
    detailAddress: string;
  };
  closeModal: () => void;
  onSave: (editedData: {
    username: string;
    phoneNumber: string;
    zonecode: string;
    address: string;
    detailAddress: string;
  }) => void;
}

const EditModalForm: React.FC<EditModalFormProps> = ({
  initialData,
  closeModal,
  onSave,
}) => {
  const [name, setName] = useState(initialData.username);
  const [phone, setPhone] = useState(initialData.phoneNumber);
  const [zonecode, setZonecode] = useState(initialData.zonecode);
  const [address, setAddress] = useState(initialData.address);
  const [detailAddress, setDetailAddress] = useState(initialData.detailAddress);

  const handleSave = () => {
    const editedData = {
      username: name,
      phoneNumber: phone,
      zonecode: zonecode,
      address: address,
      detailAddress: detailAddress,
    };
    onSave(editedData);
    closeModal();
  };

  const handleAddressChange = (
    newZonecode: string,
    newAddress: string,
    newDetailAddress: string,
  ) => {
    setZonecode(newZonecode);
    setAddress(newAddress);
    setDetailAddress(newDetailAddress);
  };

  return (
    <div className="p-4 w-full">
      <h2 className="text-lg text-white font-semibold mb-4">배송지 수정</h2>

      <div className="mt-2">
        <label className="text-white font-bold">이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
          className="border border-gray-300 px-2 py-1 mt-1 w-full"
        />
      </div>

      <div className="mt-3">
        <label className="text-white font-bold">전화번호</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="전화번호를 입력해주세요"
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
          className="w-1/2 bg-[#68CBBD] hover:bg-opacity-80 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default EditModalForm;
