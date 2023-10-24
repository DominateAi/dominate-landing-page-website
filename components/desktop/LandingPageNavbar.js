import React from "react";
import Link from "next/link";

// const logo = "/img/desktop/new/new-dominate-logo.svg";
const logo = "./img/desktop-dark-theme/logo/dominate-logo.png";

const LandingPageNavbar = ({ activeLink }) => {
  const onClickLoginSignupHandler = () => {
    //variables
    // var LastReportGenerated = "Jul 11 2013",
    var baseDomain = ".dominate.ai";
    var expireAfter = new Date();

    //setting up  cookie expire date after a week
    expireAfter.setDate(expireAfter.getDate() + 1);

    //now setup cookie
    document.cookie =
      "startFreeTrail=" +
      JSON.stringify(false) +
      "; domain=" +
      baseDomain +
      "; expires=" +
      expireAfter +
      "; path=/";
  };

  return (
    <nav className="navbar-section row justify-content-between align-items-center">
      <Link href="/">
        <a>
          <img
            onClick={() =>
              (window.location.href =
                "https://dominateai.github.io/dominate-landing-page-website")
            }
            src={logo}
            alt="dominate logo"
            className="navbar-logo"
          />
        </a>
      </Link>
      <ul className="row justify-content-between align-items-center">
        <li>
          <Link href="/">
            <a>
              <span
                onClick={() =>
                  (window.location.href =
                    "https://dominateai.github.io/dominate-landing-page-website")
                }
                className={
                  activeLink === "home"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                home
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <a>
              <span
                className={
                  activeLink === "pricing"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                pricing
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <a>
              <span
                className={
                  activeLink === "features"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                Features
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>
              <span
                className={
                  activeLink === "blogs"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                Blog
              </span>
            </a>
          </Link>
        </li>
        <a
          href="https://calendly.com/akhil-dominate/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="d-none"
        >
          <li className="navbar-btn">
            <span>Book a Demo</span>

            {/* <LandingPageNavbarmodal /> */}
          </li>
        </a>
        {/*<li className="navbar-btn navbar-btn--login">
      <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
        <span>Start free trial</span>
      </a>
        </li>*/}
        <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
          <li
            onClick={onClickLoginSignupHandler}
            className="navbar-btn navbar-btn--login pr-0"
          >
            <span>Login / Sign Up</span>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default LandingPageNavbar;
