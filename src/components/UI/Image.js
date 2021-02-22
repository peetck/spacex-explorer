const Image = ({ className, src, width, height }) => {
  return (
    <img
      className={`${className} w-full`}
      src={src ?? "no-image.png"}
      alt="something went wrong!!"
      style={{
        textIndent: "-9999px",
        width: width,
        height: height,
      }}
      onError={(e) => {
        e.target.src = "no-image.png";
      }}
    />
  );
};

export default Image;
