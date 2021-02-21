import { Fragment } from "react";
import Lottie from "lottie-react";

import Card from "../UI/Card";
import loader from "../../assets/images/loader.json";

const LaunchList = ({ launches, isLoading }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {isLoading ? (
        <Fragment>
          <div
            className="flex w-96 h-96 mt-16"
            style={{
              height: "480px",
            }}
          >
            <Lottie animationData={loader} />
          </div>
        </Fragment>
      ) : launches.length === 0 ? (
        <div
          className="flex w-96 h-96 mt-16 justify-center items-center"
          style={{
            height: "480px",
          }}
        >
          <h1 className="text-2xl">No Launches Found.</h1>
        </div>
      ) : (
        launches.map((launch) => (
          <Card
            key={launch._id}
            to={`/launches/${launch.flight_number}`}
            title={launch.mission_name}
            date={launch.launch_date_utc}
            imageUrl={launch.links.mission_patch_small}
            active={launch.launch_success}
            details={launch.details}
          />
        ))
      )}
    </div>
  );
};

export default LaunchList;
