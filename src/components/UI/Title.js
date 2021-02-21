const Title = ({ message }) => {
  return (
    <div className="container mx-auto my-auto">
      <h1 className="w-full text-5xl font-bold leading-tight text-center mt-14 ">
        {message}
      </h1>
    </div>
  );
};

export default Title;
