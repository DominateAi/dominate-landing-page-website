import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonSalesforce from "../components/desktop/comparison/LandingPageComparisonSalesforce";
import MobileSalesforceComparison from "../components/mobile/comparison/MobileSalesforceComparison";

export default function salesforce() {
  return (
    <>
      <HeadTag
        pageTitle="Salesforce vs Dominate"
        keywords={comparisonCommonKeywords("salesforce")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-salesforce`}
        ogTitle="Dominate vs Salesforce comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonSalesforce />
      </div>

      <div className="d-block d-md-none">
        <MobileSalesforceComparison />
      </div>
    </>
  );
}
