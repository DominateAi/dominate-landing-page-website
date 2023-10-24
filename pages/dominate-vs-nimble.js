import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonNimble from "../components/desktop/comparison/LandingPageComparisonNimble";
import MobileNimbleComparison from "../components/mobile/comparison/MobileNimbleComparison";

export default function nimble() {
  return (
    <>
      <HeadTag
        pageTitle="Nimble vs Dominate"
        keywords={comparisonCommonKeywords("nimble")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-nimble`}
        ogTitle="Dominate vs Nimble comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonNimble />
      </div>
      <div className="d-block d-md-none">
        <MobileNimbleComparison />
      </div>
    </>
  );
}
