import { useEffect, useState } from "react";

import Card from "../components/Launches/Card";
import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import img from "../assets/images/growth 2.svg";
import Pagination from "../components/Launches/Pagination";

const Launches = (props) => {
  const [launches, setLaunches] = useState();

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches?id=true&limit=4"
      );
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunches();
  }, []);

  return (
    <div>
      <Hero
        title="Discover all spaceX launches"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione adipisci, quod nisi expedita a reiciendis pariatur quos nesciunt tempora exercitationem iusto esse cum sapiente repudiandae modi, sint quia eaque."
        image={img}
      />

      <Wave color="white" />

      <div className="container mx-auto">
        <h1 className="w-full text-5xl font-bold leading-tight text-center mt-14 ">
          Launches
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {launches &&
          launches.map((launch) => (
            <Card
              key={launch._id}
              flight_number={launch.flight_number}
              missionName={launch.mission_name}
              date={launch.launch_date_utc}
              imageUrl={launch.links.mission_patch}
              success={launch.launch_success}
              details={launch.details}
            />
          ))}
      </div>

      <Pagination />

      <Wave color="black" />
    </div>
  );
};

export default Launches;
