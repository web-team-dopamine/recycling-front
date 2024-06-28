import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CommentProps {
  index: number; // Review number (order)
  productName: string;
  companyName: string;
  date: string; // Assuming date is a string for simplicity, you can adjust as per your data structure
}

const Comment: React.FC<CommentProps> = ({
  index,
  productName,
  companyName,
  date,
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
          <div className="w-2/6">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
