import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';
import { HeaderProps } from '../util/types';

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userType }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="bg-[#ACDACD] text-white px-4 py-3 flex justify-between items-center h-[120px]">
      {/* logo */}
      <div className="flex items-center ml-6" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="로고" className="h-20 cursor-pointer" />
      </div>

      {/* 오른쪽 버튼 그룹 */}
      <div className="flex items-center space-x-4 relative mr-6">
        {!isLoggedIn && (
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
        )}

        {isLoggedIn && (
          <>
            {userType === 'user' && (
              <>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/products')}
                >
                  업사이클링 상품
                </button>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/protection')}
                >
                  환경 보호 인증
                </button>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/user/:id/basket')}
                >
                  <FaShoppingCart className="w-6 h-6" />
                </button>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/user/:id')}
                >
                  <FaRegUserCircle className="w-6 h-6" />
                </button>
              </>
            )}

            {userType === 'admin' && (
              <>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/products')}
                >
                  업사이클링 상품
                </button>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/protection')}
                >
                  환경 보호 인증
                </button>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              </>
            )}

            {userType === 'seller' && (
              <>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/products')}
                >
                  업사이클링 상품
                </button>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/protection/post')}
                >
                  판매글 작성
                </button>
                <button
                  className="text-white hover:text-[#2E9093]"
                  onClick={() => navigate('/user/:id')}
                >
                  <FaRegUserCircle className="w-6 h-6" />
                </button>
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
