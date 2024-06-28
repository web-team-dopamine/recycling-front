import React from 'react';
import CommentList from '../components/MyComment/CommentList';

const MyComment = () => {
  const reviews = [
    {
      id: 1,
      productName: 'Product A',
      companyName: 'Company X',
      date: '2024-06-28',
    },
    {
      id: 2,
      productName: 'Product B',
      companyName: 'Company Y',
      date: '2024-06-27',
    },
    {
      id: 3,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 4,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 5,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 6,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 7,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 8,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 9,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 10,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 11,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
    {
      id: 12,
      productName: 'Product C',
      companyName: 'Company Z',
      date: '2024-06-26',
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-6 mb-16">
      <CommentList reviews={reviews} />
    </div>
  );
};

export default MyComment;
