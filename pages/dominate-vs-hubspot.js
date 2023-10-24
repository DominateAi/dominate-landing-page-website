import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonHubspot from "../components/desktop/comparison/LandingPageComparisonHubspot";
import MobileHubspotComaprison from "../components/mobile/comparison/MobileHubspotComaprison";

export default function hubspot() {
  return (
    <>
      <HeadTag
        pageTitle="Hubspot vs Dominate"
        keywords={comparisonCommonKeywords("hubspot")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-hubspot`}
        ogTitle="Dominate vs Hubspot comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonHubspot />
      </div>

      <div className="d-block d-md-none">
        <MobileHubspotComaprison />
      </div>
    </>
  );
}
