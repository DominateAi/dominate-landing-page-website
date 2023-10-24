import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageHomeMobileContact from "../components/mobile/LandingPageHomeMobileContact";

export default function contact() {
  return (
    <>
      <HeadTag
        pageTitle="Contact"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`}
        ogTitle="Dominate ai contact"
      />

      <div className="d-block d-md-none">
        <LandingPageHomeMobileContact />
      </div>
    </>
  );
}
