import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import Screen from "../components/UI/Screen";
import Launch from "../components/Launches/Launch";

const URL = "https://api.spacexdata.com/v3/launches";

const LaunchDetail = () => {
  const { flightNumber } = useParams();

  const [launch, setLaunch] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        const response = await fetch(`${URL}/${flightNumber}`);
        const data = await response.json();
        setLaunch(data);
        setIsLoading(false);
      } catch (error) {
        console.log(`Can't fetch launch from ${URL}/${flightNumber}`);
      }
    };
    fetchLaunch();
  }, [flightNumber]);

  return (
    <Screen>
      <Wave />
      <Launch launch={launch} isLoading={isLoading} />
    </Screen>
  );
};

export default LaunchDetail;
