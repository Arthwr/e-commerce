import Header from "@components/Header/Header.jsx";
import HeroTitle from "@components/HeroTitle/HeroTitle.jsx";
import Banner from "@components/Banner/Banner.jsx";
import FeaturedProducts from "@features/FeaturedProducts/FeaturedProducts.jsx";
import Sustainability from "@components/Sustainability/Sustainability.jsx";
import Footer from "@components/Footer/Footer.jsx";
import DevFooter from "@components/DevFooter/DevFooter.jsx";

export default function Root() {
  return (
    <>
      <Header />
      <HeroTitle />
      <Banner />
      <FeaturedProducts />
      <Sustainability />
      <Footer />
      <DevFooter />
    </>
  );
}
