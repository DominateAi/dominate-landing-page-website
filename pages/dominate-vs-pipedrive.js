import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonPipedrive from "../components/desktop/comparison/LandingPageComparisonPipedrive";
import MobilePipedriverComparison from "../components/mobile/comparison/MobilePipedriverComparison";

export default function pipedrive() {
  return (
    <>
      <HeadTag
        pageTitle="Pipedrive vs Dominate"
        keywords={comparisonCommonKeywords("pipedrive")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-pipedrive`}
        ogTitle="Dominate vs Pipedrive comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonPipedrive />
      </div>

      <div className="d-block d-md-none">
        <MobilePipedriverComparison />
      </div>
    </>
  );
}
