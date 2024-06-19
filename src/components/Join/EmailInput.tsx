import React, { useState } from 'react';
import useModal from '../../hooks/useModal';
import useInput from '../../hooks/useInput';

const EmailInput = () => {
  const emailInput = useInput({ initialValue: '' });

  const { openModal, Modal, closeModal } = useModal();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // 이메일 조건
  const [isValid, setIsValid] = useState(true); // 유효성 검사
  const [isDuplicate, setIsDuplicate] = useState(true); // 중복 검사

  const handleEmail = () => {
    // 이메일 중복 확인
    openModal();
  };

  return (
    <>
      <label
        htmlFor="email"
        className="block text-gray-700 text-m font-bold mb-2"
      >
        이메일<span className="text-red-600">*</span>
      </label>
      <div className="flex">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={emailInput.value}
          onChange={emailInput.onChange}
          className="appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight placeholder:text-sm focus:outline-none focus:shadow-outline w-full"
        />
        <button
          type="button"
          onClick={handleEmail}
          className="bg-[#5EC7B8] hover:bg-[#2E9093] text-white rounded min-w-[120px] px-4 py-2 ml-4 focus:outline-none focus:shadow-outline"
        >
          중복 확인
        </button>
      </div>
      <p
        className={`text-xs mt-4 ${isValid ? 'text-gray-400' : 'text-red-600'}`}
      >
        {isValid
          ? '사용 가능한 특수문자는 (_/-/@/.)입니다.'
          : '잘못된 형식의 이메일입니다.'}
      </p>

      {/* Modal */}
      <Modal style={{ width: '400px', height: '220px' }}>
        <div>
          <div className="mt-8 mb-8 text-xl text-[#257276]">
            {isValid
              ? isDuplicate
                ? '확인되었습니다'
                : '이메일이 중복됩니다. 다른 이메일을 입력해주세요.'
              : '잘못된 형식의 이메일입니다.'}
          </div>
          <button
            onClick={closeModal}
            className="bg-[#2E9093] hover:bg-[#257276] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            확인
          </button>
        </div>
      </Modal>
    </>
  );
};

export default EmailInput;
