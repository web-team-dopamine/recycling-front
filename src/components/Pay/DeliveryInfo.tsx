import React, { ChangeEvent, useState } from 'react';
import useModal from '../../hooks/useModal';
import EditModalForm from './EditModalForm';

const DeliveryInfo = () => {
  const initialData = {
    username: '어푸어푸',
    phoneNumber: '010-1234-5678',
    zonecode: '000000',
    address: '서울시 00구 00동 000아파트',
    detailAddress: '000동 ---호',
  };

  const [deliveryMemo, setDeliveryMemo] = useState('');
  const [otherMemo, setOtherMemo] = useState('');
  const [currentData, setCurrentData] = useState(initialData);

  const { Modal, openModal, closeModal } = useModal();

  const handleDeliveryMemoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const memo = e.target.value;
    if (memo === '기타') {
      setDeliveryMemo(memo);
    } else {
      setDeliveryMemo(memo);
      setOtherMemo('');
    }
  };

  const handleEdit = () => {
    openModal();
  };

  const handleSaveEdit = (editedData: typeof initialData) => {
    setCurrentData(editedData);
    closeModal();
  };

  //   const handleAddressChange = (
  //     zonecode: string,
  //     address: string,
  //     detailAddress: string,
  //   ) => {
  //     setCurrentData({
  //       ...currentData,
  //       zonecode,
  //       address,
  //       detailAddress,
  //     });
  //   };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold m-4 text-[#2E9093]">배송지</h2>

      <div className="bg-white px-8 py-4 m-4 rounded-lg border  mb-8">
        <div className="flex justify-between">
          <div className="text-base">
            <div className="mt-2">{currentData.username}</div>
            <div className="mt-2">{currentData.phoneNumber}</div>
            <div className="mt-2">{currentData.zonecode}</div>
            <div className="mt-2">{currentData.address}</div>
            <div className="mt-2">{currentData.detailAddress}</div>
          </div>

          <button
            className="bg-[#68CBBD] hover:bg-opacity-80 h-full text-white px-3 py-1 rounded"
            onClick={handleEdit}
          >
            수정
          </button>
        </div>

        <div className="mt-4">
          <label className="block mb-2">
            배송메모 선택
            <select
              value={deliveryMemo}
              onChange={handleDeliveryMemoChange}
              className="border border-gray-300 bg-gray-100 rounded px-2 py-1 mt-1 w-full text-sm"
            >
              <option value="">선택 안함</option>
              <option value="부재 시 경비실에 맡겨주세요">
                부재 시 경비실에 맡겨주세요
              </option>
              <option value="부재 시 휴대폰으로 연락바랍니다.">
                부재 시 휴대폰으로 연락바랍니다.
              </option>
              <option value="방문 전 연락 부탁드립니다">
                방문 전 연락 부탁드립니다
              </option>
              <option value="기타">기타</option>
            </select>
          </label>
          {deliveryMemo === '기타' && (
            <input
              type="text"
              value={otherMemo}
              onChange={(e) => setOtherMemo(e.target.value)}
              placeholder="배송 메모를 직접 입력해주세요"
              className="border border-gray-300 px-2 py-1 mt-1 w-full placeholder:text-sm"
            />
          )}
        </div>

        <div className="mt-4 mb-4 text-red-400 text-xs">
          * 해외직배송 상품은 통관을 위해 도로명주소와 실제 연락처(안심번호
          불가)를 입력해야 합니다
        </div>
      </div>

      {/* Edit modal */}
      <Modal>
        <EditModalForm
          initialData={currentData} // Pass currentData to EditModalForm
          closeModal={closeModal}
          onSave={handleSaveEdit}
        />
      </Modal>
    </div>
  );
};

export default DeliveryInfo;
