import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode, useEffect } from "react";

export interface ModalProps {
  title?: ReactNode;
  children: ReactNode;
  closeModal: () => void;
  className?: string;
}

const Modal = ({ children, closeModal, title, className = "" }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-black/30"></div>
      <article
        className={`bg-white p-4 rounded-md fixed z-50  w-4/5 max-w-xl ${className}`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <div className="flex justify-between">
          {title}
          <button
            className="p-1 rounded-md bg-primary-1 text-white absolute top-3 right-3 hover:scale-95 transition-all"
            onClick={closeModal}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-2">{children}</div>
      </article>
    </>
  );
};

export default Modal;
