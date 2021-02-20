import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import Detail from "../components/UI/Detail";
import Screen from "../components/UI/Screen";

const LaunchDetail = (props) => {
  const { flightNumber } = useParams();

  const [launch, setLaunch] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLaunch = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${flightNumber}`
      );
      const data = await response.json();
      setLaunch(data);
      setIsLoading(false);
    };
    fetchLaunch();
  }, [flightNumber]);

  return (
    <Screen>
      <Wave color="white" />

      <Detail
        title={launch?.mission_name}
        description={launch?.details}
        active={launch?.launch_success}
        imageUrl={launch?.links.mission_patch_small}
        wikipedia={launch?.links.wikipedia}
        videoLink={launch?.links.video_link}
        isLoading={isLoading}
      />

      <Wave color="black" />
    </Screen>
  );
};

export default LaunchDetail;
