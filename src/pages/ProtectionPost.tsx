import React from 'react';
import { EditorComponent, EditButton, TitleInput } from '../components/Common';

const ProtectionPost = () => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* 제목 input */}
      <TitleInput />

      {/* text editor */}
      <EditorComponent />

      {/* 작성 버튼 */}
      <div className="mt-4 mb-10 flex justify-center">
        <EditButton createUrl="/protection/:id" cancelUrl="/protection" />
      </div>
    </div>
  );
};

export default ProtectionPost;
