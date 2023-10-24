import React, { Component, Fragment } from "react";
import PageTitleFontBig from "./common/PageTitleFontBig";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageNavbar from "./LandingPageNavbar";
import ScrollDown from "./ScrollDown";
import ScrollTop from "./ScrollTop";

const f1 = "./img/desktop/features/f1.png";
const f2 = "./img/desktop/features/f2.png";
const f3 = "./img/desktop/features/f3.png";
const f4 = "./img/desktop/features/f4.png";
const f5 = "./img/desktop/features/f5.png";

export class LandingPageFeatures extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderBlock1 = () => {
    return (
      <div className="features-section-1">
        <h2 className="feature-title text-center">Close Leads Effectively</h2>
        <h3 className="text-center">
          <img
            src={f1}
            alt="Close Leads Effectively"
            className="feature1-img"
          />
        </h3>
        <p className="feature-para feature-1-para">
          Track leads closely, monitor their statuses and scale up your sales
          operations, one lead closure at a time
        </p>
      </div>
    );
  };

  renderBlock2 = () => {
    return (
      <div className="features-2-section">
        <h2 className="feature-title">Manage Organization and team</h2>
        <h3 className="text-center">
          <img
            src={f2}
            alt="Manage Organization and team"
            className="feature2-img"
          />
        </h3>
        <p className="feature-para feature-2-para">
          Manage your sales team effectively from a single point. Dominate
          allows you to track holidays, performance and accountability checks
        </p>
      </div>
    );
  };

  renderBlock3 = () => {
    return (
      <div>
        <div className="features-2-section">
          <h2 className="feature-title feature-3-name">
            Add multiple follow up &amp; meetings
          </h2>
          <h3 className="text-center">
            <img
              src={f3}
              alt=" Add multiple follow up &amp; meetings"
              className="feature3-img"
            />
          </h3>
          <p className="feature-para feature-3-para">
            Every major lead requires at least 8 follow ups, dominate allows you
            to track all follow ups and meetings for all clients in a timeline
            visualisation
          </p>
        </div>
      </div>
    );
  };

  renderBlock4 = () => {
    return (
      <div>
        <div className="features-2-section">
          <h2 className="feature-title ">Measure Performance</h2>
          <h3 className="text-center">
            <img src={f4} alt=" Measure Performance" className="feature4-img" />
          </h3>
          <p className="feature-para feature-4-para">
            Detailed reports, advanced metrics and in-depth analysis to help you
            get the important information, first hand.
          </p>
        </div>
      </div>
    );
  };

  renderBlock5 = () => {
    return (
      <div>
        <div className="features-2-section">
          <h2 className="feature-title ">Re-use assets and save time</h2>
          <h3 className="text-center">
            <img
              src={f5}
              alt=" Re-use assets and save time"
              className="feature4-img"
            />
          </h3>
          <p className="feature-para feature-5-para">
            Create email templates and use them across the sales team to improve
            chances of closure.
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <div className="background-section">
          <div className="background-section--feature ">
            <LandingPageNavbar activeLink={"features"} />
            <ScrollDown />
            <ScrollTop />
            <PageTitleFontBig
              text={"features"}
              extraClass={"features-page-title"}
            />
            <div className="features-section">
              {this.renderBlock1()}
              {this.renderBlock2()}
              {this.renderBlock3()}
              {this.renderBlock4()}
              {this.renderBlock5()}
            </div>
            <LandingPageFooter />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LandingPageFeatures;
