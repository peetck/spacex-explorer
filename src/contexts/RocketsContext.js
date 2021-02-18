import { createContext, useState, useEffect } from "react";

const RocketsContext = createContext();

export const RocketsContextProvider = (props) => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);

  const getRocket = (rocketId) => {
    return rockets.find((rocket) => rocket.rocket_id === rocketId);
  };

  return (
    <RocketsContext.Provider
      value={{
        rockets: rockets,
        getRocket: getRocket,
      }}
    >
      {props.children}
    </RocketsContext.Provider>
  );
};

export default RocketsContext;
