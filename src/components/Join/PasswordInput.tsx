import React, { useState } from 'react';
import useInput from '../../hooks/useInput';

const PasswordInput = () => {
  const passwordInput = useInput({ initialValue: '' });
  const passwordCheckInput = useInput({ initialValue: '' });

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d|[\W_]).{8,13}$/; // 비밀번호 조건
  const [isValid, setIsValid] = useState(true); // 유효성 검사
  const [isDuplicate, setIsDuplicate] = useState(true); // 중복 검사

  return (
    <>
      <label
        htmlFor="password"
        className="block text-gray-700 text-m font-bold mb-2"
      >
        비밀번호<span className="text-red-600">*</span>
      </label>
      <div className="flex flex-col">
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="비밀번호를 입력하세요"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
          className="appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight mb-4 placeholder:text-sm focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="비밀번호를 다시 한 번 입력하세요"
          value={passwordCheckInput.value}
          onChange={passwordCheckInput.onChange}
          className="appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight placeholder:text-sm focus:outline-none focus:shadow-outline"
        />
      </div>
      <p
        className={`text-xs mt-4 ${isValid ? 'text-gray-400' : 'text-red-600'}`}
      >
        {isValid
          ? '영문,숫자,특수문자를 포함하여 8-13자로 입력해주세요.'
          : '잘못된 형식의 비밀번호입니다.'}
      </p>
    </>
  );
};

export default PasswordInput;
