const Input = (props) => {
  return (
    <div className="container grid grid-cols-1 gap-6 mx-auto w-1/2 mt-14 xl:grid-cols-3">
      <label className="block">
        <span className="text-gray-700">Rocket name </span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder=""
        />
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

export default Input;
