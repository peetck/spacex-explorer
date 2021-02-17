import { Link } from "react-router-dom";

const Card = ({ rocketName, active, imageUrl, dateFirstFight, id }) => {
  return (
    <div className="flex flex-col cursor-pointer shadow-lg rounded-md w-80  p-3 mx-16 mt-16 bg-white">
      <Link to={`/rockets/${id}`}>
        <div className="group relative">
          <img
            className="w-80 h-72 rounded-3xl transform hover:-rotate-3  transition duration-2000"
            src={imageUrl}
            alt="Can't load img"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg line-clamp-1">
            {rocketName}
            <span class="relative inline-flex rounded-md shadow-sm ml-5">
              <span
                class={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  active ? "bg-green-500" : "bg-red-500"
                } opacity-75`}
              ></span>
              <span
                class={`relative inline-flex rounded-full h-3 w-3 ${
                  active ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </span>
          </h3>

          {/* <p className="my-1">{rocketName}</p> */}
          <div className="flex flex-1">
            <span className="text-gray-400 line-clamp-2">
              First flight :{" "}
              {new Date(dateFirstFight).toLocaleDateString("en-GB")}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
