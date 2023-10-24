import React from "react";
import Link from "next/link";

export default function LandingPageHomeMobileBlogLinkFold() {
  return (
    <div className="dominate-mobile-blog-link-fold">
      <div className="dominate-mobile-blog-link-fold__img">
        {/* <img src="/img/mobile/blog/blog-fold-laptop.svg" alt="" /> */}
        <img src="./img/mobile-dark-theme/blog/blog-main-img.png" alt="" />
      </div>
      <h3 className="dominate-mobile-blog-link-fold__title">
        Check out our blogs for latest News
        <br /> and Updates
      </h3>

      {/* <div className="dominate-mobile-blog-link-fold__img">
        <img src="/img/mobile/blog/blog-fold-laptop.svg" alt="" />
      </div> */}

      <div className="row mx-0 justify-content-center">
        <Link href="/blog">
          <a>
            <div className="dominate-mobile-blog-link-fold-btn">
              Go to Blogs
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
