import Lottie from "lottie-react";

const Hero = ({ title, subtitle, image }) => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container flex flex-wrap flex-col px-5 mx-auto md:flex-row">
        <div className="flex flex-col w-full mt-5 justify-center text-center md:text-left md:w-2/5">
          <h1 className="my-4 text-5xl font-bold leading-tight">{title}</h1>
          <p className="leading-normal text-xl mb-8">{subtitle}</p>
        </div>
        <div className="flex w-full justify-center md:w-3/5">
          <Lottie animationData={image} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
