import { createContext, useState, useEffect, useCallback } from "react";

const LaunchesContext = createContext();

const URL = "https://api.spacexdata.com/v3/launches";
const LIMIT = 4;
const FIRST_PAGE = 1;

export const LaunchesContextProvider = (props) => {
  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [lastPage, setLastPage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [rocketName, setRocketName] = useState("");
  const [launchYear, setLaunchYear] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");

  useEffect(() => {
    const fetchLaunches = async () => {
      setIsLoading(true);
      const offset = (currentPage - 1) * LIMIT;
      const response = await fetch(
        `${URL}?id=true&limit=${LIMIT}&offset=${offset}&rocket_name=${rocketName}&launch_year=${launchYear}&launch_success=${launchSuccess}`
      );
      const data = await response.json();
      setLaunches(data);
      setLastPage(Math.ceil(response.headers.get("Spacex-Api-Count") / LIMIT));
      setIsLoading(false);
    };
    fetchLaunches();
  }, [currentPage, rocketName, launchYear, launchSuccess]);

  const pageChangeHandler = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  const filterChangeHandler = (type, event) => {
    setCurrentPage(1);
    if (type === "rocketName") {
      setRocketName(event.target.value);
    } else if (type === "launchYear") {
      setLaunchYear(event.target.value);
    } else if (type === "launchSuccess") {
      setLaunchSuccess(event.target.value);
    }
  };

  return (
    <LaunchesContext.Provider
      value={{
        launches: launches,
        FIRST_PAGE: FIRST_PAGE,
        currentPage: currentPage,
        lastPage: lastPage,
        isLoading: isLoading,
        filter: {
          rocketName,
          launchYear,
          launchSuccess,
        },
        pageChangeHandler: pageChangeHandler,
        filterChangeHandler: filterChangeHandler,
      }}
    >
      {props.children}
    </LaunchesContext.Provider>
  );
};

export default LaunchesContext;
