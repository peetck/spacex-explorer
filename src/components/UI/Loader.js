import Lottie from "lottie-react";

import loaderAnimation from "../../assets/animations/loader.json";

const Loader = () => {
  return (
    <div className="flex w-96 h-96 justify-center">
      <Lottie animationData={loaderAnimation} />
    </div>
  );
};

export default Loader;
