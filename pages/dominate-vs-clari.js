import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonClari from "../components/desktop/comparison/LandingPageComparisonClari";
import MobileClariComparison from "../components/mobile/comparison/MobileClariComparison";

export default function clari() {
  return (
    <>
      <HeadTag
        pageTitle="Clari vs Dominate"
        keywords={comparisonCommonKeywords("clari")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-clari`}
        ogTitle="Dominate vs Clari comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonClari />
      </div>

      <div className="d-block d-md-none">
        <MobileClariComparison />
      </div>
    </>
  );
}
