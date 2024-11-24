import MainHeader from "@features/MainHeader/MainHeader.jsx";
import FeaturedProducts from "@features/FeaturedProducts/FeaturedProducts.jsx";
import Sustainability from "@components/Sustainability/Sustainability.jsx";
import Footer from "@components/Footer/Footer.jsx";

export default function Root() {
  return (
    <>
      <MainHeader />
      <FeaturedProducts />
      <Sustainability />
      <Footer />
    </>
  );
}
