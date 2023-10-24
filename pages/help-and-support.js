import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageHelp from "../components/desktop/LandingPageHelp";

export default function help() {
  return (
    <>
      <HeadTag
        pageTitle="Help and Support"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/help-and-support`}
        ogTitle="Dominate ai help and support"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageHelp />
      </div>
    </>
  );
}
