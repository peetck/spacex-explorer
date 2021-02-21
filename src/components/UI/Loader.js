import Lottie from "lottie-react";

import loader from "../../assets/images/loader.json";

const Loader = () => {
  return (
    <div className="flex w-96 h-96">
      <Lottie animationData={loader} />
    </div>
  );
};

export default Loader;
