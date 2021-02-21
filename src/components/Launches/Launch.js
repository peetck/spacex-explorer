import { Link } from "react-router-dom";

import Loader from "../UI/Loader";

const Launch = ({ launch, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-14 container mx-auto">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center w-full text-5xl font-bold leading-tight items-center my-14">
        {launch?.mission_name ? (
          <>
            {launch?.mission_name}
            <span className="relative rounded-md shadow-sm ml-8 hidden xl:inline-flex">
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
          </>
        ) : (
          "Loading..."
        )}
      </h1>
      <div className="flex flex-col items-center my-14 mx-20 text-center sm:text-left xl:flex-row">
        <div className="flex flex-col w-full xl:w-1/2">
          <h1 className="text-4xl font-bold my-8">Description</h1>
          <p className="text-base">
            {launch ? launch?.details ?? "No data" : "Loading..."}
          </p>

          <div className="flex flex-col justify-between sm:flex-row">
            <div className="w-full mr-5">
              <h1 className="text-3xl my-8">Launch Site</h1>
              {launch?.launch_site?.site_name_long ?? "Loading..."}
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-3xl my-8">Launch Date</h1>

              {launch?.launch_date_utc
                ? new Date(launch?.launch_date_utc).toLocaleDateString("en-GB")
                : "Loading..."}
            </div>
          </div>

          <div className="flex flex-col justify-between sm:flex-row">
            <div className="w-full mr-5">
              <h1 className="text-3xl my-8">Rocket</h1>

              {launch?.rocket?.rocket_name ? (
                <Link
                  className="text-blue-600"
                  to={`/rockets/${launch?.rocket.rocket_id}`}
                >
                  {launch?.rocket?.rocket_name}
                </Link>
              ) : (
                "Loading..."
              )}
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-3xl my-8">More on</h1>
              {launch ? (
                launch?.links?.wikipedia ? (
                  <a
                    className="text-blue-600"
                    href={launch?.links?.wikipedia}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wikipedia
                  </a>
                ) : (
                  "No data"
                )
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>

        <div className="w-full xl:ml-10 xl:mr-20 xl:w-1/2">
          <iframe
            title="launch_video"
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${launch?.links?.youtube_id}?autoplay=1&mute=1&loop=1&playlist=${launch?.links?.youtube_id}`}
            className="mt-16 rounded-lg xl:mx-12 xl:mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Launch;
