import { useEffect, useState } from "react";

const Home = (props) => {
  const [history, setHistory] = useState(); 
  
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
      <h1>{history.title}</h1>
    </div>
  );
};

export default Home;
