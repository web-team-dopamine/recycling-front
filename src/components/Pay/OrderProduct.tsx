import React from 'react';

interface Product {
  id: number;
  name: string;
  options: string;
  quantity: number;
  price: number;
}

interface OrderProductProps {
  product: Product;
}

const OrderProduct: React.FC<OrderProductProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4 font-bold">{product.name}</div>
      <div className="w-1/4 p-4 text-right">옵션: {product.options}</div>
      <div className="w-1/4 p-4 text-right">{product.quantity}</div>
      <div className="w-1/4 p-4 text-right font-bold">
        {formatPrice(product.price)}원
      </div>
    </div>
  );
};

export default OrderProduct;
