import { useEffect, useState, useCallback } from "react";

import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import img from "../assets/images/launches.svg";
import LaunchList from "../components/Launches/LaunchList";
import Filter from "../components/Launches/Filter";
import Pagination from "../components/Launches/Pagination";
import Title from "../components/UI/Title";

const LIMIT = 4;
const FIRST_PAGE = 1;

const Launches = (props) => {
  const [launches, setLaunches] = useState();
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [lastPage, setLastPage] = useState();

  const [rocketName, setRocketName] = useState("");

  const fetchLaunches = useCallback(async () => {
    const response = await fetch(
      `https://api.spacexdata.com/v3/launches?id=true&limit=${LIMIT}&offset=${
        (currentPage - 1) * LIMIT
      }&rocket_name=${rocketName}`
    );
    const data = await response.json();
    setLaunches(data);
    setLastPage(Math.ceil(response.headers.get("Spacex-Api-Count") / LIMIT));
  }, [currentPage, rocketName]);

  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  const pageChangeHandler = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  const rocketNameChangeHandler = (event) => {
    setRocketName(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <Hero
        title="Discover all spaceX launches"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione adipisci, quod nisi expedita a reiciendis pariatur quos nesciunt tempora exercitationem iusto esse cum sapiente repudiandae modi, sint quia eaque."
        image={img}
      />

      <Wave color="white" />

      <Title message="Launches" />

      <Filter rocketNameChangeHandler={rocketNameChangeHandler} />

      <LaunchList launches={launches} />

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
