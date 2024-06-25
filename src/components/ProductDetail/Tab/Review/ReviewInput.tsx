import React, { useState } from 'react';

interface Props {
  onSubmitReview: (review: string) => void;
  charLimit: number;
}

const ReviewInput: React.FC<Props> = ({ onSubmitReview, charLimit }) => {
  const [newReview, setNewReview] = useState<string>(''); // 새 리뷰 입력 상태
  const [charCount, setCharCount] = useState<number>(0); // textarea 문자 수 상태

  // textarea 변경 핸들러
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const text = event.target.value;
    if (text.length <= charLimit) {
      setNewReview(text);
      setCharCount(text.length);
    } else {
      // charLimit 초과 시 경고창 표시
      alert(`최대 ${charLimit}자까지 입력할 수 있습니다.`);
    }
  };

  // 리뷰 등록 핸들러
  const handleSubmitReview = () => {
    if (newReview.trim() !== '') {
      onSubmitReview(newReview);
      setNewReview(''); // 입력 창 초기화
      setCharCount(0); // 문자 수 초기화
    }
  };

  return (
    <div className="m-4 flex justify-between items-center p-4 bg-[#2E9093] rounded-lg">
      <div className="w-9/12 flex flex-col">
        <textarea
          className="h-32 p-2 border border-gray-300 rounded-lg focus:outline-none placeholder:text-sm"
          value={newReview}
          onChange={handleTextareaChange}
          placeholder="상품 관련 리뷰를 작성해주세요"
        />
        <span className="ml-2 text-sm text-gray-700">
          {charCount}/{charLimit}
        </span>
      </div>

      <button
        className="w-2/12 h-32 bg-[#5EC7B8] hover:bg-opacity-80 text-white mb-5 font-bold py-2 px-4 rounded-lg focus:outline-none"
        onClick={handleSubmitReview}
      >
        등록
      </button>
    </div>
  );
};

export default ReviewInput;
