import React from "react";
import { comparisonCommonKeywords } from "../components/common/commonHeadTagProps";
import HeadTag from "../components/common/HeadTag";
import LandingPageComparisonBitrix from "../components/desktop/comparison/LandingPageComparisonBitrix";
import MobileBitrix24Comparison from "../components/mobile/comparison/MobileBitrix24Comparison";

export default function bitrix() {
  return (
    <>
      <HeadTag
        pageTitle="Bitrix vs Dominate"
        keywords={comparisonCommonKeywords("bitrix")}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/dominate-vs-bitrix`}
        ogTitle="Dominate vs Bitrix comparison"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageComparisonBitrix />
      </div>

      <div className="d-block d-md-none">
        <MobileBitrix24Comparison />
      </div>
    </>
  );
}
