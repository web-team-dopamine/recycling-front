import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

const LoginForm = () => {
  const emailInput = useInput({ initialValue: '' });
  const passwordInput = useInput({ initialValue: '' });

  const navigate = useNavigate();

  // login func
  //const loginHandler = () => {};

  return (
    <>
      {/* 이메일 입력 */}
      <label
        htmlFor="password"
        className="block text-gray-700 text-m font-bold mb-2"
      >
        이메일
      </label>
      <input
        type="text"
        id="email"
        name="emamil"
        placeholder="이메일을 입력하세요"
        value={emailInput.value}
        onChange={emailInput.onChange}
        className="appearance-none w-full border rounded-l py-2 px-3 text-gray-700 leading-tight mb-4 placeholder:text-sm focus:outline-none focus:shadow-outline"
      />

      {/* 비밀번호 입력 */}
      <label
        htmlFor="password"
        className="block text-gray-700 text-m font-bold mb-2"
      >
        비밀번호
      </label>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={passwordInput.value}
        onChange={passwordInput.onChange}
        className="appearance-none w-full border rounded-l py-2 px-3 text-gray-700 leading-tight mb-10 placeholder:text-sm focus:outline-none focus:shadow-outline"
      />

      {/* 로그인 button */}
      <div className="flex items-center justify-center">
        <button
          className="bg-[#2E9093] hover:bg-[#257276] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => navigate('/')}
        >
          로그인
        </button>
      </div>
    </>
  );
};

export default LoginForm;
