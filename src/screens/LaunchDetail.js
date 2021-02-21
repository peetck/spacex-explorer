import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import Screen from "../components/UI/Screen";
import Launch from "../components/Launches/Launch";

const LaunchDetail = (props) => {
  const { flightNumber } = useParams();

  const [launch, setLaunch] = useState();

  useEffect(() => {
    const fetchLaunch = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${flightNumber}`
      );
      const data = await response.json();
      setLaunch(data);
    };
    fetchLaunch();
  }, [flightNumber]);

  return (
    <Screen>
      <Wave color="white" />

      <Launch launch={launch} />

      <Wave color="black" />
    </Screen>
  );
};

export default LaunchDetail;
