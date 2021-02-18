import { Fragment } from "react";

import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import Founder from "../components/Home/Founder";
import img from "../assets/images/home.svg";

const Home = () => {
  return (
    <Fragment>
      <Hero
        title={"Welcome to SpaceX Explorer"}
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad ducimus quas laborum debitis nisi sapiente quam, corporis sunt, quae, exercitationem maxime. Rem animi repellat nulla, consectetur dolores porro vero?"
        image={img}
      />
      <Wave color="white" />
      <Founder />
      <Wave color="black" />
    </Fragment>
  );
};

export default Home;
