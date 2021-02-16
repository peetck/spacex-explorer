// import { useEffect, useState } from "react";

import Wave from "../components/Home/Wave";
import Hero from "../components/Home/Hero";
import Founder from "../components/Home/Founder";

const Home = () => {
  // const [histories, setHistories] = useState();
  // const [info, setInfo] = useState();

  // const fetchInfo = async () => {
  //   const response = await fetch("https://api.spacexdata.com/v3/info");
  //   const data = await response.json();
  //   setInfo(data);
  //   console.log(data);
  // };

  // const fetchHistory = async () => {
  //   const response = await fetch("https://api.spacexdata.com/v3/history");
  //   const data = await response.json();
  //   setHistories(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchInfo();
  //   fetchHistory();
  // }, []);

  return (
    <>
      <Hero />
      <Wave color="white" />
      <Founder />
      <Wave color="black" />
      {/* <div className="bg-black text-white">
        <section className="container mx-auto ">
          <div className="bg-black">
            <h1 className="w-full text-5xl font-bold leading-tight text-center pt-20">
              Historical
            </h1>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default Home;
