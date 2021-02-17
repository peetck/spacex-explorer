const Card = ({ rocketName, active, imageUrl, dateFirstFight }) => {
  return (
      <div className="flex flex-col cursor-pointer shadow-lg rounded-md w-80  p-3 mx-16 mt-16 bg-black">
        <div className="group relative">
          <img
            className="w-80 h-72 rounded-3xl transform hover:-rotate-3  transition delay-150 duration-3000"
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
              First flight : {dateFirstFight}
            </span>
          </div>
        </div>
      </div>
  );
};

export default Card;
