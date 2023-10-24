import React from "react";

const img1 = "./img/mobile-dark-theme/home/sales-center.png";
const img2 = "./img/mobile-dark-theme/home/dashboard.png";
const img3 = "./img/mobile-dark-theme/home/member-card.png";
const icon1 = "./img/mobile-dark-theme/home/icon1.png";
const icon2 = "./img/mobile-dark-theme/home/icon2.png";
const icon3 = "./img/mobile-dark-theme/home/icon3.png";

export default function LandingPageHomeMobileFeatureNew() {
  const renderCardOne = () => {
    return (
      <div className="text-left">
        <div className="new-features-card-one-text-div">
          <img src={icon1} alt="" className="new-features-icon1" />
          <h5 className="mobile-featues-title mobile-featues-title--features">
            Account based focus
            <span className="mobile-featues-span-text">1</span>
          </h5>
        </div>
        <img src={img1} alt="" className="new-features-img1" />
      </div>
    );
  };

  const renderCardTwo = () => {
    return (
      <>
        <div className="new-features-card-two-text-div">
          <img src={icon2} alt="" className="new-features-icon2" />
          <h5 className="mobile-featues-title mobile-featues-title--features-2">
            Simplify Sales, Amplify <br />
            Business.
            <span className="mobile-featues-span-text mobile-featues-span-text--2">
              2
            </span>
          </h5>
        </div>
        <div className="text-right">
          <img src={img2} alt="" className="new-features-img2" />
        </div>{" "}
      </>
    );
  };

  const renderCardThree = () => {
    return (
      <>
        <div className="new-features-card-three-text-div">
          <img src={icon3} alt="" className="new-features-icon3" />
          <h5 className="mobile-featues-title mobile-featues-title--features-3">
            Focused on Collaboration
            <span className="mobile-featues-span-text mobile-featues-span-text--3">
              3
            </span>
          </h5>
        </div>
        <div className="text-right">
          <img src={img3} alt="" className="new-features-img3" />
        </div>{" "}
      </>
    );
  };

  return (
    <>
      {renderCardOne()}
      {renderCardTwo()}
      {renderCardThree()}
    </>
  );
}
