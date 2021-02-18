import { useContext } from "react";

import Card from "../../components/UI/Card";
import RocketContext from "../../contexts/RocketContext";

const RocketList = () => {
  const { rockets } = useContext(RocketContext);

  return (
    <div className="flex flex-wrap justify-center ">
      {rockets && rockets.map((rocket) => (
        <Card
          key={rocket.rocket_id}
          to={`/rockets/${rocket.rocket_id}`}
          title={rocket.rocket_name}
          active={rocket.active}
          imageUrl={rocket.flickr_images[0]}
          date={rocket.first_flight}
        />
      ))}
    </div>
  );
};

export default RocketList;
