import { useContext } from "react";

import Card from "../../components/UI/Card";
import RocketsContext from "../../contexts/RocketsContext";

const RocketList = () => {
  const { rockets } = useContext(RocketsContext);

  return (
    <div className="my-auto mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
      {rockets &&
        rockets.map((rocket) => (
          <Card
            key={rocket.rocket_id}
            to={`/rockets/${rocket.rocket_id}`}
            title={rocket.rocket_name}
            active={rocket.active}
            imageUrl={rocket.flickr_images[0]}
            date={rocket.first_flight}
            details={rocket.description}
          />
        ))}
    </div>
  );
};

export default RocketList;
