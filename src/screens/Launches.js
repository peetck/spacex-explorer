import { useEffect, useState, useCallback } from "react";

import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import img from "../assets/images/launches.svg";
import LaunchList from "../components/Launches/LaunchList";
import Input from "../components/Launches/Input";
import Pagination from "../components/Launches/Pagination";

const LIMIT = 4;

const Launches = (props) => {
  const [launches, setLaunches] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  const fetchLaunches = useCallback(async () => {
    const response = await fetch(
      `https://api.spacexdata.com/v3/launches?id=true&limit=${LIMIT}&offset=${
        (currentPage - 1) * LIMIT
      }`
    );
    const data = await response.json();
    setLaunches(data);
    setLastPage(Math.ceil(response.headers.get("Spacex-Api-Count") / LIMIT));
  }, [currentPage]);

  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  const pageChangeHandler = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Hero
        title="Discover all spaceX launches"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione adipisci, quod nisi expedita a reiciendis pariatur quos nesciunt tempora exercitationem iusto esse cum sapiente repudiandae modi, sint quia eaque."
        image={img}
      />

      <Wave color="white" />

      <div className="container mx-auto">
        <h1 className="w-full text-5xl font-bold leading-tight text-center mt-14 ">
          Launches
        </h1>
      </div>

      <Input />

      <LaunchList launches={launches} />

      <Pagination
        pageChangeHandler={pageChangeHandler}
        currentPage={currentPage}
        lastPage={lastPage}
      />

      <Wave color="black" />
    </div>
  );
};

export default Launches;
