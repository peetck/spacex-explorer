import { useContext } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import RocketsContext from "../contexts/RocketsContext";
import Detail from "../components/UI/Detail";
import Screen from "../components/UI/Screen";

const RocketDetail = (props) => {
  const { rocketId } = useParams();

  const { getRocket, isLoading } = useContext(RocketsContext);

  const rocket = getRocket(rocketId);

  return (
    <Screen>
      <Wave color="white" />

      <Detail
        title={rocket?.rocket_name}
        description={rocket?.description}
        active={rocket?.active}
        imageUrl={rocket?.flickr_images[0]}
        wikipedia={rocket?.wikipedia}
        isLoading={isLoading}
      />

      <Wave color="black" />
    </Screen>
  );
};

export default RocketDetail;
