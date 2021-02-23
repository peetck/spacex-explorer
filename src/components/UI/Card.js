import { Link } from "react-router-dom";
import Truncate from "react-truncate";

import Image from "./Image";

const Card = ({ title, active, imageUrl, date, to, details, isRocket }) => {
  return (
    <div
      className={`flex flex-col cursor-pointer shadow-lg rounded-md w-80 mx-16 mt-16 transition duration-2000 transform hover:-rotate-3 hover:shadow-2xl`}
      style={{
        height: "480px",
      }}
    >
      <Link to={to ? to : "#"}>
        <Image
          className={`m-auto h-72 ${
            isRocket ? "object-cover" : "object-scale-down"
          }`}
          src={imageUrl}
          width="320px"
          height="288px"
        />

        <div className="p-5">
          <div className="flex items-center justify-between">
            <Truncate lines={1} className="font-bold text-lg " width="200">
              {title}
            </Truncate>

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
            <span className="text-gray-600">
              {date && new Date(date).toLocaleDateString("en-GB")}
            </span>
          </div>

          <div className="flex flex-1 mt-3">
            <Truncate lines={2} className="text-gray-600" width="250">
              {details ? details : "No Data"}
            </Truncate>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
