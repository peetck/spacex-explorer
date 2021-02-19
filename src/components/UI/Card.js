import { Link } from "react-router-dom";

import noImage from "../../assets/images/no-image.png";


const Card = ({ title, active, imageUrl, date, to, details, isLoading }) => {
  return (
    <div
      className={`flex flex-col cursor-pointer shadow-lg rounded-md w-80 p-3 mx-16 mt-16 transition duration-2000 transform hover:-rotate-3 hover:shadow-2xl`}
    >
      <Link to={to ?? "#"}>
        <div className="group relative">
          {isLoading ? (
            <div className="w-full h-72 rounded-3xl"></div>
          ) : (
            <img
              className={`w-full h-72 rounded-3xl ${details && "p-5"}`}
              src={imageUrl ?? noImage}
              alt="Can't load img"
            />
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg line-clamp-1  w-4/5">
              {isLoading ? "Loading..." : title}
            </h3>

            {!isLoading && (
              <div className="relative inline-flex rounded-md shadow-sm ">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                    active ? "bg-green-500" : "bg-red-500"
                  } opacity-75`}
                />

                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${
                    active ? "bg-green-500" : "bg-red-500"
                  }`}
                />
              </div>
            )}
          </div>

          <div className="flex flex-1">
            <span className="text-gray-600 line-clamp-2">
              {isLoading
                ? "xx/xx/xxxx"
                : date && new Date(date).toLocaleDateString("en-GB")}
            </span>
          </div>

          <div className="flex flex-1 mt-3">
            <span
              className={`text-gray-400 line-clamp-2 ${
                isLoading ? "my-6" : ""
              }`}
            >
              {details ?? details}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
