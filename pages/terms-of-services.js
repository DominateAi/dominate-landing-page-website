import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageTermsOfServices from "../components/desktop/LandingPageTermsOfServices";

export default function termsOfService() {
  return (
    <>
      <HeadTag
        pageTitle="Terms Of Service"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/terms-of-services`}
        ogTitle="Dominate ai terms of service"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageTermsOfServices />
      </div>
    </>
  );
}
