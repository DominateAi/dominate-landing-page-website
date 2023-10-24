import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonLusha from "../components/desktop/comparison/LandingPageComparisonLusha";
import MobileLushaComparison from "../components/mobile/comparison/MobileLushaComparison";

export default function lusha() {
  return (
    <>
      <HeadTag
        pageTitle="Lusha vs Dominate"
        keywords={comparisonCommonKeywords("lusha")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-lusha`}
        ogTitle="Dominate vs Lusha io comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonLusha />
      </div>

      <div className="d-block d-md-none">
        <MobileLushaComparison />
      </div>
    </>
  );
}
