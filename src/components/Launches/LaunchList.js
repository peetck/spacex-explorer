import Card from "../UI/Card";

const LaunchList = ({ launches, isLoading }) => {
  return (
    <div className="flex flex-wrap justify-center ">
      {isLoading ? (
        <>
          <Card isLoading={isLoading} />
          <Card isLoading={isLoading} />
          <Card isLoading={isLoading} />
          <Card isLoading={isLoading} />
        </>
      ) : launches.length === 0 ? (
        <div className="flex justify-center items-center w-full h-96 container mt-10">
          <h1 className='text-2xl'>No Launches Found.</h1>
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
