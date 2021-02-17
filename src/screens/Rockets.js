import { useEffect, useState } from "react";

import Card from "../components/Rockets/Card";
// import img from "../assets/images/growth 2.svg";

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
      <div className="container mx-auto">
        <h1 className="w-full text-5xl font-bold leading-tight text-center ">
          ร็อคเก็ตรันเชอรรรรรรรรร์
        </h1>
      </div>

      <div className="flex flex-wrap justify-center ">
        {rockets &&
          rockets.map((rocket) => (
            <Card
              key={rocket.id}
              rocketName={rocket.rocket_name}
              active={rocket.active}
              imageUrl={rocket.flickr_images[0]}
              dateFirstFight={rocket.first_flight}
            />
          ))}
      </div>
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
