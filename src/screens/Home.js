import { useEffect, useState } from "react";

import landingImage from "../assets/images/space discovery.svg";

const Home = () => {
  const [histories, setHistories] = useState();
  const [info, setInfo] = useState();

  const fetchInfo = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/info");
    const data = await response.json();
    setInfo(data);
    console.log(data);
  };

  const fetchHistory = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/history");
    const data = await response.json();
    setHistories(data);
  };

  useEffect(() => {
    fetchInfo();
    fetchHistory();
  }, []);

  return (
    <>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase w-full">Hello There</p>
          <h1 className="my-4 text-5xl font-bold leading-tight items-center">
            Welcome to SpaceX Explorer
          </h1>
          <p className="leading-normal text-xl mb-8">{info?.summary}</p>

          <div className="w-full">
            <button className="bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Explore
            </button>
          </div>
        </div>

        <div className="flex w-full md:w-3/5 py-6 text-center">
          <img
            className="w-full z-50"
            src={landingImage}
            alt="Can't load svg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
