import { useEffect, useState } from "react";

import landingImage from "../assets/images/space discovery.svg";

const Home = () => {
  const [histories, setHistories] = useState();
  const [info, setInfo] = useState();

  const fetchInfo = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/info");
    const data = await response.json();
    setInfo(data);
    console.log(data);
  };

  const fetchHistory = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/history");
    const data = await response.json();
    setHistories(data);
    console.log(data);
  };

  useEffect(() => {
    fetchInfo();
    fetchHistory();
  }, []);

  return (
    <>
      <div className="w-full bg-black text-white">
        <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
          <div className="flex flex-col w-full mt-5 justify-center text-center md:text-left md:w-2/5">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Welcome to SpaceX Explorer
            </h1>
            <p className="leading-normal text-xl mb-8">{info?.summary}</p>

            <div className="w-full z-10">
              <button className="bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Explore
              </button>
            </div>
          </div>

          <div className="flex w-full md:w-3/5">
            <img className="w-full z-10" src={landingImage} alt="Can't load svg" />
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="bg-black relative lg:-top-20">
        <svg viewBox="0 0 1428 174">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="white"
              fill-rule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <section class="container mx-auto m-5">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Founder
        </h1>

        <div className="flex flex-col items-center my-16 mx-20 xl:flex-row">
          <div className="flex flex-col m-5 w-full xl:w-1/2">
            <h1 className="text-4xl font-bold mb-5">{info && info.founder}</h1>
            <p className="text-base">
              In 2001, Musk conceived{" "}
              <a
                href="https://en.wikipedia.org/wiki/Mars_Oasis"
                className="text-blue-600 hover:underline"
              >
                Mars Oasis
              </a>
              : a miniature greenhouse on Mars would grow food crops and
              reawaken public interest in space exploration. In October 2001,
              Musk traveled with a group to Moscow to buy refurbished Dnepr
              Intercontinental ballistic missiles (ICBMs) that could send the
              greenhouse payloads into space. He met with companies such as NPO
              Lavochkin and Kosmotras; however, Musk was seen as a novice and
              was even spat on by one of the Russian chief designers. The group
              returned to the United States empty-handed. In February 2002, the
              group returned to Russia to look for three ICBMs. They had another
              meeting with Kosmotras and were offered one rocket for $8 million,
              which Musk rejected. Musk instead decided to start a company that
              could build affordable rockets. With $100 million of his early
              fortune, Musk founded Space Exploration Technologies Corp., traded
              as SpaceX, in May 2002
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
              className="rounded-3xl hidden xl:block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
