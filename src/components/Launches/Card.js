import { Link } from "react-router-dom";

import noImage from "../../assets/images/no-image.png";

const Card = (props) => {
  const {
    missionName,
    date,
    imageUrl,
    details,
    success,
    flight_number,
  } = props;

  return (
    <div className="flex flex-col shadow-lg rounded-md w-72 p-3 mx-16 mt-16 hover:shadow-2xl">
      <Link to={`/launches/${flight_number}`}>
        <div className="group relative rounded-md bg-gradient-to-b from-gray-300 to-gray-800 w-full h-72">
          <img className="p-5" src={imageUrl ?? noImage} alt="Can't load img" />
          <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg line-clamp-1">{missionName}</h3>
          <p className="my-1">{new Date(date).toLocaleDateString("en-GB")}</p>
          <div className="flex flex-1">
            <span className="text-gray-400 line-clamp-2">{details}</span>
          </div>
        </div>
        <div className="flex flex-1 align-bottom p-5 items-end">
          <span
            className={`text-sm p-2 rounded-full text-white  ${
              success ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {success ? "Success" : "Fail"}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
