import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageNewPrivacyPolicy from "../components/desktop/LandingPageNewPrivacyPolicy";
// import LandingPagePrivacy from "../components/desktop/LandingPagePrivacy";

export default function privacy() {
  return (
    <>
      <HeadTag
        pageTitle="Privacy Policy"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy`}
        ogTitle="Dominate ai privacy policy page"
      />

      <div className="d-none d-md-block pricing-page-bg">
        {/* <LandingPagePrivacy /> */}
        <LandingPageNewPrivacyPolicy />
      </div>
    </>
  );
}
