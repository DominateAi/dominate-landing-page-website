import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageOuth from "../components/desktop/LandingPageOuth";

export default function oauth() {
  return (
    <>
      <HeadTag
        pageTitle="OAuth"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/oauth`}
        ogTitle="Dominate ai oauth"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageOuth />
      </div>
    </>
  );
}
