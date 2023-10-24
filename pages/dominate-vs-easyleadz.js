import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonEasyLeadz from "../components/desktop/comparison/LandingPageComparisonEasyLeadz";
import MobileEasyLeadzComparison from "../components/mobile/comparison/MobileEasyLeadzComparison";

export default function easyleadz() {
  return (
    <>
      <HeadTag
        pageTitle="Easyleadz vs Dominate"
        keywords={comparisonCommonKeywords("easyleadz")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-easyleadz`}
        ogTitle="Dominate vs Easyleadz comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonEasyLeadz />
      </div>

      <div className="d-block d-md-none">
        <MobileEasyLeadzComparison />
      </div>
    </>
  );
}
