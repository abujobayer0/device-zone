import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/index";
import NewArrival from "../components/newArrival";
import FeaturedProducts from "../components/featured";
import HotDeals from "../components/HotDeal";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrival />
      <FeaturedProducts />
      <HotDeals />
    </>
  );
};

export default Home;
