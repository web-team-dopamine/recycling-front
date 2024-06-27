import React, { useState } from 'react';
import {
  AuthorInfo,
  Content,
  LikeButton,
  LikeCount,
  ShareButton,
  Title,
  ViewCount,
} from '../components/ProtectionDetail';

const ProtectionDetail = () => {
  // dummy data
  const initialViewCount = 100;
  const post = {
    title: '플라스틱없는 샴푸바 구매 후기',
    nickname: '어푸어푸',
    date: '2024-06-30',
    content: `
    <img src="${process.env.PUBLIC_URL}/asset/main-2-4.png" alt="이미지 예시" />
    <p>수영다닐 때 부피도 줄고,</p>
    <p>거품도 잘 나서 좋아요~</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    <p>더 많은 텍스트 예시입니다.</p>
    `,
    likes: 15,
  };

  const { title, nickname, date, content, likes } = post;

  // 상태 추가: 좋아요 수와 좋아요 여부
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);

  // 추천하기 버튼 클릭 시 좋아요 상태 및 수 업데이트
  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 mb-6">
      <div className="rounded overflow-hidden shadow-lg bg-white m-4">
        {/* 글 제목 */}
        <Title title={title} />

        {/* 닉네임, 날짜 */}
        <AuthorInfo nickname={nickname} date={date} />

        {/* 조회수, 좋아요 수 보여주기 */}
        <div className="flex items-center justify-end mb-2">
          <ViewCount viewCount={initialViewCount} />
          <LikeCount likeCount={likeCount} liked={liked} />
        </div>

        {/* 글 내용 */}
        <Content content={content} />

        <div className="border-b m-4"></div>

        {/* 외부 공유 버튼 */}
        <ShareButton />

        {/* 추천하기 버튼 */}
        <LikeButton onLike={handleLike} />
      </div>
    </div>
  );
};

export default ProtectionDetail;
