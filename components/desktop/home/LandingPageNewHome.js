import React, { useEffect } from "react";
import LandingPageFooter from "../LandingPageFooter";
import LandingPageNavbar from "../LandingPageNavbar";
import LandingPageNewHomeFoldFive from "./LandingPageNewHomeFoldFive";
import LandingPageNewHomeFoldFour from "./LandingPageNewHomeFoldFour";
import LandingPageNewHomeFoldOne from "./LandingPageNewHomeFoldOne";
import LandingPageNewHomeFoldThree from "./LandingPageNewHomeFoldThree";
import LandingPageNewHomeFoldTwo from "./LandingPageNewHomeFoldTwo";
import LandingPageNewHomePricing from "./LandingPageNewHomePricing";
import ScrollTop from "../ScrollTop";

export default function LandingPageNewHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="background-section">
        <LandingPageNavbar activeLink="home" />
        <ScrollTop />
        {/*============Content============*/}
        <LandingPageNewHomeFoldOne />
        <LandingPageNewHomeFoldTwo />
        <LandingPageNewHomeFoldThree />
        <LandingPageNewHomeFoldFour />
        <LandingPageNewHomeFoldFive />
        <LandingPageNewHomePricing />
      </div>
      <LandingPageFooter />
    </>
  );
}
