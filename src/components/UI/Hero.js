const Hero = ({ title, subtitle, image }) => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
        <div className="flex flex-col w-full mt-5 justify-center text-center md:text-left md:w-2/5">
          <h1 className="my-4 text-5xl font-bold leading-tight">{title}</h1>
          <p className="leading-normal text-xl mb-8">{subtitle}</p>

          {/* <div className="w-full z-10">
              <button className="bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Explore
              </button>
            </div> */}
        </div>

        <div className="flex w-full md:w-3/5">
          <img
            className="w-full z-10"
            src={image}
            alt="Can't load img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
