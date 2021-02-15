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
      {launches && launches.map((launche) => <h1>{launche.mission_name}</h1>)}
    </div>
  );
};

export default Launches;
