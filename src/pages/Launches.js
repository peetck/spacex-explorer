import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import LaunchList from "../components/Launches/LaunchList";
import Filter from "../components/Launches/Filter";
import Pagination from "../components/Launches/Pagination";
import Title from "../components/UI/Title";
import Screen from "../components/UI/Screen";
import { useQuery } from "../hooks/query";
import heroAnimation from "../assets/animations/launches.json";

const URL = "https://api.spacexdata.com/v3/launches";
const LIMIT = 3;
const FIRST_PAGE = 1;

const Launches = () => {
  const history = useHistory();
  const query = useQuery();

  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    query.has("page") ? +query.get("page") : FIRST_PAGE
  );
  const [lastPage, setLastPage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [rocketName, setRocketName] = useState(
    query.has("rocketName") ? query.get("rocketName") : ""
  );
  const [launchYear, setLaunchYear] = useState(
    query.has("launchYear") ? query.get("launchYear") : ""
  );
  const [launchSuccess, setLaunchSuccess] = useState(
    query.has("launchSuccess") ? query.get("launchSuccess") : ""
  );

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setIsLoading(true);
        const offset = (currentPage - 1) * LIMIT;
        const response = await fetch(
          `${URL}?id=true&limit=${LIMIT}&offset=${offset}&rocket_name=${rocketName}&launch_year=${launchYear}&launch_success=${launchSuccess}`
        );
        const data = await response.json();
        setLaunches(data);
        setLastPage(
          Math.ceil(response.headers.get("Spacex-Api-Count") / LIMIT)
        );
        setIsLoading(false);
      } catch (error) {
        console.log(`Can't fetch launches from ${URL}`);
      }
    };
    fetchLaunches();
  }, [currentPage, rocketName, launchYear, launchSuccess]);

  const pageChangeHandler = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
      query.set("page", page);
      history.replace({
        search: query.toString(),
      });
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
    query.set(type, event.target.value);
    query.set("page", 1);
    history.replace({
      search: query.toString(),
    });
  };

  return (
    <Screen>
      <Hero
        title="Discover all SpaceX Launches"
        subtitle="The Falcon design features reusable first-stage boosters, which land either on a ground pad near the launch site or on a drone ship at sea. In December 2015, Falcon 9 became the first rocket to land propulsively after delivering a payload to orbit. "
        image={heroAnimation}
      />
      <Wave />
      <Title message="Launches" />
      <Filter
        filterChangeHandler={filterChangeHandler}
        rocketName={rocketName}
        launchYear={launchYear}
        launchSuccess={launchSuccess}
      />
      <LaunchList launches={launches} isLoading={isLoading} />
      <Pagination
        pageChangeHandler={pageChangeHandler}
        firstPage={FIRST_PAGE}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </Screen>
  );
};

export default Launches;
