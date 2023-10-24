import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageEmailFinder from "../components/desktop/LandingPageEmailFinder";

export default function emailFinder() {
  return (
    <>
      <HeadTag
        pageTitle="Email Finder"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/email-finder`}
        ogTitle="Dominate ai email finder"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageEmailFinder />
      </div>
    </>
  );
}
