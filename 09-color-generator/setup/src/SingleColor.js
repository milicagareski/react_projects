import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlers] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlers(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlers(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
