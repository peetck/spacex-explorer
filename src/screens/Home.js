import { useEffect, useState } from "react";

const Home = () => {
  const [histories, setHistories] = useState();

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/history");
      const data = await response.json();
      setHistories(data);
    };
    fetchHistory();
  }, []);

  return (
    <div>
      {histories &&
        histories.map((history) => <h1 key={history.id}>{history.title}</h1>)}
    </div>
  );
};

export default Home;
