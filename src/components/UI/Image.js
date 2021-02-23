import { useState } from "react";

const Image = ({ className, src, width, height }) => {
  const [showErrorImage, setShowErrorImage] = useState(false);

  return (
    <img
      className={`${className} w-full`}
      src={src ?? "no-image.webp"}
      alt="something went wrong!!"
      style={{
        textIndent: "-9999px",
        width: width,
        height: height,
      }}
      onError={(e) => {
        if (!showErrorImage) {
          e.target.src = "no-image.webp";
          setShowErrorImage(true);
        }
      }}
    />
  );
};

export default Image;
