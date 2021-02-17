import { useEffect, useState } from "react";

import Card from "../components/Rockets/Card";
import Hero from "../components/UI/Hero";
import img from "../assets/images/rocket.svg";
import Wave from "../components/UI/Wave";

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
    <>
      <Hero
        title="Discover all spaceX rockets"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione adipisci, quod nisi expedita a reiciendis pariatur quos nesciunt tempora exercitationem iusto esse cum sapiente repudiandae modi, sint quia eaque."
        image={img}
      />
      <Wave color="white" />
      <div className="w-full bg-white text-black">
        <div className="container mx-auto">
          <h1 className="w-full text-5xl font-bold leading-tight text-center mt-8">
            Rockets
          </h1>
        </div>
        <div className="flex flex-wrap justify-center ">
          {rockets &&
            rockets.map((rocket) => (
              <Card
                key={rocket.id}
                id={rocket.id}
                rocketName={rocket.rocket_name}
                active={rocket.active}
                imageUrl={rocket.flickr_images[0]}
                dateFirstFight={rocket.first_flight}
              />
            ))}
        </div>

        <Wave color="black" />
      </div>
    </>
  );
};

export default Rockets;
