import { createContext, useState, useEffect } from "react";

const LaunchesContext = createContext();

export const LaunchesContextProvider = (props) => {
  const [launches, setLaunches] = useState();

  useEffect(() => {
    const fetchLaunches = async () => {};
    fetchLaunches();
  }, []);

  return (
    <LaunchesContext.Provider value={{}}>
      {props.children}
    </LaunchesContext.Provider>
  );
};

export default LaunchesContext;
