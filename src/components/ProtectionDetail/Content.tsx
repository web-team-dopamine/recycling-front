import React from 'react';

const Content = ({ content }: { content: string }) => {
  // 예시 데이터
  const dummyContent = `
    <p>글 내용 예시입니다.</p>
    <p>이미지를 포함한 글 내용입니다.</p>
    <img src="${process.env.PUBLIC_URL}/asset/main-2-4.png" alt="이미지 예시" />
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
  `;

  // content 대신 예시 데이터를 사용하도록 설정
  const renderedContent = content || dummyContent;

  // HTML을 React 컴포넌트로 변환하여 렌더링
  const contentHtml = () => ({ __html: renderedContent });

  return <div className="m-4" dangerouslySetInnerHTML={contentHtml()} />;
};

export default Content;
