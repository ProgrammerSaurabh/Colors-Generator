import React, { useEffect, useState } from "react";

import { shade } from "tint-shade-color";

import { colorName, copyColor, randomColor } from "../../utilities/helpers";

import Color from "../Color";
import Modal from "../Modal";

import { BiCopy } from "react-icons/bi";

const Colors = () => {
  const [colors, setColors] = useState([]);

  const [modal, setModal] = useState(null);
  const [shades, setShades] = useState([]);

  const setData = () => {
    setColors((prev) => {
      let colors_ = [...prev];

      for (let i = 0; i < 5; i++) {
        if (!colors_?.[i]?.lock) {
          const color_ = randomColor();
          colors_[i] = { value: color_, lock: false, name: colorName(color_) };
        }
      }

      return colors_;
    });
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    const keyDownListener = (e) => {
      if (e.code === "Space") {
        setData();
      }
    };

    document.addEventListener("keydown", keyDownListener);

    return () => {
      document.removeEventListener("keydown", keyDownListener);
    };
  }, []);

  useEffect(() => {
    if (colors.length > 0) {
      console.log(
        colors.map((color) => `%c ${color.value}`).join(" "),
        ...colors.map(
          (color) =>
            `background-color: ${color.value};color: white;padding: 5px;`
        )
      );
      console.log(
        colors.map((color) => `%c ${color.value}`).join(" "),
        ...colors.map(() => `padding: 5px;`)
      );
    }
  }, [colors]);

  const removeHandler = (index) => {
    setColors((prev) => {
      const colors_ = [...prev];

      colors_.splice(index, 1);

      return colors_;
    });
  };

  const toggleLockHandler = (index) => {
    setColors((prev) => {
      return prev.map((_, __) => {
        if (__ === index) {
          return { ..._, lock: !_.lock };
        }
        return { ..._ };
      });
    });
  };

  const showShadesHandler = (color) => {
    let shades_ = [];

    for (let i = 0.1; i < 0.9; i = i + 0.01) {
      shades_.push(shade(color, i));
    }

    setModal(color);
    setShades(shades_);
  };

  return (
    <>
      <Modal
        show={!!modal}
        onClose={() => {
          setModal(null);
          setShades([]);
        }}
        title={`Shades of ${modal}`}
      >
        <div className="w-full grid grid-cols-3 gap-4">
          {shades.map((shade_) => (
            <div
              key={`shade-${shade_}`}
              className={
                "w-full p-3 rounded-[5px] shadow-md mx-1 flex justify-between items-center text-white color"
              }
              style={{ backgroundColor: `${shade_}` }}
            >
              <h5 className="text-md">{shade_}</h5>
              <BiCopy
                size={20}
                className={"cursor-pointer opacity-0 color-hover:visible"}
                title={"Copy this color"}
                onClick={() => copyColor(shade_)}
              />
            </div>
          ))}
        </div>
      </Modal>
      <div
        className={`grid grid-flow-row lg:grid-flow-col grid-rows-${colors.length} lg:grid-cols-${colors.length} h-full`}
      >
        {colors.map((color, index) => (
          <Color
            key={`color-${color.value}`}
            color={color}
            showRemove={colors.length > 2}
            onRemove={() => removeHandler(index)}
            toggleLock={() => toggleLockHandler(index)}
            showShades={(color) => showShadesHandler(color)}
          />
        ))}
      </div>
    </>
  );
};

export default Colors;
