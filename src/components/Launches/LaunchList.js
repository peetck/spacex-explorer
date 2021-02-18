import Card from "../UI/Card";

const LaunchList = ({ launches }) => {
  return (
    <div className="flex flex-wrap justify-center ">
      {launches &&
        launches.map((launch) => (
          <Card
            key={launch._id}
            to={`/launches/${launch.flight_number}`}
            title={launch.mission_name}
            date={launch.launch_date_utc}
            imageUrl={launch.links.mission_patch}
            active={launch.launch_success}
            details={launch.details}
          />
        ))}
    </div>
  );
};

export default LaunchList;
