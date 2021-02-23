import { useContext } from "react";

import Hero from "../components/UI/Hero";
import Wave from "../components/UI/Wave";
import Title from "../components/UI/Title";
import RocketList from "../components/Rockets/RocketList";
import Screen from "../components/UI/Screen";
import heroAnimation from "../assets/animations/rockets.json";
import RocketsContext from "../contexts/RocketsContext";

const Rockets = () => {
  const { rockets } = useContext(RocketsContext);

  return (
    <Screen>
      <Hero
        title="Discover all SpaceX Rockets"
        subtitle="A rocket is a missile, spacecraft, aircraft or other vehicle that obtains thrust from a rocket engine. "
        image={heroAnimation}
      />
      <Wave />
      <Title message="Rockets" />
      <RocketList rockets={rockets} />
    </Screen>
  );
};

export default Rockets;
