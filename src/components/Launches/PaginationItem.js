const PaginationItem = (props) => {
  return (
    <div
      className={`w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full ${
        props.active ? "bg-green-700 text-white" : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default PaginationItem;
