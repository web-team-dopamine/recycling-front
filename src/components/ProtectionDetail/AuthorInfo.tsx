import React from 'react';

const AuthorInfo = ({ nickname, date }: { nickname: string; date: string }) => {
  return (
    <div className="flex justify-between m-4">
      <span className="text-sm text-gray-500 mr-2">{nickname}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
  );
};

export default AuthorInfo;
