import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonFreshsales from "../components/desktop/comparison/LandingPageComparisonFreshsales";
import MobileFreshsalesComparison from "../components/mobile/comparison/MobileFreshsalesComparison";

export default function freshsales() {
  return (
    <>
      <HeadTag
        pageTitle="Freshsales vs Dominate"
        keywords={comparisonCommonKeywords("freshsales")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-freshsales`}
        ogTitle="Dominate vs Freshsales comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonFreshsales />
      </div>

      <div className="d-block d-md-none">
        <MobileFreshsalesComparison />
      </div>
    </>
  );
}
