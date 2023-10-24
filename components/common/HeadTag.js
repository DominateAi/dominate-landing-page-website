import React from "react";
import Head from "next/head";

export default function HeadTag({
  pageTitle,
  pageDescription,
  keywords,
  canonical,
  ogType,
  ogImage,
  ogTitle,
  ogDesription,
  ogSiteName,
}) {
  return (
    <Head>
      {/* title */}
      <title>{pageTitle}</title>

      {/* description */}
      <meta name="description" content={pageDescription} />

      {/* keywords */}
      <meta name="keywords" content={keywords} />

      {/* robots */}
      <meta name="robots" content="index,follow" />

      {/* canonical */}
      <link rel="canonical" href={canonical} />

      {/* og tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={ogSiteName} />
    </Head>
  );
}

HeadTag.defaultProps = {
  pageTitle: "Dominate Ai | Tool For Crushing Your Sales Quotas",
  pageDescription:
    "The B2b sales tool of choice for startups that crush their quotas, every quarter. Close more deals by staying organized and updated. Leave your competition in the dust.",
  keywords:
    "dominate, dominate ai, b2b CRM, startup CRM, sales tool, sales pipeline, sales pipeline management, artificial intelligence CRM, CRM automation, b2b sales CRM, startup sales CRM, CRM tools, best CRM software, indian CRM software, free CRM software, CRM pipeline, new CRM tool",
  canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/`,
  ogType: "website",
  // ogImage:
  //   "https://res.cloudinary.com/dd4krpktw/image/upload/v1622208096/meta-og-image/meta-og-img-dominate_cxddav.png",
  ogImage:
    "https://res.cloudinary.com/dd4krpktw/image/upload/v1635857156/meta-og-image/meta-og-img-dominate-dark-ui_eclmm0.png",
  ogTitle: "Dominate Ai | Tool For Crushing Your Sales Quotas",
  ogDesription:
    "The B2b sales tool of choice for startups that crush their quotas, every quarter. Close more deals by staying organized and updated. Leave your competition in the dust.",
  ogSiteName: "www.dominate.ai",
};
