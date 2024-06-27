import { FacebookShareButton, TwitterShareButton } from 'react-share';
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useScript } from '../../hooks/useScript';
import { useEffect } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaPaperclip, FaTwitter, FaFacebook } from 'react-icons/fa';

declare global {
  interface Window {
    Kakao: any;
  }
}

const ShareButton = () => {
  const currentURL = window.location.href;

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentURL,
    });
  };

  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(`${process.env.REACT_APP_KAKAO_SHARE_KEY}`);
      }
    }
  }, [status]);

  return (
    <div className="flex mr-3 flex-end justify-end mb-3">
      <FacebookShareButton
        url={currentURL}
        className="flex items-center px-4 py-2 hover:bg-gray-300"
      >
        <FaFacebook className="mr-2 hover:text-[#2E9093]" />
      </FacebookShareButton>
      <TwitterShareButton
        url={currentURL}
        className="flex items-center px-4 py-2 hover:bg-gray-100"
      >
        <FaTwitter className="mr-2 hover:text-[#2E9093]" />
      </TwitterShareButton>
      <CopyToClipboard text={currentURL}>
        <button className="flex items-center">
          <FaPaperclip className="mr-2 hover:text-[#2E9093]" />
        </button>
      </CopyToClipboard>
      <button onClick={handleKakaoButton} className="flex items-center">
        <RiKakaoTalkFill className="mr-2 hover:text-[#2E9093]" />
      </button>
    </div>
  );
};

export default ShareButton;
