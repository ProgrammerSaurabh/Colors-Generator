import React from "react";
import {
  BiCopy,
  BiBorderAll,
  BiX,
  BiPlus,
  BiLockAlt,
  BiLockOpenAlt,
} from "react-icons/bi";
import toast from "react-hot-toast";

function Color({
  color = {},
  showRemove = true,
  onRemove = (index) => null,
  toggleLock = (index) => null,
}) {
  const copyColor = () => {
    navigator.clipboard.writeText(color?.value);

    toast.success(`${color?.value} copied to clipboard!`);
  };

  const showShades = () => {};

  return (
    <>
      <div
        className={
          "px-4 py-4 flex-1 flex flex-col justify-center items-center h-full text-white cursor-pointer color space-y-5 pb-20"
        }
        style={{ backgroundColor: `${color?.value}` }}
      >
        <div className="flex-1 flex flex-col justify-end items-center space-y-3">
          {showRemove && (
            <BiX
              size={50}
              className="opacity-0 color-hover:visible bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
              title="Show shades of this color"
              onClick={onRemove}
            />
          )}
          {color?.lock ? (
            <BiLockAlt
              size={40}
              className="opacity-0 color-hover:visible bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
              title="Show shades of this color"
              onClick={() => toggleLock()}
            />
          ) : (
            <BiLockOpenAlt
              size={40}
              className="opacity-0 color-hover:visible bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
              title="Show shades of this color"
              onClick={() => toggleLock()}
            />
          )}
          {/* <BiBorderAll
            size={40}
            className="opacity-0 color-hover:visible bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
            title="Show shades of this color"
            onClick={() => showShades()}
          /> */}
          <BiCopy
            size={40}
            className="opacity-0 color-hover:visible bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
            title="Copy this color"
            onClick={() => copyColor()}
          />
        </div>
        <h4 className="font-bold text-lg bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm">
          {color?.value}
        </h4>
      </div>
    </>
  );
}

export default Color;
