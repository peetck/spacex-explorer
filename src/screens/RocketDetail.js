import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wave from "../components/UI/Wave";

const RocketDetail = (props) => {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState();
  const [wikiIsVisible, setWikiIsVisible] = useState(false);
  const [dataIsVisible, setDataIsVisible] = useState(true);
  const wikiClick = () => (setWikiIsVisible(true), setDataIsVisible(false));
  const dataClick = () => (setWikiIsVisible(false), setDataIsVisible(true));

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      const dataFiltered = data.filter((item) => item.id == rocketId);
      setRocket(dataFiltered[0]);
    };

    fetchRockets();
  }, []);
  return (
    <div className="h-screen">
      <Wave color="white" />
      {/* <h1>{rocket && rocket ? rocket.rocket_name : ""}</h1> */}
      <div class="text-center">
        <button
          class={`bg-grey ${dataIsVisible ? "bg-gray-500" : ""} font-bold py-2 px-4 shadow -mr-1 border border-gray-200 m-4`}
          onClick={dataClick}
        >
          Data
        </button>
        <button
          class={`bg-grey ${wikiIsVisible ? "bg-gray-500" : "" } font-bold py-2 px-4 rounded-r rounded-lg  border border-gray-200 m-4`}
          onClick={wikiClick}
        >
          Wiki
        </button>
      </div>
      {dataIsVisible == true ? (
        <div class="grid grid-cols-2 gap-14">
          <div>
            <img
              className="m-auto w-8/12 h-8/12 shadow-2xl "
              src={rocket && rocket ? rocket.flickr_images[0] : ""}
            ></img>
          </div>
          <div className="m-auto mr-64">
            {rocket && rocket ? rocket.description : ""}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* <img
        className="mr-auto m-14 w-2/5 h-3/5 shadow-2xl "
        src={rocket && rocket ? rocket.flickr_images[0] : ""}
      ></img> */}
      {wikiIsVisible == true ? (
        <iframe
          className="mx-auto border border-gray-400"
          // id="inlineFrameExample"
          // title="Inline Frame Example"
          width="60%"
          height="80%"
          src={rocket && rocket ? rocket.wikipedia : ""}
        ></iframe>
      ) : (
        ""
      )}

      <Wave color="black" />
    </div>
  );
};

export default RocketDetail;
