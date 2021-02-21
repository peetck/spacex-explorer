import CountUp from "react-countup";

const Rocket = ({
  name,
  active,
  description,
  country,
  firstFlight,
  diameter,
  height,
  imageUrl,
}) => {
  return (
    <div className="container mx-auto">
      <h1 className="w-full text-5xl font-bold leading-tight text-center my-14">
        {name}
        <span className="relative rounded-md shadow-sm ml-8 hidden xl:inline-flex">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              active ? "bg-green-500" : "bg-red-500"
            } opacity-75`}
          />
          <span
            className={`relative inline-flex rounded-full h-6 w-6 ${
              active ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </span>
      </h1>
      <div className="flex flex-col items-center my-14 mx-20 xl:flex-row">
        <div className="flex flex-col w-full xl:w-1/2">
          <h1 className="text-4xl font-bold my-8">Description</h1>
          <p className="text-base">{description}</p>

          <div className="flex justify-between">
            <div className="w-full">
              <h1 className="text-3xl my-8">Country</h1>
              <span className="py-2 px-4 rounded-full shadow-2xl border">
                {country}
              </span>
            </div>
            <div className="w-3/4">
              <h1 className="text-3xl my-8">First Flight</h1>
              <span className="py-2 px-4 rounded-full shadow-2xl border">
                {new Date(firstFlight).toLocaleDateString("en-GB")}
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-full">
              <h1 className="text-3xl my-8">Diameter</h1>
              <span className="py-2 px-4 rounded-full shadow-2xl border">
                <CountUp start={-50} end={diameter} duration={1.75}  decimals={1}/> meter
              </span>
            </div>
            <div className="w-3/4">
              <h1 className="text-3xl my-8">Height</h1>

              <span className="py-2 px-4 rounded-full shadow-2xl border">
                <CountUp start={-50} end={height} duration={1.75}  decimals={1} /> meter
              </span>
            </div>
          </div>
        </div>

        <div className="w-full xl:ml-20 xl:w-1/2">
          <img
            src={imageUrl}
            alt="Can't load img"
            className="w-full mt-16 rounded-lg xl:mx-12 xl:mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Rocket;
