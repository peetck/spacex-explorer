const NO_IMAGE = process.env.PUBLIC_URL + "/no-image.png";

const Image = (props) => {
  const { className, src } = props;

  return (
    <img
      className={className}
      src={src ?? NO_IMAGE}
      alt="something went wrong!!"
      style={{
        textIndent: "-9999px",
      }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = NO_IMAGE;
      }}
    />
  );
};

export default Image;
