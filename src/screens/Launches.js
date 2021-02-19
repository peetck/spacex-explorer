import { useEffect, useState } from "react";

import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import img from "../assets/images/launches.svg";
import LaunchList from "../components/Launches/LaunchList";
import Filter from "../components/Launches/Filter";
import Pagination from "../components/Launches/Pagination";
import Title from "../components/UI/Title";

const URL = "https://api.spacexdata.com/v3/launches";
const LIMIT = 4;
const FIRST_PAGE = 1;

const Launches = (props) => {
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
    <div>
      <Hero
        title="Discover all SpaceX Launches"
        subtitle="The Falcon design features reusable first-stage boosters, which land either on a ground pad near the launch site or on a drone ship at sea. In December 2015, Falcon 9 became the first rocket to land propulsively after delivering a payload to orbit. "
        image={img}
      />

      <Wave color="white" />

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

      <Wave color="black" />
    </div>
  );
};

export default Launches;
