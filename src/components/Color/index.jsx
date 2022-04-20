import React from "react";

import {
  BiCopy,
  BiBorderAll,
  BiX,
  BiLockAlt,
  BiLockOpenAlt,
} from "react-icons/bi";
import { copyColor } from "../../utilities/helpers";

function Color({
  color = {},
  showRemove = true,
  onRemove = (index) => null,
  toggleLock = (index) => null,
  showShades = (color) => null,
}) {
  return (
    <>
      <div
        className={
          "px-4 py-4 flex-1 flex flex-col justify-center items-center h-full text-white cursor-pointer color space-y-5 pb-20 z-[2]"
        }
        style={{ backgroundColor: `${color?.value}` }}
      >
        <div className="flex-1 flex flex-col justify-end items-center space-y-3 opacity-0 color-hover:visible w-full">
          {showRemove && (
            <BiX
              size={40}
              className="shadow-sm bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
              title="Remove this color"
              onClick={onRemove}
            />
          )}
          {color?.lock ? (
            <BiLockAlt
              size={40}
              className="shadow-sm bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
              title="Unlock this color"
              onClick={() => toggleLock()}
            />
          ) : (
            <BiLockOpenAlt
              size={40}
              className="shadow-sm bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
              title="Lock this color"
              onClick={() => toggleLock()}
            />
          )}
          <BiBorderAll
            size={40}
            className="shadow-sm bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
            title="Show shades of this color"
            onClick={() => showShades(color?.value)}
          />
          <BiCopy
            size={40}
            className="shadow-sm bg-slate-400 bg-opacity-10 px-2 py-2 rounded-sm"
            title="Copy this color"
            onClick={() => copyColor(color?.value)}
          />
        </div>
        <div className="text-center">
          <h4 className="font-bold text-lg hover:bg-[#0000000d] px-2 py-2 rounded-lg shadow-sm">
            {color?.value}
          </h4>
          <small className="block text-md text-xs hover:bg-[#0000000d] rounded-lg shadow-sm px-2 py-3 mt-2">
            {color?.name}
          </small>
        </div>
      </div>
    </>
  );
}

export default Color;
