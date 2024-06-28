import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BookmarkItemProps {
  index: number; // Bookmark number (order)
  productName: string;
  companyName: string;
  price: number;
  reviewCount: number;
}

const BookmarkItem: React.FC<BookmarkItemProps> = ({
  index,
  productName,
  companyName,
  price,
  reviewCount,
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border-t">
      <div className="flex items-center">
        <p className="mr-4 w-12">{index}</p>
        <div className="flex justify-between w-full">
          <div
            className="font-bold w-2/6 cursor-pointer hover:underline"
            onClick={() => navigate('/product/:productid')}
          >
            {productName}
          </div>
          <div className="w-2/6">{companyName}</div>
          <div className="text-gray-600 w-1/6">{price.toLocaleString()}원</div>
          <div className="text-gray-600 w-1/6">리뷰 {reviewCount}</div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkItem;
