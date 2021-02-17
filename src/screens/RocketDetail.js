import { useParams } from "react-router-dom";

const RocketDetail = (props) => {
  const { rocketId } = useParams();

  return <h1>{rocketId}</h1>;
};

export default RocketDetail;
