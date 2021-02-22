import { useContext } from "react";

import RocketsContext from "../../contexts/RocketsContext";

const Filter = ({
  filterChangeHandler,
  rocketName,
  launchYear,
  launchSuccess,
}) => {
  const { rockets } = useContext(RocketsContext);

  const currentYear = new Date().getFullYear();

  return (
    <div className="container grid grid-cols-1 gap-6 mx-auto w-1/2 mt-14 xl:grid-cols-3">
      <label className="block">
        <span className="text-gray-700">Rocket name</span>
        <select
          value={rocketName}
          onChange={(e) => filterChangeHandler("rocketName", e)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          {rockets.map((item) => (
            <option key={item.rocket_name} value={item.rocket_name}>
              {item.rocket_name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-gray-700">Launch year</span>
        <select
          value={launchYear}
          onChange={(e) => filterChangeHandler("launchYear", e)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          {[...Array(currentYear - 2001 + 1).keys()]
            .sort((a, b) => b - a)
            .map((item) => {
              const year = item + 2001;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
        </select>
      </label>

      <label className="block">
        <span className="text-gray-700">Launch success</span>
        <select
          value={launchSuccess}
          onChange={(e) => filterChangeHandler("launchSuccess", e)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          <option value={true}>Success</option>
          <option value={false}>Failed</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
