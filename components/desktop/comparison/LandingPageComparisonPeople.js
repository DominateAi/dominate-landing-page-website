import React, { Component } from "react";
import LandingPageNavbar from "../LandingPageNavbar";
import LandingPageFooter from "../LandingPageFooter";
import ScrollDown from "../ScrollDown";
import ScrollTop from "../ScrollTop";
const list = [
  { name: "Set Targets" },
  { name: "AI to optimize team targets" },
  { name: "AI to manage Calendar" },
  { name: "Advanced Visualisations" },
  { name: "Revenue Forecast" },
  { name: "Predict Closure Probability" },
  { name: "Mobile first" },
  { name: "Deep Integrations" },
];
const list2 = [1, 2, 3, 4];

export class LandingPageComparisonPeople extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  renderBlock1 = () => {
    return (
      <>
        <div className="row flex-nowrap justify-content-between mx-1 align-items-center">
          <p className="comparison-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore m agna aliqua. Ut enim
            ad minim veniam, quis nostrud exe rcitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in vol uptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="comparison-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore m agna aliqua. Ut enim
            ad minim veniam, quis nostrud exe rcitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in vol uptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="row ">
          <div className="com-section-1 com-section-1--people">
            {list.map((val, index) => (
              <div key={index}>
                <h2 className="tabel-title ">{val.name}</h2>
              </div>
            ))}
          </div>
          <div className="com-section-2">
            <img
              src={"./img/desktop/comparison/p1.svg"}
              alt="dominate"
              className="pipedriver-img"
            />
            <h4 className="table-comparison-title">Dominate</h4>
          </div>
          <div className="com-section-3">
            <img
              src={"./img/desktop/comparison/people.svg"}
              alt="close.io"
              className=" affinity-img"
            />
            <h4 className="table-comparison-title table-comparison-title--2">
              People.IO
            </h4>
          </div>
        </div>
      </>
    );
  };

  renderBlock2 = () => {
    return (
      <div className="row mx-0 align-items-start conclusion-outer-div">
        <div className="col-5 p-0">
          <img
            src={"./img/mobile-dark-theme/comparison/conclusion.png"}
            alt="conclusion"
            className="conclusion-img"
          />
        </div>
        <div className="col-7 pr-0 conclusion-content-div">
          <h3 className="comparison-section-3-title">Conclusion</h3>
          <div className="row flex-nowrap justify-content-between align-items-start mx-0 conclusion-section">
            <div>
              {list2.map((val, index) => (
                <div key={index}>
                  <p className="comparison-text">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="background-section background-section--comparison">
        <div className="comparison-navbar-section">
          <LandingPageNavbar />
        </div>
        <ScrollDown />
        <ScrollTop />
        <div className="comparsion-title-section">
          <h2 className="comparison-title">Dominate &amp; People.IO</h2>
          <h2 className="comparison-title"> Comparison</h2>
        </div>
        <div className="comprison-content-para">
          {this.renderBlock1()}
          {this.renderBlock2()}
        </div>
        <LandingPageFooter />
      </div>
    );
  }
}

export default LandingPageComparisonPeople;
