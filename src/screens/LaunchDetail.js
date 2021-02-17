import { useParams } from "react-router-dom";

const LaunchDetail = (props) => {
  const { id } = useParams();

  return <h1>{id}</h1>;
};

export default LaunchDetail;
