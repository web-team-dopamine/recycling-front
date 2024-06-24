import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white w-full h-[400px] flex items-center justify-center flex-col text-center px-4">
      <img
        src={`${process.env.PUBLIC_URL}/asset/com-banner.png`}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
