import React from "react";
import Link from "next/link";
import LandingPageContact from "./LandingPageContact";

const linksArray = [
  {
    link: "/pricing",
    title: "Pricing",
  },
  {
    link: "/features",
    title: "Features",
  },
  {
    link: "/help-and-support",
    title: "Help and Support",
  },
  {
    link: "/oauth",
    title: "OAuth",
  },
  {
    link: "/privacy",
    title: "Privacy Policy",
  },
  {
    link: "/terms",
    title: "Terms and Conditions",
  },
  {
    link: "/facebook-data-deletion-instructions",
    title: "Facebook Data Deletion Instructions",
  },
  {
    link: "/terms-of-services",
    title: "Terms Of Service",
  },
  {
    link: "/cancellation-and-refund",
    title: "Cancellation and Refund",
  },
];

const resourcesAndToolsArray = [
  {
    link: "/tutorials",
    title: "Tutorials",
  },
  {
    link: "/blog",
    title: "Blog",
  },
  {
    link: "/ebooks",
    title: "Ebooks",
  },
  {
    link: "/email-finder",
    title: "Email finder",
  },
];

const comparisonArrayOne = [
  {
    link: "/dominate-vs-pipedrive",
    title: "Pipedrive",
  },
  {
    link: "/dominate-vs-salesflare",
    title: "Salesflare",
  },
  {
    link: "/dominate-vs-closeio",
    title: "Close.IO",
  },
  {
    link: "/dominate-vs-zendesksell",
    title: "Zendesk Sell",
  },
  {
    link: "/dominate-vs-affinity",
    title: "Affinity.CO",
  },
  {
    link: "/dominate-vs-apollo",
    title: "Apollo.IO",
  },
];

const comparisonArrayTwo = [
  {
    link: "/dominate-vs-prospect",
    title: "Prospect.IO",
  },
  {
    link: "/dominate-vs-clari",
    title: "Clari",
  },
  {
    link: "/dominate-vs-freshsales",
    title: "Freshsales",
  },
  {
    link: "/dominate-vs-zohocrm",
    title: "Zoho CRM",
  },
  {
    link: "/dominate-vs-insightly",
    title: "Insightly",
  },
  {
    link: "/dominate-vs-bitrix",
    title: "Bitrix24",
  },
  {
    link: "/dominate-vs-salesforce",
    title: "Salesforce",
  },
];
const comparisonArrayThree = [
  {
    link: "/dominate-vs-copper",
    title: "Copper CRM",
  },
  {
    link: "/dominate-vs-hunterio",
    title: "Hunter.IO",
  },
  {
    link: "/dominate-vs-easyleadz",
    title: "EasyLeadz",
  },
  {
    link: "/dominate-vs-bombora",
    title: "Bombora",
  },
  {
    link: "/dominate-vs-proposify",
    title: "Proposify",
  },
  {
    link: "/clearbit",
    title: "Clearbit",
  },
];

const comparisonArrayFour = [
  {
    link: "/dominate-vs-alore",
    title: "Alore.IO",
  },
  {
    link: "/dominate-vs-wiza",
    title: "Wiza",
  },
  {
    link: "/dominate-vs-nimble",
    title: "Nimble",
  },
  {
    link: "/dominate-vs-hubspot",
    title: "Hubspot",
  },
  {
    link: "/dominate-vs-skrapp",
    title: "Skrapp.IO",
  },
  {
    link: "/dominate-vs-lusha",
    title: "Lusha",
  },
];
const LandingPageFooter = () => {
  return (
    <footer className="footer-background">
      <div className="footer-section mx-0 row flex-nowrap">
        <div className="footer-block-1">
          <Link href="/">
            <a>
              <img
                // src="/img/desktop/new/new-dominate-logo.svg"
                src="./img/desktop-dark-theme/logo/dominate-logo.png"
                alt="dominate logo"
                className="footer-logo-img"
              />
            </a>
          </Link>
          <p className="footer-para">
            {/*A design agency shaping ideas into products. We help startups and
            enterprises invent, build and launch their next project.*/}
            Enabling sales teams across the world to focus on what they should
            focus on -
          </p>
          <p className="footer-para-span">Sales</p>.
        </div>
        {/* footer block 2 */}
        <div className="footer-block-2">
          <h2 className="footer-title">Links</h2>
          {linksArray.map((data, index) => (
            <div key={index}>
              <Link href={data.link}>
                <a>
                  <h5 className="footer-link">{data.title}</h5>
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* footer block 3 */}
        <div className="footer-block-3">
          <h2 className="footer-title">Resources &amp; tools</h2>
          {resourcesAndToolsArray.map((data, index) => (
            <div key={index}>
              <Link href={data.link}>
                <a>
                  <h5 className="footer-link">{data.title}</h5>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="footer-block-4">
          <h2 className="footer-title">Comparison with</h2>
          <div className="row justify-content-between mx-0 flex-nowrap">
            <div className="column width-div ">
              {comparisonArrayOne.map((data, index) => (
                <div key={index}>
                  <Link href={data.link}>
                    <a>
                      <h5 className="footer-link">{data.title}</h5>
                    </a>
                  </Link>
                </div>
              ))}
            </div>

            <div className="column width-div">
              {comparisonArrayTwo.map((data, index) => (
                <div key={index}>
                  <Link href={data.link}>
                    <a>
                      <h5 className="footer-link">{data.title}</h5>
                    </a>
                  </Link>
                </div>
              ))}
            </div>

            <div className="column width-div">
              {comparisonArrayThree.map((data, index) => (
                <div key={index}>
                  <Link href={data.link}>
                    <a>
                      <h5 className="footer-link">{data.title}</h5>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="column width-div">
              {comparisonArrayFour.map((data, index) => (
                <div key={index}>
                  <Link href={data.link}>
                    <a>
                      <h5 className="footer-link">{data.title}</h5>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-subscribe-div">
        <h2 className="text-center footer-title mb-30">
          Subscribe to our newsletter
        </h2>
        <LandingPageContact />
      </div>
      <div className="footer-social-div">
        <div className="row justify-content-center">
          {/* instagram */}
          <a
            href="https://www.instagram.com/dominate.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="footer-social-text footer-social-text2">
              Instagram
            </h3>
          </a>
          {/* facebook */}
          <h3 className="footer-social-text footer-social-text2">Facebook</h3>
          {/* linkedIn */}
          <a
            href="https://www.linkedin.com/company/dominate-ai/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="footer-social-text">LinkedIn</h3>
          </a>
          {/* twitter */}
          {/* <h3 className="footer-social-text">Twitter</h3> */}
        </div>
      </div>
      <div className="footer-copy-div text-center">
        {/* <div className="incubated_logo_section">
          <p>Incubated By</p>
          <img
            src={"img/desktop/footer/ti_logo.png"}
            alt=""
          />
        </div> */}
        <span className="footer-copy-text">
          <i className="footer-copy-text__symbol">&#169;</i> Copyrighted all
          rights reserved 2024
        </span>
      </div>
      <div className="row justify-content-center align-items-center footer--end-div">
        <h5 className="devlop-text font-dark-blue">
          <img
            // src={"/img/desktop/new/new-dev-img.svg"}
            src={"./img/desktop-dark-theme/icons/dev-icon.png"}
            alt="tool"
            className="dev-img"
          />
          Developed by
        </h5>
        <a href="https://myrl.tech/" target="_blank" rel="noopener noreferrer">
          <h5 className="devlop-text font-link"> Myrl Tech </h5>
        </a>
        <h5 className="devlop-text font-dark-blue">| For queries contact</h5>
        <h5 className="devlop-text font-link">
          <a href="mailto:akhil.sharma@myrl.tech">Akhil.sharma@myrl.tech</a>
        </h5>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
