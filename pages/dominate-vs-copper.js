import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonCopper from "../components/desktop/comparison/LandingPageComparisonCopper";
import MobileCopperCRMComparison from "../components/mobile/comparison/MobileCopperCRMComparison";

export default function copper() {
  return (
    <>
      <HeadTag
        pageTitle="Copper vs Dominate"
        keywords={comparisonCommonKeywords("copper")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-copper`}
        ogTitle="Dominate vs Copper comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonCopper />
      </div>

      <div className="d-block d-md-none">
        <MobileCopperCRMComparison />
      </div>
    </>
  );
}
