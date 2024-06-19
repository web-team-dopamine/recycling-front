import { useNavigate } from 'react-router-dom';
import {
  AddressInput,
  EmailInput,
  NicknameInput,
  PasswordInput,
  UserTypeSelection,
} from '../components/Join';

const Join = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded-lg px-10 py-8 max-w-lg w-full mt-7 mb-7">
        <label className="text-[#2E9093] font-bold text-5xl mt-16 mb-16 text-center">
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
          {/* 주소 입력 */}
          <AddressInput />
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
