import Card from "./Card";

const LaunchList = ({ launches }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {launches &&
          launches.map((launch) => (
            <Card
              key={launch._id}
              flight_number={launch.flight_number}
              missionName={launch.mission_name}
              date={launch.launch_date_utc}
              imageUrl={launch.links.mission_patch}
              success={launch.launch_success}
              details={launch.details}
            />
          ))}
      </div>
    </>
  );
};

export default LaunchList;