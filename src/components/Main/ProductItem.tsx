import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Importing icons for wishlist and cart

const ProductItem = ({ image, title, company, price }: ProductItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="w-full h-64 object-cover" src={image} alt={title} />
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="text-white text-center">
            <button className="text-gray-400 hover:text-gray-600 mx-2">
              <FaHeart className="inline-block" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 mx-2">
              <FaShoppingCart className="inline-block" />
            </button>
          </div>
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{company}</p>
        <p className="text-gray-700 text-base mb-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
