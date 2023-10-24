import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageFacebookDataDeletionInstructions from "../components/desktop/LandingPageFacebookDataDeletionInstructions";

export default function facebookDataDeletionInstructions() {
  return (
    <>
      <HeadTag
        pageTitle="Facebook data deletion instructions"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/facebook-data-deletion-instructions`}
        ogTitle="Dominate ai facebook data deletion instructions"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageFacebookDataDeletionInstructions />
      </div>
    </>
  );
}
