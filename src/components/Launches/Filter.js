import { useContext } from "react";

import RocketsContext from "../../contexts/RocketsContext";

const Filter = ({ rocketNameChangeHandler }) => {
  const { rockets } = useContext(RocketsContext);

  return (
    <div className="container grid grid-cols-1 gap-6 mx-auto w-1/2 mt-14 xl:grid-cols-3">
      <label className="block">
        <span className="text-gray-700">Rocket name</span>
        <select
          onChange={rocketNameChangeHandler}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">-----</option>
          {rockets.map((item) => (
            <option key={item._id} value={item.rocket_name}>
              {item.rocket_name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-gray-700">Launch year</span>
        <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option>Both</option>
          <option>Success</option>
          <option>Fail</option>
        </select>
      </label>

      <label className="block">
        <span className="text-gray-700">Launch success</span>
        <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option>Both</option>
          <option>Success</option>
          <option>Fail</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
