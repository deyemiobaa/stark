import Craft from "../components/home-page/Craft";
import CreativityScroll from "../components/home-page/CreativityScroll";
import Excellence from "../components/home-page/Excellence";
import Footer from "../components/home-page/Footer";
import Hero from "../components/home-page/Hero";
import Scenes from "../components/home-page/Scenes";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Excellence />
      <CreativityScroll />
      <Scenes />
      <Craft />
      <Footer />
    </>
  );
};

export default HomePage;
