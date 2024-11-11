import Header from "@components/Header/Header.jsx";
import HeroTitle from "@components/HeroTitle/HeroTitle.jsx";
import Banner from "@components/Banner/Banner.jsx";
import Sustainability from "@components/Sustainability/Sustainability.jsx";
import FeaturedProducts from "@features/FeaturedProducts/FeaturedProducts.jsx";

export default function Root() {
  return (
    <>
      <Header />
      <HeroTitle />
      <Banner />
      <FeaturedProducts />
      <Sustainability />
    </>
  );
}
