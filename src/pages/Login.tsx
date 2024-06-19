import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded-lg px-10 py-8 max-w-lg w-full mt-7 mb-7">
        <label className="text-[#2E9093] font-bold text-3xl mt-16 mb-16 text-center">
          로그인
        </label>

        {/* 로그인 form */}
        <div className="mt-7 mb-7">
          <LoginForm />
        </div>
      </form>
    </div>
  );
};

export default Login;
