import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonSkapp from "../components/desktop/comparison/LandingPageComparisonSkapp";
import MobileSkrappComparison from "../components/mobile/comparison/MobileSkrappComparison";

export default function skrapp() {
  return (
    <>
      <HeadTag
        pageTitle="Skrapp vs Dominate"
        keywords={comparisonCommonKeywords("skrapp")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-skrapp`}
        ogTitle="Dominate vs Skrapp comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonSkapp />
      </div>

      <div className="d-block d-md-none">
        <MobileSkrappComparison />
      </div>
    </>
  );
}
