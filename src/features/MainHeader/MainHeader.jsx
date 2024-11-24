import useAnimateScroll from "./hooks/useAnimateScroll.jsx";
import NavBar from "@components/NavBar/NavBar.jsx";
import HeroSection from "@components/HeroSection/HeroSection.jsx";

export default function MainHeader() {
  const isAnimating = useAnimateScroll(1000);

  return (
    <>
      <NavBar isAnimating={isAnimating} />
      <HeroSection isAnimating={isAnimating} />
    </>
  );
}
