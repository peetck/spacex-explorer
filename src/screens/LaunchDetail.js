import { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import Detail from "../components/UI/Detail";

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
    <Fragment>
      <Wave color="white" />

      <Detail
        title={launch?.mission_name}
        description={launch?.details}
        active={launch?.launch_success}
        imageUrl={launch?.links.mission_patch_small}
        wikipedia={launch?.links.wikipedia}
        videoLink={launch?.links.video_link}
      />

      <Wave color="black" />
    </Fragment>
  );
};

export default LaunchDetail;
