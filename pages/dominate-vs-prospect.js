import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonProspect from "../components/desktop/comparison/LandingPageComparisonProspect";
import MobileProspectComparison from "../components/mobile/comparison/MobileProspectComparison";

export default function prospect() {
  return (
    <>
      <HeadTag
        pageTitle="Prospect vs Dominate"
        keywords={comparisonCommonKeywords("prospect")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-prospect`}
        ogTitle="Dominate vs Prospect comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonProspect />
      </div>

      <div className="d-block d-md-none">
        <MobileProspectComparison />
      </div>
    </>
  );
}
