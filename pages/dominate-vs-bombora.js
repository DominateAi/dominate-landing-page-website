import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonBombora from "../components/desktop/comparison/LandingPageComparisonBombora";
import MobileBomboraComparison from "../components/mobile/comparison/MobileBomboraComparison";

export default function bombora() {
  return (
    <>
      <HeadTag
        pageTitle="Bombora vs Dominate"
        keywords={comparisonCommonKeywords("bombora")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-bombora`}
        ogTitle="Dominate vs Bombora comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonBombora />
      </div>

      <div className="d-block d-md-none">
        <MobileBomboraComparison />
      </div>
    </>
  );
}
