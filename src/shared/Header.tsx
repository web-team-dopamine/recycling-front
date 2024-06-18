import React, { useState } from 'react';
//import { Menu, Transition } from '@headlessui/react';
//import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  isLoggedIn: boolean;
  userType: 'admin' | 'seller' | 'user';
};

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userType }) => {
  const navigate = useNavigate();
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-[#ACDACD] text-white px-4 py-3 flex justify-between items-center h-[120px]">
      {/* logo */}
      <div className="flex items-center ml-6" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="로고" className="h-20" />
      </div>

      {/* 오른쪽 버튼 그룹 */}
      <div className="flex items-center space-x-4 relative mr-6">
        <button
          className="text-white hover:text-[#2E9093]"
          onClick={() => navigate('/login')}
        >
          로그인
        </button>
        <button
          className="text-white hover:text-[#2E9093]"
          onClick={() => navigate('/join')}
        >
          회원가입
        </button>

        {/* 게시판 버튼 
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button
            className="flex items-center text-white hover:text-[#2E9093]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="mr-1">바로가기</span>
            <ChevronDownIcon
              className="h-5 w-5 text-white hover:text-[#2E9093]"
              aria-hidden="true"
            />
          </Menu.Button>

          {/* 게시판 버튼 클릭 시 나타날 dropdown 메뉴 
          <Transition
            show={isDropdownOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-left absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-[#D9D9D9] text-[#8A8A8A] ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {/* 관리자일 경우 
                {userType === 'admin' && (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/admin')}
                        >
                          인증
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/admin')}
                        >
                          홍보
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/admin')}
                        >
                          신고
                        </button>
                      )}
                    </Menu.Item>
                  </>
                )}
                {/* 판매자일 경우
                {userType === 'seller' && (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/protection')}
                        >
                          인증
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/')}
                        >
                          홍보
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/seller/post')}
                        >
                          상품 등록
                        </button>
                      )}
                    </Menu.Item>
                  </>
                )}
                {/* 일반 사용자일 경우 
                {userType === 'user' && (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/protection')}
                        >
                          인증
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          onClick={() => navigate('/')}
                        >
                          홍보
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'text-[#2E9093] font-bold'
                              : 'text-[#8A8A8A]'
                          } block px-4 py-2 text-sm w-full text-left`}
                          // 모달창 구현 예정
                        >
                          신고글 작성
                        </button>
                      )}
                    </Menu.Item>
                  </>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* 로그인 및 회원가입 버튼 
        {!isLoggedIn ? (
          // 로그인하지 않은 경우
          <>
            <button
              className="text-white hover:text-[#2E9093]"
              onClick={() => navigate('/login')}
            >
              로그인
            </button>
            <button
              className="text-white hover:text-[#2E9093]"
              onClick={() => navigate('/join')}
            >
              회원가입
            </button>
          </>
        ) : (
          // 로그인한 경우
          <>
            <button
              className="text-white hover:text-[#2E9093]"
              onClick={() => navigate('/user/:id/basket')}
            >
              장바구니
            </button>
            <button
              className="text-white hover:text-[#2E9093]"
              onClick={() => navigate('/user/:id')}
            >
              마이페이지
            </button>
          </>
        )}
          */}
      </div>
    </header>
  );
};

export default Header;
