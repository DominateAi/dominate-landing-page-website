import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonZoho from "../components/desktop/comparison/LandingPageComparisonZoho";
import MobileZohoComparison from "../components/mobile/comparison/MobileZohoComparison";

export default function zoho() {
  return (
    <>
      <HeadTag
        pageTitle="ZohoCRM vs Dominate"
        keywords={comparisonCommonKeywords("zohoCRM")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-zohocrm`}
        ogTitle="Dominate vs ZohoCRM comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonZoho />
      </div>

      <div className="d-block d-md-none">
        <MobileZohoComparison />
      </div>
    </>
  );
}
