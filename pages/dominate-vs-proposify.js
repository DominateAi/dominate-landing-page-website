import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonProposify from "../components/desktop/comparison/LandingPageComparisonProposify";
import MobileProposifyComparison from "../components/mobile/comparison/MobileProposifyComparison";

export default function proposify() {
  return (
    <>
      <HeadTag
        pageTitle="Proposify vs Dominate"
        keywords={comparisonCommonKeywords("proposify")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-proposify`}
        ogTitle="Dominate vs Proposify comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonProposify />
      </div>

      <div className="d-block d-md-none">
        <MobileProposifyComparison />
      </div>
    </>
  );
}
