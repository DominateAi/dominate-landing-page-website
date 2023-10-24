import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonWiza from "../components/desktop/comparison/LandingPageComparisonWiza";
import MobileWizaComparison from "../components/mobile/comparison/MobileWizaComparison";

export default function wiza() {
  return (
    <>
      <HeadTag
        pageTitle="Wiza vs Dominate"
        keywords={comparisonCommonKeywords("wiza")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-wiza`}
        ogTitle="Dominate vs Wiza comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonWiza />
      </div>
      <div className="d-block d-md-none">
        <MobileWizaComparison />
      </div>
    </>
  );
}
