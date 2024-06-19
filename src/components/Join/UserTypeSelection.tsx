import React from 'react';

const UserTypeSelection = () => {
  return (
    <>
      <label
        htmlFor="usertype"
        className="block text-gray-700 text-m font-bold mb-3"
      >
        회원 유형 선택<span className="text-red-600">*</span>
      </label>
      <div className="flex">
        <div className="flex items-center mb-2">
          <input
            className="appearance-none w-3 h-3 mr-2 border border-gray-300 rounded-full checked:bg-[#2E9093] focus:outline-none"
            type="radio"
            name="userType"
            id="radioSeller"
          />
          <label className="cursor-pointer text-sm mr-6" htmlFor="radioSeller">
            판매자
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            className="appearance-none w-3 h-3 mr-2 border border-gray-300 rounded-full checked:bg-[#2E9093] focus:outline-none"
            type="radio"
            name="userType"
            id="radioBuyer"
          />
          <label className="cursor-pointer text-sm" htmlFor="radioBuyer">
            구매자
          </label>
        </div>
      </div>
    </>
  );
};

export default UserTypeSelection;
