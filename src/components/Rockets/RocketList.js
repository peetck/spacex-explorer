import React from "react";

const Card = React.lazy(() => import("../../components/UI/Card"));

const RocketList = ({ rockets }) => {
  return (
    <div className="my-auto mx-auto grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
      {rockets.map((rocket) => (
        <Card
          key={rocket.rocket_id}
          to={`/rockets/${rocket.rocket_id}`}
          title={rocket.rocket_name}
          active={rocket.active}
          imageUrl={
            rocket.flickr_images[0].includes("flickr")
              ? rocket.flickr_images[0].replace("_b", "")
              : rocket.flickr_images[0]
          }
          date={rocket.first_flight}
          details={rocket.description}
          isRocket={true}
        />
      ))}
    </div>
  );
};

export default RocketList;
