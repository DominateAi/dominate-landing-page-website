import React, { Component } from "react";
import LandingPageMobileNavbar from "./LandingPageMobileNavbar";
import LandingPageMobileFooter from "./LandingPageMobileFooter";

export class LandingPageMobileFeatures extends Component {
  renderBlock1 = () => {
    return (
      <div className="features-mobile-block-1-section">
        <figure>
          <img
            src={"./img/mobile/features/img1.gif"}
            alt="features"
            className="features-mobile-img1"
          />
        </figure>
        <div className="features-text-block">
          <h2 className="features-mobile-normal-text">
            track{" "}
            <span className="features-mobile-italic-text">
              real-time status
            </span>{" "}
            of your leads
          </h2>
          <p className="features-mobile-regular-text">
            Dominate provides a highly powerful and well organised way to
            effectively manage your leads without missing follow ups
          </p>
        </div>
      </div>
    );
  };
  renderBlock2 = () => {
    return (
      <div className="features-mobile-block-1-section">
        <figure>
          <img
            src={"./img/mobile/features/img2.gif"}
            alt="features"
            className="features-mobile-img2"
          />
        </figure>
        <div className="features-text-block">
          <h2 className="features-mobile-italic-text">
            deep insights{" "}
            <span className=" features-mobile-normal-text">
              for your sales team
            </span>{" "}
          </h2>
          <p className="features-mobile-regular-text">
            With Dominate’s A.I engine, not only can you better predict lead
            closures and forecast future revenue but also gain deeper insights
            into target setting for you sales team
          </p>
        </div>
      </div>
    );
  };

  renderBlock3 = () => {
    return (
      <div className="features-mobile-block-1-section">
        <figure>
          <img
            src={"./img/mobile/features/img3.gif"}
            alt="features"
            className="features-mobile-img3"
          />
        </figure>
        <div className="features-text-block">
          <h2 className=" features-mobile-normal-text">
            advanced{" "}
            <span className=" features-mobile-italic-text">
              visualization &nbsp; tools
            </span>{" "}
          </h2>
          <p className="features-mobile-regular-text">
            Advanced charts, bar graphs and sales funnels to help you visualise
            the lead pipelines and stages of interaction
          </p>
        </div>
      </div>
    );
  };

  renderBlock4 = () => {
    return (
      <div className="features-mobile-block-1-section">
        <figure>
          <img
            src={"./img/mobile/features/img4.gif"}
            alt="features"
            className="features-mobile-img4"
          />
        </figure>
        <div className="features-text-block">
          <h2 className=" features-mobile-italic-text">
            add a lead{" "}
            <span className="features-mobile-normal-text">on the go</span>{" "}
          </h2>
          <p className="features-mobile-regular-text">
            Add leads into your account or simply import from csv files to save
            time
          </p>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="mobile-background-color">
        <LandingPageMobileNavbar />
        <div className="mobile-features-section">
          <h2 className="mobile-features-haeding">Our Features</h2>
          <h4 className="mobile-features-heading-title">
            what dominate has <br />
            to offer
          </h4>
          <div className="mobile-features-block-section">
            {this.renderBlock1()}
            {this.renderBlock2()}
            {this.renderBlock3()}
            {this.renderBlock4()}
          </div>
        </div>
        <LandingPageMobileFooter />
      </div>
    );
  }
}

export default LandingPageMobileFeatures;
