import { useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal open
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // modal close
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // modal component
  const Modal: React.FC<ModalProps> = ({ children, style }) => {
    return isModalOpen ? (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur"
            onClick={closeModal}
          ></div>
          <div
            className="relative bg-[#ACDACD] rounded-lg p-6 mx-4 sm:max-w-lg sm:w-full"
            style={style}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white mr-5"
              onClick={closeModal}
            >
              x
            </button>
            <div className="flex flex-col items-center">{children}</div>
          </div>
        </div>
      </>
    ) : null;
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    Modal,
  };
}
