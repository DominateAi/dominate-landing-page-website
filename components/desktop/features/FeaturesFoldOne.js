import React from "react";
import LandingPageNavbar from "../LandingPageNavbar";

//img
// const icon1 = "/img/desktop/features/new/icon1.svg";
// const icon2 = "/img/desktop/features/new/icon2.svg";
// const icon3 = "/img/desktop/features/new/icon3.svg";
const icon1 = "./img/desktop-dark-theme/features/icon1.png";
const icon2 = "./img/desktop-dark-theme/features/icon2.png";
const icon3 = "./img/desktop-dark-theme/features/icon3.png";

// const img1 = "/img/desktop/features/new/features-fold-one-img.png";
const img1 = "./img/desktop-dark-theme/features/fold-one.png";

//array
const featuresArrayOne = [
  {
    imgPath: icon1,
    text: "Focus on Revenue",
    para: "Collaborate with your team to track accounts, deals and leads and the inflow they generate.",
  },
  {
    imgPath: icon2,
    text: "Visualize Pipelines",
    para: "Custom pipelines with custom fields for both leads and deals enable you to set tools around your processes.",
  },
  {
    imgPath: icon3,
    text: "Track and Optimize",
    para: "Understand why deals close and why they don't, generate granular insights and optimize your processes.",
  },
];

/*=========================================
                render
=========================================*/
export default function FeaturesFoldOne() {
  return (
    <div>
      <div className="new-features-fold-one-outer-div">
        <LandingPageNavbar activeLink="features" />
        <div className="new-features-fold-one-inner-div">
          <h4 className="new-features-fold-one-text-one blue-gradient-text">
            Features
          </h4>
          <h2 className="font-48-poppins-extrabold new-features-fold-one-text-two pt-25">
            What we are offering
          </h2>
          <p className="font-24-nunito-light pt-25 new-features-fold-one-text-three">
            We've kept remote B2b startup sales teams at the centre of our
            product and <br /> only built features that helps them dominate
            their industry.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_LOGIN_URL}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <div className="navbar-btn navbar-btn--new-home-fold-one mt-60">
              Start Free Trial{" "}
            </div>
          </a>
          <div className="new-features-fold-one-img-div">
            <img src={img1} alt="" className="new-features-fold-one-img" />
          </div>
        </div>
        <div className="new-features-fold-one-content-bg-div">
          <div className="new-features-fold-one-content-div">
            {/* <h2 className="font-48-poppins-extrabold text-center new-features-fold-one-text-four">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </h2> */}
            <h2 className="new-features-fold-one-text-one new-features-fold-one-text-one--card-text-one text-center">
              Helping Remote Sales Teams crush their quotas.
            </h2>
            <div className="row mx-0 align-items-start justiy-content-center flex-nowrap new-features-fold-one-content-card-outer-div">
              {featuresArrayOne.map((data, index) => (
                <div
                  className={
                    index === 2
                      ? "new-features-fold-one-content-card text-center mr-0"
                      : "new-features-fold-one-content-card text-center"
                  }
                  key={index}
                >
                  <div className="new-features-fold-one-content-card-img-div">
                    <img
                      src={data.imgPath}
                      alt={data.text}
                      className={
                        index === 1
                          ? "new-features-fold-one-content-card-img-2"
                          : index === 2
                          ? "new-features-fold-one-content-card-img-3"
                          : "new-features-fold-one-content-card-img"
                      }
                    />
                  </div>
                  <h3 className="new-features-fold-one-text-one new-features-fold-one-text-one--card-text-one">
                    {data.text}
                  </h3>
                  <p className="font-24-nunito-light new-features-fold-one-text-one--card-text-two pt-60">
                    {data.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
