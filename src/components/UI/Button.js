const Button = (props) => {
  return (
    <a
      href={props.href}
      className={`cursor-pointer font-bold rounded-full my-6 py-4 px-8 ${
        props.disable
          ? "bg-gray-200 text-gray-500"
          : "text-gray-800 shadow-xl focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      }`}
      target="_blank"
    >
      {props.children}
    </a>
  );
};

export default Button;
