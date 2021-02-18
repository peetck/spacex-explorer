import { createContext, useState, useEffect } from "react";

const RocketContext = createContext();

export const RocketContextProvider = (props) => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/rockets?id=true"
      );
      const data = await response.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);

  const getRocket = (rocketId) => {
    return rockets.find((rocket) => rocket.rocket_id === rocketId);
  };

  return (
    <RocketContext.Provider
      value={{
        rockets: rockets,
        getRocket: getRocket,
      }}
    >
      {props.children}
    </RocketContext.Provider>
  );
};

export default RocketContext;
