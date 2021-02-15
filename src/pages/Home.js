import { useEffect, useState } from "react";

const Home = () => {
  const [historys, setHistory] = useState();

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/history");
      const data = await response.json();
      setHistory(data);
    };
    fetchHistory();
  }, []);
  return (
    <div>
      {historys && historys.map((history) => <h1>{history.title}</h1>)}
    </div>
  );
};

export default Home;
