import React from "react";
import { Fragment } from "react";
//const img1 = "/img/desktop/home/l1.svg";
//const img2 = "/img/desktop/home/l2.png";
//const img3 = "/img/desktop/home/l3.svg";
//const img4 = "/img/desktop/home/l4.svg";
//const img5 = "/img/desktop/home/l5.svg";
//const img6 = "/img/desktop/home/l6.png";
//const img7 = "/img/desktop/home/l7.svg";
// const img1 = "/img/desktop/home/slack.svg";
// const img2 = "/img/desktop/home/adobe.svg";
// const img3 = "/img/desktop/home/zapier.svg";
// const img4 = "/img/desktop/home/grammarly.svg";
// const img5 = "/img/desktop/home/strava.svg";
// const img6 = "/img/desktop/home/notion.svg";
// const img7 = "/img/desktop/home/figma.svg";
// const img8 = "/img/desktop/home/airtable.svg";
// const img1 = "/img/desktop-dark-theme/home/company-logo/slack.png";
// const img2 = "/img/desktop-dark-theme/home/company-logo/adobe.png";
// const img3 = "/img/desktop-dark-theme/home/company-logo/zapier.png";
// const img4 = "/img/desktop-dark-theme/home/company-logo/grammarly.png";
// const img5 = "/img/desktop-dark-theme/home/company-logo/strava.png";
// const img6 = "/img/desktop-dark-theme/home/company-logo/notion.svg";
// const img7 = "/img/desktop-dark-theme/home/company-logo/figma.png";
// const img8 = "/img/desktop-dark-theme/home/company-logo/airtable.png";
const img1 = "./img/desktop-dark-theme/home/company-logo/thoughtwork.svg";
const img2 = "./img/desktop-dark-theme/home/company-logo/ma.svg";
const img3 = "./img/desktop-dark-theme/home/company-logo/randstad.svg";
const img4 = "./img/desktop-dark-theme/home/company-logo/avanade.svg";
const img5 = "./img/desktop-dark-theme/home/company-logo/sapient.svg";
const img6 = "./img/desktop-dark-theme/home/company-logo/dynatrace.svg";
const img7 = "./img/desktop-dark-theme/home/company-logo/mindtree.svg";
const img8 = "./img/desktop-dark-theme/home/company-logo/terralogic.svg";

const logoArray = [
  {
    imgPath: img1,
    imgName: "",
    imgClass: "home-fod2-logo1",
  },
  {
    imgPath: img2,
    imgName: "",
    imgClass: "home-fod2-logo2",
  },
  {
    imgPath: img3,
    imgName: "",
    imgClass: "home-fod2-logo3",
  },
  {
    imgPath: img4,
    imgName: "",
    imgClass: "home-fod2-logo4",
  },
  {
    imgPath: img5,
    imgName: "",
    imgClass: "home-fod2-logo5",
  },
  {
    imgPath: img6,
    imgName: "",
    imgClass: "home-fod2-logo6",
  },
  {
    imgPath: img7,
    imgName: "",
    imgClass: "home-fod2-logo7",
  },
  {
    imgPath: img8,
    imgName: "",
    imgClass: "home-fod2-logo8",
  },
];
export default function LandingPageNewHomeFoldOne() {
  const onClickStartFreeTrialHandler = () => {
    //variables
    // var LastReportGenerated = "Jul 11 2013",
    var baseDomain = ".dominate.ai";
    var expireAfter = new Date();

    //setting up  cookie expire date after a week
    expireAfter.setDate(expireAfter.getDate() + 1);

    //now setup cookie
    document.cookie =
      "startFreeTrail=" +
      JSON.stringify(true) +
      "; domain=" +
      baseDomain +
      "; expires=" +
      expireAfter +
      "; path=/";
  };

  return (
    <>
      <div className="row mx-0 flex-nowrap justify-content-between align-items-center new-home-fold-one">
        <div className="new-home-fold-one-left-div">
          {/* <h2 className="font-48-mulish blue-gradient-text">For Startups.</h2>
          <h1 className="title-text">
            Manage <br />
            High Ticket <br />
            B2b Sales.
          </h1> */}
          <h2 className="font-24-nunito-bold blue-gradient-text">
            More than just a CRM.
          </h2>
          <p className="font-64-poppins-extrabold new-home-fold-one-left-text-1">
            The best<span> B2b Sales</span> Tool{" "}
          </p>
          <p className="pt-15 new-home-fold-one-left-text-2 ">
            {/* For Tech Consultancy &amp; Services Companies. */}
            For Tech Founders.
          </p>
          <div className="row mx-0 pt-40">
            <a
              href={process.env.NEXT_PUBLIC_LOGIN_URL}
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <div
                onClick={onClickStartFreeTrialHandler}
                className="navbar-btn navbar-btn--new-home-fold-one"
              >
                Start Free Trial{" "}
              </div>
            </a>
            <a
              href="https://calendly.com/akhil-dominate/demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="book-a-demo-btn">
                <span>Book a Demo</span>

                {/* <LandingPageNavbarmodal /> */}
              </div>
            </a>
          </div>
        </div>
        <div className="new-home-fold-one-img-div">
          <img
            //src={"/img/desktop/home/new-home-fold-one.png"}
            // src={"/img/desktop/home/home-fold-one-img-new.png"}
            src={"./img/desktop-dark-theme/home/home-fold-one-new.png"}
            alt="manage hight ticket"
            className="new-home-fold-one-img"
          />
        </div>
      </div>
      <h4 className="text-center companies-that-trust-text">
        {/*COMPANIES THAT TRUST US*/}
        TRUSTED BY
      </h4>
      <div className="row justify-content-center align-items-center pb-43 home-fod2-logo-block">
        {logoArray.map((data, index) => (
          <Fragment key={index}>
            <img
              src={data.imgPath}
              alt={data.imgName}
              className={data.imgClass}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}
