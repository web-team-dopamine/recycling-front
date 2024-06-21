import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white w-full h-[400px] flex items-center justify-center flex-col text-center px-4">
      <h1 className="text-3xl font-bold mb-4">RenewUs</h1>
      <div className="mb-4">
        SNS에서 자주 볼 수 있는 플라스틱 업사이클링, 옷 업사이클링 등과 같은
        <br />
        리사이클링을 더욱 쉽게 할 수 있도록 판매자(제작자)와 구매자를 연결해주는
        플랫폼입니다.
      </div>
      <div className="mb-4">
        또한, 이와 같은 리사이클링 활동과 상품을 활성화하기 위해
        <br /> 환경 보호 활동(텀블러와 다회용기 사용, 플라스틱 수거 후
        판매자에게 전달 등 다양한 활동)을 인증합니다. <br />
        인증 후 마일리지를 적립할 수 있습니다.
      </div>
      <div>
        환경 보호 활동을 통해 마일리지를 적립하고, 이를 이용하여 다양한 제품을
        구매해 보세요!
      </div>
    </div>
  );
};

export default Banner;
