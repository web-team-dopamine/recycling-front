import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const navigate = useNavigate();

  return (
    <div className="w-full h-auto relative">
      <Slider {...settings}>
        <div className="relative w-full h-[400px] bg-[#2E9093]">
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold mb-3">119REO</h1>
              <p className="text-sm w-[400px]">
                Only brave people can be Rescue Each Other 일상을 용기있게
                만드는 브랜드 119REO입니다. 생명을 구하는 소방관의 용기가 담긴
                방화복을 업사이클링하고 수익금의 일부를 소방관 권리 보장을 위해
                기부합니다.
              </p>
            </div>
            <button
              onClick={() => navigate('/product/:productid')}
              className="bg-[#2E9093] hover:bg-[#257276] text-white text-sm py-2 px-4 rounded"
            >
              자세히 보기
            </button>
          </div>
        </div>
        <div className="relative w-full h-[400px] bg-[#2E9093]">
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold mb-3">Nukak</div>
              <p className="text-sm w-[400px]">
                모두를 위한 두 번째 기회를 만드는 일을 합니다. 누깍은 버려지는
                소재를 업사이클링하여 오직 당신을 위한 단 하나의 제품으로
                탄생시킵니다.
              </p>
            </div>
            <button
              onClick={() => navigate('/product/:productid')}
              className="bg-[#2E9093] hover:bg-[#257276] text-white text-sm py-2 px-4 rounded"
            >
              자세히 보기
            </button>
          </div>
        </div>
        <div className="relative w-full h-[400px] bg-[#2E9093]">
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold mb-3">큐클리프</div>
              <p className="text-sm w-[400px]">
                '또 다른 생각 디자인' 주어진 폐자원으로 또 다른 생각을
                디자인합니다. 생활과 산업 등의 다양한 곳에서 폐기되는 자원들을
                활용하고 메시지를 담아 이야기가 있는 업사이클링 & 서스테이너블
                패션 제품을 만듭니다.
              </p>
            </div>
            <button
              onClick={() => navigate('/product/:productid')}
              className="bg-[#2E9093] hover:bg-[#257276] text-white text-sm py-2 px-4 rounded"
            >
              자세히 보기
            </button>
          </div>
        </div>
        <div className="relative w-full h-[400px] bg-[#2E9093]">
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold mb-3">ul:kin</div>
              <p className="text-sm w-[400px]">
                '또 다른 생각 디자인' 주어진 폐자원으로 또 다른 생각을
                디자인합니다. 생활과 산업 등의 다양한 곳에서 폐기되는 자원들을
                활용하고 메시지를 담아 이야기가 있는 업사이클링 & 서스테이너블
                패션 제품을 만듭니다.
              </p>
            </div>
            <button
              onClick={() => navigate('/product/:productid')}
              className="bg-[#2E9093] hover:bg-[#257276] text-white text-sm py-2 px-4 rounded"
            >
              자세히 보기
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2"
    >
      <FaAngleRight className="text-[#2E9093]" />
    </button>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 ml-3"
    >
      <FaAngleLeft className="text-[#2E9093]" />
    </button>
  );
};

export default MainCarousel;
