import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageCancellationandRefund from "../components/desktop/LandingPageCancellationandRefund";

export default function cancellationAndRefund() {
  return (
    <>
      <HeadTag
        pageTitle="Cancellation and Refund"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/cancellation-and-refund`}
        ogTitle="Dominate ai cancellation and refund"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageCancellationandRefund />
      </div>
    </>
  );
}
