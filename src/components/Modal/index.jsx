import React from "react";

import { BiX } from "react-icons/bi";

function Modal({
  show = false,
  title = "Modal title",
  onClose = () => null,
  children,
}) {
  return (
    <>
      <div
        className={`h-full w-screen absolute inset-0 ${
          show ? "z-[5]" : "hidden"
        }`}
      >
        <div
          id="modal-bg"
          className={`w-full h-full bg-black opacity-40 top-0 absolute ${
            show ? "" : "hidden"
          }`}
        ></div>
        <div
          id="modal-box"
          className={`sm:w-[385px] sm:min-w-[50vw] min-w-[60vw] flex flex-col items-start gap-2 -translate-y-1/2 px-6 py-6 pt-3 bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute ${
            show ? "" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center w-full border-b-2 py-1">
            <h4 className="text-xl">{title}</h4>
            <BiX size={30} className="cursor-pointer" onClick={onClose} />
          </div>
          <div className="h-fit w-full overflow-x-hidden max-h-[70vh] overflow-y-auto modal-body pr-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
