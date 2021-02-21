import { Link } from "react-router-dom";

import Image from "./Image";

const Card = ({ title, active, imageUrl, date, to, details }) => {
  return (
    <div
      className={`flex flex-col cursor-pointer shadow-lg rounded-md w-80 mx-16 mt-16 transition duration-2000 transform hover:-rotate-3 hover:shadow-2xl`}
      style={{
        height: "480px",
      }}
    >
      <Link to={to ?? "#"}>
        <Image className="m-auto object-cover h-72" src={imageUrl} />

        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg line-clamp-1  w-4/5">{title}</p>

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
          </div>

          <div className="flex flex-1">
            <span className="text-gray-600 line-clamp-2">
              {date && new Date(date).toLocaleDateString("en-GB")}
            </span>
          </div>

          <div className="flex flex-1 mt-3">
            <span className={"text-gray-600 line-clamp-2"}>
              {details ?? "No Data"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
