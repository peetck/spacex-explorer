import { Fragment } from "react";

import Hero from "../components/UI/Hero";
import img from "../assets/images/rocket.svg";
import Wave from "../components/UI/Wave";
import Title from "../components/UI/Title";
import RocketList from "../components/Rockets/RocketList";

const Rockets = (props) => {
  return (
    <Fragment>
      <Hero
        title="Discover all spaceX rockets"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione adipisci, quod nisi expedita a reiciendis pariatur quos nesciunt tempora exercitationem iusto esse cum sapiente repudiandae modi, sint quia eaque."
        image={img}
      />
      <Wave color="white" />

      <Title message="Rockets" />

      <RocketList />

      <Wave color="black" />
    </Fragment>
  );
};

export default Rockets;
