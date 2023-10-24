import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPagePricing from "../components/desktop/LandingPagePricing";

export default function pricing() {
  return (
    <>
      <HeadTag
        pageTitle="Pricing"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/pricing`}
        ogTitle="Dominate ai pricing plans"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPagePricing />
      </div>
    </>
  );
}
