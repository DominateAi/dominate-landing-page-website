import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonHunter from "../components/desktop/comparison/LandingPageComparisonHunter";
import MobileHunterComparison from "../components/mobile/comparison/MobileHunterComparison";

export default function hunter() {
  return (
    <>
      <HeadTag
        pageTitle="Hunter io vs Dominate"
        keywords={comparisonCommonKeywords("hunter")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-hunterio`}
        ogTitle="Dominate vs Hunter io comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonHunter />
      </div>

      <div className="d-block d-md-none">
        <MobileHunterComparison />
      </div>
    </>
  );
}
