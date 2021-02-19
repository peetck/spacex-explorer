import { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import RocketsContext from "../contexts/RocketsContext";
import Button from "../components/UI/Button";

const RocketDetail = (props) => {
  const { rocketId } = useParams();

  const { getRocket } = useContext(RocketsContext);

  const rocket = getRocket(rocketId);

  return (
    <Fragment>
      <Wave color="white" />

      <div className="flex flex-col justify-around mt-32 xl:flex-row">
        <div className="w-full">
          <img
            className="mx-auto shadow-2xl rounded-2xl w-3/5"
            src={rocket && rocket ? rocket.flickr_images[0] : ""}
            alt="Can't load img"
          />
        </div>

        <div className="flex flex-col w-full text-center mb-10 xl:text-left ">
          <div className="flex items-center justify-center w-full mt-7 mb-7 xl:mt-0 xl:justify-start">
            <h1 className="text-5xl font-bold my-5">
              {rocket && rocket.rocket_name}
            </h1>
            <span className="relative  rounded-md shadow-sm ml-8 hidden xl:inline-flex">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  rocket?.active ? "bg-green-500" : "bg-red-500"
                } opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full h-6 w-6 ${
                  rocket?.active ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </span>
          </div>

          <div className="text-center mx-20 xl:mx-0 xl:w-2/3 xl:text-left ">
            {rocket && rocket.description}
          </div>

          <div className="flex items-end h-full justify-center xl:justify-start mt-7">
            <Button href={rocket?.wikipedia}>Wikipedia</Button>
          </div>
        </div>
      </div>

      <Wave color="black" />
    </Fragment>
  );
};

export default RocketDetail;
