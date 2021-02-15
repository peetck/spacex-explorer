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
    <div>
      {rockets &&
        rockets.map((rocket) => <h1 key={rocket.id}>{rocket.rocket_name}</h1>)}
    </div>
  );
};

export default Rockets;
