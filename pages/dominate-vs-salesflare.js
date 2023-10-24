import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonSalesflare from "../components/desktop/comparison/LandingPageComparisonSalesflare";
import MobileSalesflareComaparison from "../components/mobile/comparison/MobileSalesflareComaparison";

export default function salesflare() {
  return (
    <>
      <HeadTag
        pageTitle="Salesflare vs Dominate"
        keywords={comparisonCommonKeywords("salesflare")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-salesflare`}
        ogTitle="Dominate vs Salesflare comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonSalesflare />
      </div>

      <div className="d-block d-md-none">
        <MobileSalesflareComaparison />
      </div>
    </>
  );
}
