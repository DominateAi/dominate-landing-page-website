import React, { useEffect } from "react";
import LandingPageFooter from "../LandingPageFooter";
import FeaturesFoldOne from "./FeaturesFoldOne";
import FeaturesFoldThree from "./FeaturesFoldThree";
import FeaturesFoldTwo from "./FeaturesFoldTwo";
import ScrollDown from "../ScrollDown";
import ScrollTop from "../ScrollTop";

export default function FeaturesMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="background-section">
        <ScrollDown />
        <ScrollTop />
        <FeaturesFoldOne />
        <FeaturesFoldTwo />
        <FeaturesFoldThree />
        <LandingPageFooter />
      </div>
    </>
  );
}
