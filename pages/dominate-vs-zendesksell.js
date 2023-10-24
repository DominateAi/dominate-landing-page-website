import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonZendeskSell from "../components/desktop/comparison/LandingPageComparisonZendeskSell";
import MobileZendeskSellComparison from "../components/mobile/comparison/MobileZendeskSellComparison";

export default function zendeskSell() {
  return (
    <>
      <HeadTag
        pageTitle="Zendesk Sell vs Dominate"
        keywords={comparisonCommonKeywords("zendesk")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-zendesksell`}
        ogTitle="Dominate vs Zendesk Sell comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonZendeskSell />
      </div>

      <div className="d-block d-md-none">
        <MobileZendeskSellComparison />
      </div>
    </>
  );
}
