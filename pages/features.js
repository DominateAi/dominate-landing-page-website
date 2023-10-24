import React from "react";
import HeadTag from "../components/common/HeadTag";
import FeaturesMain from "../components/desktop/features/FeaturesMain";
//import LandingPageFeatures from "../components/desktop/LandingPageFeatures";
import LandingPageMobileFeatures from "../components/mobile/LandingPageMobileFeatures";

export default function features() {
  return (
    <>
      <HeadTag
        pageTitle="Features List"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/features`}
        ogTitle="Dominate ai list of features"
      />

      <div className="d-none d-md-block pricing-page-bg">
        {/*<LandingPageFeatures />*/}
        <FeaturesMain />
      </div>

      {/* <div className="d-block d-md-none">
        <LandingPageMobileFeatures />
      </div> */}
    </>
  );
}
