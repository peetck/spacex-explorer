import { useParams } from "react-router-dom";

const LaunchDetail = (props) => {
  const { flightNumber } = useParams();

  return <h1>{flightNumber}</h1>;
};

export default LaunchDetail;
