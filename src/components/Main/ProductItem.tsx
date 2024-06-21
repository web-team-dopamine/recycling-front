import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Importing icons for wishlist and cart
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ image, title, company, price }: ProductItemProps) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 relative cursor-pointer"
      onClick={() => navigate('/product/:id')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img className="w-full h-34 object-cover" src={image} alt={title} />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="text-white text-center">
              <button className="text-gray-400 hover:text-red-600 mx-2">
                <FaHeart className="inline-block" />
              </button>
              <button className="text-gray-400 hover:text-[#2E9093] mx-2">
                <FaShoppingCart className="inline-block" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="px-4 py-4">
        <div
          className={`font-bold text-l mb-2 ${hovered ? 'hover:underline' : ''}`}
        >
          {title}
        </div>
        <p className={`text-gray-700 text-sm mb-2 `}>{company}</p>
        <p className={`text-gray-700 text-base mb-2 `}>{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
