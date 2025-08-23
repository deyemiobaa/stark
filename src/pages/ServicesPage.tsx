import Content from "../components/services/Content";
import Events from "../components/our-work/Events";
import Footer from "../components/home-page/Footer";
import Help from "../components/services/Help";
import Move from "../components/services/Move";
import Product from "../components/services/Product";
import Promotions from "../components/services/Promotions";
import Results from "../components/services/Results";
import ServicesHero from "../components/services/ServicesHero";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <Help />
      <Content />
      <Product />
      <Promotions />
      <Events buttonText={"Start the Conversation"} />
      <Results />
      <Move />
      <Footer />
    </div>
  );
};

export default ServicesPage;
