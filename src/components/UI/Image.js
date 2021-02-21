const NO_IMAGE = process.env.PUBLIC_URL + "/no-image.png";

const Image = (props) => {
  const { className, src, width, height } = props;

  return (
    <img
      className={`${className} w-full`}
      src={src ?? NO_IMAGE}
      alt="something went wrong!!"
      style={{
        textIndent: "-9999px",
        width: width,
        height: height,
      }}
      onError={(e) => {
        e.target.src = NO_IMAGE;
      }}
    />
  );
};

export default Image;
