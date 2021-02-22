import Hero from "../components/UI/Hero";
import Wave from "../components/UI/Wave";
import Title from "../components/UI/Title";
import RocketList from "../components/Rockets/RocketList";
import Screen from "../components/UI/Screen";
import heroAnimation from "../assets/animations/rockets.json";

const Rockets = (props) => {
  return (
    <Screen>
      <Hero
        title="Discover all SpaceX Rockets"
        subtitle="A rocket is a missile, spacecraft, aircraft or other vehicle that obtains thrust from a rocket engine. "
        image={heroAnimation}
      />
      <Wave color="white" />
      <Title message="Rockets" />
      <RocketList />
      <Wave color="black" />
    </Screen>
  );
};

export default Rockets;
