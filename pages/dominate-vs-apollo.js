import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonApollo from "../components/desktop/comparison/LandingPageComparisonApollo";
import MobileApolloComparison from "../components/mobile/comparison/MobileApolloComparison";

export default function apollo() {
  return (
    <>
      <HeadTag
        pageTitle="Apollo io vs Dominate"
        keywords={comparisonCommonKeywords("apollo")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-apollo`}
        ogTitle="Dominate vs Apollo io comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonApollo />
      </div>

      <div className="d-block d-md-none">
        <MobileApolloComparison />
      </div>
    </>
  );
}
