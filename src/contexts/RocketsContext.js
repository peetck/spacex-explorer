import { createContext, useState, useEffect } from "react";

const RocketsContext = createContext();

const URL = "https://api.spacexdata.com/v3/rockets";

export const RocketsContextProvider = (props) => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setRockets(data);
      } catch (error) {
        console.log(`Can't fetch rockets from ${URL}`);
      }
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
