import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonInsightly from "../components/desktop/comparison/LandingPageComparisonInsightly";
import MobileInsightlyComparison from "../components/mobile/comparison/MobileInsightlyComparison";

export default function insightly() {
  return (
    <>
      <HeadTag
        pageTitle="Insightly vs Dominate"
        keywords={comparisonCommonKeywords("insightly")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-insightly`}
        ogTitle="Dominate vs Insightly comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonInsightly />
      </div>

      <div className="d-block d-md-none">
        <MobileInsightlyComparison />
      </div>
    </>
  );
}
