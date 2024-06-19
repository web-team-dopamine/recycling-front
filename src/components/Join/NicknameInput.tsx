import { useState } from 'react';
import useInput from '../../hooks/useInput';
import useModal from '../../hooks/useModal';

const NicknameInput = () => {
  const nicknameInput = useInput({ initialValue: '' });

  const { openModal, Modal, closeModal } = useModal();

  const nicknameRegex = /^[a-zA-Z0-9]{1,5}$/; // 닉네임 조건
  const [isValid, setIsValid] = useState(true); // 유효성 검사
  const [isDuplicate, setIsDuplicate] = useState(true); // 중복 검사

  const handleNickname = () => {
    // 닉네임 중복 확인
    openModal();
  };

  return (
    <>
      <label
        htmlFor="nickname"
        className="block text-gray-700 text-m font-bold mb-2"
      >
        닉네임<span className="text-red-600">*</span>
      </label>
      <div className="flex">
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력하세요"
          value={nicknameInput.value}
          onChange={nicknameInput.onChange}
          className="appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight placeholder:text-sm focus:outline-none focus:shadow-outline w-full"
        />
        <button
          type="button"
          onClick={handleNickname}
          className="bg-[#5EC7B8] hover:bg-[#2E9093] text-white rounded min-w-[120px] px-4 py-2 ml-4 focus:outline-none focus:shadow-outline"
        >
          중복 확인
        </button>
      </div>
      <p
        className={`text-xs mt-4 ${isValid ? 'text-gray-400' : 'text-red-600'}`}
      >
        {isValid
          ? '최대 5글자까지 허용 (특수문자는 사용하실 수 없습니다)'
          : '잘못된 형식의 닉네임입니다.'}
      </p>

      {/* Modal */}
      <Modal style={{ width: '400px', height: '220px' }}>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-8 mb-8 text-xl text-[#257276]">
            {isValid
              ? isDuplicate
                ? '확인되었습니다'
                : '닉네임이 중복됩니다. 다른 닉네임을 입력해주세요.'
              : '잘못된 형식의 닉네임입니다.'}
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

export default NicknameInput;
