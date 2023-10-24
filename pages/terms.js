import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageTerms from "../components/desktop/LandingPageTerms";

export default function terms() {
  return (
    <>
      <HeadTag
        pageTitle="Terms and conditions"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/terms`}
        ogTitle="Dominate ai terms and conditions"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageTerms />
      </div>
    </>
  );
}
