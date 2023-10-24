import React from "react";
import HeadTag from "../components/common/HeadTag";
import LandingPageTutorials from "../components/desktop/LandingPageTutorials";

export default function tutorials() {
  return (
    <>
      <HeadTag
        pageTitle="Tutorials"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/tutorials`}
        ogTitle="Dominate ai usage tutorials"
      />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageTutorials />
      </div>
    </>
  );
}
