import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import Wave from "../components/UI/Wave";
import RocketsContext from "../contexts/RocketsContext";

const RocketDetail = (props) => {
  const { rocketId } = useParams();
  const [wikiIsVisible, setWikiIsVisible] = useState(false);
  const [dataIsVisible, setDataIsVisible] = useState(true);

  const { getRocket } = useContext(RocketsContext);

  const rocket = getRocket(rocketId);

  const wikiClick = () => {
    setWikiIsVisible(true);
    setDataIsVisible(false);
  };
  const dataClick = () => {
    setWikiIsVisible(false);
    setDataIsVisible(true);
  };

  return (
    <div className="h-screen">
      <Wave color="white" />
      {/* <h1>{rocket && rocket ? rocket.rocket_name : ""}</h1> */}
      <div className="text-center">
        <button
          className={`bg-grey ${
            dataIsVisible ? "bg-gray-500" : ""
          } font-bold py-2 px-4 shadow -mr-1 border border-gray-200 m-4`}
          onClick={dataClick}
        >
          Data
        </button>
        <button
          className={`bg-grey ${
            wikiIsVisible ? "bg-gray-500" : ""
          } font-bold py-2 px-4 rounded-r rounded-lg  border border-gray-200 m-4`}
          onClick={wikiClick}
        >
          Wiki
        </button>
      </div>
      {dataIsVisible ? (
        <div className="grid grid-cols-2 gap-14">
          <div>
            <img
              className="m-auto w-8/12 h-8/12 shadow-2xl "
              src={rocket && rocket ? rocket.flickr_images[0] : ""}
              alt="Can't load img"
            />
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
      {wikiIsVisible ? (
        <iframe
          className="mx-auto border border-gray-400"
          // id="inlineFrameExample"
          title="Inline Frame Example"
          width="60%"
          height="80%"
          src={rocket && rocket ? rocket.wikipedia : ""}
        />
      ) : (
        ""
      )}

      <Wave color="black" />
    </div>
  );
};

export default RocketDetail;
