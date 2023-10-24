import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonAffinity from "../components/desktop/comparison/LandingPageComparisonAffinity";
import MobileAffinityComparison from "../components/mobile/comparison/MobileAffinityComparison";

export default function affinity() {
  return (
    <>
      <HeadTag
        pageTitle="Affinity CRM vs Dominate"
        keywords={comparisonCommonKeywords("affinity")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-affinity`}
        ogTitle="Dominate vs Affinity CRM comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonAffinity />
      </div>

      <div className="d-block d-md-none">
        <MobileAffinityComparison />
      </div>
    </>
  );
}
