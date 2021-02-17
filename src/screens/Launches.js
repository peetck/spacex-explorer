import { useEffect, useState } from "react";

import Card from "../components/Launches/Card";
import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import img from "../assets/images/launches.svg";
import Pagination from "../components/Launches/Pagination";

const Launches = (props) => {
  const [launches, setLaunches] = useState();

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches?id=true&limit=4"
      );
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunches();
  }, []);

  return (
    <div>
      <Hero
        title="Discover all spaceX launches"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione adipisci, quod nisi expedita a reiciendis pariatur quos nesciunt tempora exercitationem iusto esse cum sapiente repudiandae modi, sint quia eaque."
        image={img}
      />

      <Wave color="white" />

      <div className="container mx-auto">
        <h1 className="w-full text-5xl font-bold leading-tight text-center mt-14 ">
          Launches
        </h1>
      </div>

      <div class="container grid grid-cols-1 gap-6  mx-auto">
        <label class="block">
          <span class="text-gray-700">Full name</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Email address</span>
          <input
            type="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">When is your event?</span>
          <input
            type="date"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">What type of event is it?</span>
          <select class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>Corporate event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </label>
        <label class="block">
          <span class="text-gray-700">Additional details</span>
          <textarea
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
          ></textarea>
        </label>
        <div class="block">
          <div class="mt-2">
            <div>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  checked=""
                />
                <span class="ml-2">Email me news and special offers</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {launches &&
          launches.map((launch) => (
            <Card
              key={launch._id}
              flight_number={launch.flight_number}
              missionName={launch.mission_name}
              date={launch.launch_date_utc}
              imageUrl={launch.links.mission_patch}
              success={launch.launch_success}
              details={launch.details}
            />
          ))}
      </div>

      <Pagination />

      <Wave color="black" />
    </div>
  );
};

export default Launches;
