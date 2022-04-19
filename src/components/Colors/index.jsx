import React, { useEffect, useState } from "react";
import { randomColor } from "../../utilities/helpers";
import Color from "../Color";

const Colors = () => {
  const [colors, setColors] = useState([]);

  const setData = () => {
    setColors((prev) => {
      let colors_ = [...prev];

      for (let i = 0; i < 5; i++) {
        if (!colors_?.[i]?.lock) {
          colors_[i] = { value: randomColor(), lock: false };
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

  return (
    <div className="flex justify-start items-center h-full">
      {colors.map((color, index) => (
        <Color
          key={`color-${color.value}`}
          color={color}
          showRemove={colors.length > 2}
          onRemove={() => removeHandler(index)}
          toggleLock={() => toggleLockHandler(index)}
        />
      ))}
    </div>
  );
};

export default Colors;
