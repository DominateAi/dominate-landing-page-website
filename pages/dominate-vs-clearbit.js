import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonClearbit from "../components/desktop/comparison/LandingPageComparisonClearbit";
import MobileClearbitComparison from "../components/mobile/comparison/MobileClearbitComparison";

export default function clearbit() {
  return (
    <>
      <HeadTag
        pageTitle="Clearbit vs Dominate"
        keywords={comparisonCommonKeywords("clearbit")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-clearbit`}
        ogTitle="Dominate vs Clearbit comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonClearbit />
      </div>

      <div className="d-block d-md-none">
        <MobileClearbitComparison />
      </div>
    </>
  );
}
