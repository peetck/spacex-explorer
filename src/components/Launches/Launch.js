const Launch = ({
  missionName,
  launchSuccess,
  details,
  launchSite,
  launchDate,
  youtubeUrl,
  rocketName,
}) => {
  return (
    <div className="container mx-auto">
      <h1 className="w-full text-5xl font-bold leading-tight text-center my-14">
        {missionName ? (
          <>
            {missionName}
            <span className="relative rounded-md shadow-sm ml-8 hidden xl:inline-flex">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  launchSuccess ? "bg-green-500" : "bg-red-500"
                } opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full h-6 w-6 ${
                  launchSuccess ? "bg-green-500" : "bg-red-500"
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
          <p className="text-base">{details ?? "Loading..."}</p>

          <div className="flex flex-col justify-between sm:flex-row">
            <div className="w-full mr-5">
              <h1 className="text-3xl my-8">Launch Site</h1>
              {launchSite ?? "Loading..."}
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-3xl my-8">Launch Date</h1>

              {launchDate
                ? new Date(launchDate).toLocaleDateString("en-GB")
                : "Loading..."}
            </div>
          </div>

          <div className="flex flex-col justify-between sm:flex-row">
            <div className="w-full">
              <h1 className="text-3xl my-8 ">Rocket</h1>

              <span className='text-blue-500'>{rocketName ?? "Loading..."}</span>
            </div>
          </div>
        </div>

        <div className="w-full xl:ml-10 xl:mr-20 xl:w-1/2">
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${youtubeUrl}?autoplay=1&mute=1&loop=1&playlist=${youtubeUrl}`}
            className="mt-16 rounded-lg xl:mx-12 xl:mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Launch;
