const Screen = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      {props.children}
    </div>
  );
};

export default Screen;
