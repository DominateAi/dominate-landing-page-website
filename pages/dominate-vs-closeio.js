import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonClose from "../components/desktop/comparison/LandingPageComparisonClose";
import MobileCloseComparison from "../components/mobile/comparison/MobileCloseComparison";

export default function close() {
  return (
    <>
      <HeadTag
        pageTitle="Closeio vs Dominate"
        keywords={comparisonCommonKeywords("closeio")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-closeio`}
        ogTitle="Dominate vs Closeio comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonClose />
      </div>

      <div className="d-block d-md-none">
        <MobileCloseComparison />
      </div>
    </>
  );
}
