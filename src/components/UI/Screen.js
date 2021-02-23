const Screen = (props) => {
  return (
    <div
      className="flex flex-col h-auto justify-between"
      style={{
        marginBottom: "60px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Screen;
