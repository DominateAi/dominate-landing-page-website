import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonAlore from "../components/desktop/comparison/LandingPageComparisonAlore";
import MobileAloreComparison from "../components/mobile/comparison/MobileAloreComparison";

export default function alore() {
  return (
    <>
      <HeadTag
        pageTitle="Alore vs Dominate"
        keywords={comparisonCommonKeywords("alore")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-alore`}
        ogTitle="Dominate vs Alore comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonAlore />
      </div>

      <div className="d-block d-md-none">
        <MobileAloreComparison />
      </div>
    </>
  );
}
