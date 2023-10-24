import React from "react";
import { useRouter } from "next/router";

export default function LandingPageMobileFooter() {
  const router = useRouter();

  const renderDesktopSite = () => {
    document.getElementsByTagName("meta")["viewport"].content = "width=1297";
    router.push("/");
  };

  return (
    <footer className="mobile-footer-section">
      <div className="footer-icon-section">
        {/* instagram */}
        <a
          href="https://www.instagram.com/dominate.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram mobile-footer-icon" />
        </a>
        {/* facebook */}
        <i className="fa fa-facebook mobile-footer-icon" />
        {/* linkedIn */}
        <a
          href="https://www.linkedin.com/company/dominate-ai/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin mobile-footer-icon" />
        </a>
        {/* twitter */}
        {/* <i className="fa fa-twitter mobile-footer-icon" /> */}
      </div>

      <h2 className="mobile-dominate-text">
        &#169; Dominate.ai | All rights reserved 2021
      </h2>
      <h2 className="footer-switch-text" onClick={renderDesktopSite}>
        Switch to desktop website
      </h2>
      <div className="row justify-content-center align-items-center pt-16">
        <img
          src={"./img/mobile/home/dev.svg"}
          alt="dev"
          className="mobile-dev-img"
        />
        <h5 className="mobile-company-name-text">&nbsp;&nbsp;Developed by </h5>
        <a href="https://myrl.tech/" target="_blank" rel="noopener noreferrer">
          <h5 className="mobile-company-name-text ml-2">
            <span>Myrl Tech</span>
          </h5>
        </a>
      </div>
      <h5 className="mobile-company-name-text pt-16 pb-18">
        For queries contact{" "}
        <span>
          <a href="mailto:akhil.sharma@myrl.tech">Akhil.sharma@myrl.tech</a>
        </span>
      </h5>
    </footer>
  );
}
