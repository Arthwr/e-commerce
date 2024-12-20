import { Outlet, useLocation } from "react-router-dom";
import Footer from "@components/Footer/Footer.jsx";
import NavBar from "@components/NavBar/NavBar";
import MainHeader from "@features/MainHeader/MainHeader";

export default function Root() {
  const location = useLocation();
  const renderNavBar =
    location.pathname === "/" ? (
      <MainHeader />
    ) : (
      <NavBar isStatic={true} isAnimating={true} enableScrollHandler={false} />
    );

  return (
    <>
      {renderNavBar}
      <Outlet />
      <Footer />
    </>
  );
}
