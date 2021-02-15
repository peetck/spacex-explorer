import { useEffect, useState } from "react";

const Launches = (props) => {
  const [launches, setLaunches] = useState();

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunches();
  }, []);

  return (
    <div>
      {launches &&
        launches.map((launch) => (
          <h1 key={launch.mission_name}>{launch.mission_name}</h1> // doesn't have an id
        ))}
    </div>
  );
};

export default Launches;
