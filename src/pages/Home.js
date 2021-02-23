import Wave from "../components/UI/Wave";
import Hero from "../components/UI/Hero";
import Founder from "../components/Home/Founder";
import Screen from "../components/UI/Screen";
import heroAnimation from "../assets/animations/home.json";

const Home = () => {
  return (
    <Screen>
      <Hero
        title={"Welcome to SpaceX Explorer"}
        subtitle="Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002."
        image={heroAnimation}
      />
      <Wave />
      <Founder />
    </Screen>
  );
};

export default Home;
