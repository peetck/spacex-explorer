import { useEffect, useState } from "react";

const Rockets = (props) => {
  const [rockets, setRockets] = useState();

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <div class="grid grid-cols-4 gap-0 place-content-center h-auto mx-28">
        {rockets &&
          rockets.map((rocket) => (
            <div><img
              class="w-80 h-72 m-12 rounded-3xl transform hover:-rotate-3  transition delay-150 duration-300"
              src={rocket.flickr_images[0]}
              key={rocket.id}
            ></img></div>
          ))}
          {rockets &&
          rockets.map((rocket) => (
            <div>
              <h2 class="w-80 mx-12 rounded-3xl text-center">
                {rocket.rocket_name}
                <span class="relative inline-flex rounded-md shadow-sm ml-2">
                  <span
                    class={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      rocket.active ? "bg-green-500" : "bg-red-500"
                    } opacity-75`}
                  ></span>
                  <span
                    class={`relative inline-flex rounded-full h-3 w-3 ${
                      rocket.active ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </span>
              </h2>
            </div>
          ))}
        
      </div>
      {/* <div className="flex justify-center ">
        {rockets &&
          rockets.map((rocket) => (
            <img
              class="w-80 h-72 m-12 rounded-3xl transform hover:-rotate-3  transition delay-150 duration-300"
              src={rocket.flickr_images[0]}
              key={rocket.id}
            ></img>
          ))}
      </div> */}
{/* 
      <div className="flex justify-center ">
        {rockets &&
          rockets.map((rocket) => (
            <>
              <h2 class="w-80 mx-12 rounded-3xl text-center">
                {rocket.rocket_name}
                <span class="relative inline-flex rounded-md shadow-sm ml-2">
                  <span
                    class={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      rocket.active ? "bg-green-500" : "bg-red-500"
                    } opacity-75`}
                  ></span>
                  <span
                    class={`relative inline-flex rounded-full h-3 w-3 ${
                      rocket.active ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </span>
              </h2>
            </>
          ))}
      </div> */}

      {/* <div className="flex justify-center ">
        {rockets &&
          rockets.map((rocket) => (
            <h2 class="w-80 mx-12 rounded-3xl text-center">
              First flight : {rocket.first_flight}
            </h2>
          ))}
      </div> */}
    </div>
  );
};

export default Rockets;
