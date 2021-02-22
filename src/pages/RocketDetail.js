import { useContext } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import RocketsContext from "../contexts/RocketsContext";
import Screen from "../components/UI/Screen";
import Rocket from "../components/Rockets/Rocket";

const RocketDetail = (props) => {
  const { rocketId } = useParams();

  const { getRocket } = useContext(RocketsContext);

  const rocket = getRocket(rocketId);

  return (
    <Screen>
      <Wave color="white" />
      <Rocket
        name={rocket?.rocket_name}
        active={rocket?.active}
        description={rocket?.description}
        country={rocket?.country}
        firstFlight={rocket?.first_flight}
        diameter={rocket?.diameter?.meters}
        height={rocket?.height?.meters}
        imageUrl={rocket?.flickr_images[0]}
        isLoading={!rocket}
      />
      <Wave color="black" />
    </Screen>
  );
};

export default RocketDetail;