import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageEBook from "../components/desktop/LandingPageEBook";

export default function ebook() {
  return (
    <>
      <HeadTag
        pageTitle="Ebooks"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/ebooks`}
        ogTitle="Dominate ai ebooks"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageEBook />
      </div>
    </>
  );
}
