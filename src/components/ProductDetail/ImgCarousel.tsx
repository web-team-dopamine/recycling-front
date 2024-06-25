import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-xs mx-auto mt-4 relative">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-full object-fit rounded-lg"
            src={`${process.env.PUBLIC_URL}/asset/p-detail-1.png`}
            alt="detail-img"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-fit rounded-lg"
            src={`${process.env.PUBLIC_URL}/asset/p-detail-1-1.png`}
            alt="detail-img-2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImgCarousel;
