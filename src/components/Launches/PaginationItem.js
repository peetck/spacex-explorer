const PaginationItem = (props) => {
  return (
    <div
      class={`w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full ${
        props.active ? "bg-green-700 text-white" : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default PaginationItem;
