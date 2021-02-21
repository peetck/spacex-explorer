import { useContext } from "react";

import Card from "../../components/UI/Card";
import RocketsContext from "../../contexts/RocketsContext";

const RocketList = () => {
  const { rockets } = useContext(RocketsContext);

  return (
    <div className="flex flex-wrap justify-center ">
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
