import { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import Button from "../components/UI/Button";

const LaunchDetail = (props) => {
  const { flightNumber } = useParams();
  const [launch, setLaunch] = useState();

  useEffect(() => {
    const fetchLaunch = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${flightNumber}`
      );
      const data = await response.json();
      setLaunch(data);
    };
    fetchLaunch();
  }, []);

  return (
    <Fragment>
      <Wave color="white" />

      <div className="flex flex-col justify-around mt-32 xl:flex-row">
        <div className="w-full">
          <img
            className="mx-auto shadow-2xl rounded-2xl w-2/5"
            src={launch && launch ? launch.links.mission_patch_small : ""}
            alt="Can't load img"
          />
        </div>

        <div className="flex flex-col w-full text-center mb-10 xl:text-left ">
          <div className="flex items-center justify-center w-full mt-7 mb-7 xl:mt-0 xl:justify-start">
            <h1 className="text-5xl font-bold my-5">
              {launch && launch.mission_name}
            </h1>
            <span className="relative  rounded-md shadow-sm ml-8 hidden xl:inline-flex">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  launch?.launch_success ? "bg-green-500" : "bg-red-500"
                } opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full h-6 w-6 ${
                  launch?.launch_success ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </span>
          </div>

          <div className="text-center mx-20 xl:mx-0 xl:w-2/3 xl:text-left ">
            {launch && launch.details}
          </div>

          <div className="flex items-end h-full justify-center xl:justify-start mt-7 gap-8">
            <Button
              href={launch?.links.wikipedia}
              disable={!launch?.links.video_link}
            >
              Wikipedia
            </Button>

            <Button
              href={launch?.links.video_link}
              disable={!launch?.links.video_link}
            >
              Youtube
            </Button>
          </div>
        </div>
      </div>

      <Wave color="black" />
    </Fragment>
  );
};

export default LaunchDetail;
