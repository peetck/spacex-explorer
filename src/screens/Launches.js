import { useContext } from "react";

import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import img from "../assets/images/launches.svg";
import LaunchList from "../components/Launches/LaunchList";
import Filter from "../components/Launches/Filter";
import Pagination from "../components/Launches/Pagination";
import Title from "../components/UI/Title";
import Screen from "../components/UI/Screen";
import LaunchesContext from "../contexts/LaunchesContext";

const Launches = (props) => {
  const {
    launches,
    FIRST_PAGE,
    currentPage,
    lastPage,
    isLoading,
    filter,
    pageChangeHandler,
    filterChangeHandler,
  } = useContext(LaunchesContext);

  return (
    <Screen>
      <Hero
        title="Discover all SpaceX Launches"
        subtitle="The Falcon design features reusable first-stage boosters, which land either on a ground pad near the launch site or on a drone ship at sea. In December 2015, Falcon 9 became the first rocket to land propulsively after delivering a payload to orbit. "
        image={img}
      />

      <Wave color="white" />

      <Title message="Launches" />

      <Filter
        filterChangeHandler={filterChangeHandler}
        rocketName={filter.rocketName}
        launchYear={filter.launchYear}
        launchSuccess={filter.launchSuccess}
      />

      <LaunchList launches={launches} isLoading={isLoading} />

      <Pagination
        pageChangeHandler={pageChangeHandler}
        firstPage={FIRST_PAGE}
        currentPage={currentPage}
        lastPage={lastPage}
      />

      <Wave color="black" />
    </Screen>
  );
};

export default Launches;
