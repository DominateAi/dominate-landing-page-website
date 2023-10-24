import React, { Component } from "react";
import LandingPageNavbar from "../LandingPageNavbar";
import LandingPageFooter from "../LandingPageFooter";
import ScrollDown from "../ScrollDown";
import ScrollTop from "../ScrollTop";

// const blueCheck = "/img/desktop/comparison/blue-check.svg";
// const whiteCheck = "/img/desktop/comparison/white-check.svg";
// const minuIcon = "/img/desktop/comparison/minu-icon.svg";

const blueCheck = "./img/desktop-dark-theme/icons/check-icon.png";
const whiteCheck = "./img/desktop-dark-theme/icons/check-icon.png";
const minuIcon = "./img/desktop-dark-theme/icons/minus-icon.png";

const tableData = [
  { name: "Track Leads" },
  { name: "Sending Proposals" },
  { name: "Sendings Estimates" },
  { name: "Revenue Forecast" },
  { name: "Lead Scoring", datacheck: blueCheck },
  { name: "Lead Enrichment" },
  { name: "Automated Workflows", datacheck: blueCheck },
  { name: "Mobile first" },
  // { name: "Organization Targets" },
  // { name: "Individual Targets" },
  // { name: "Linkedin Scraper" },
  // { name: "Qualified Leads" },
  // { name: "Track Recurring Revenue" ,datacheck: blueCheck},
  // { name: "Performance Scoreboard" },
];

const list2 = [
  "Alore is primarily a list builder and sales and marketing outreach tool.",
  "Dominate on the other hand is not just a list builder but also a CRM and data enrichment platform.",
  "With the help of dominate, sales people can not only build lists but track leads, deals and accounts.",
  "Dominate enables you to track recurring deals and revenue, forecast revenue and provides intent based leads that are interested in your product or service.",
];

export class LandingPageComparisonAlore extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  /*============================================
       renderBlock1
==============================================*/
  renderBlock1 = () => {
    return (
      <div className="comprison-content-para">
        <div className="row justify-content-between mx-1 align-items-start flex-nowrap">
          <p className="comparison-para pr-60">
            Dominate is a new-gen, A.I driven sales team management software
            that takes CRMs to another level. Dominate is B2b-focused,
            salespeople-centric and built for startups from ground up. It
            enriches each stage of the sales funnel right from prospecting to
            tracking to closing deals.
          </p>
          <p className="comparison-para pl-3">
            Alore.io consolidates growth tech stack and offers features needed
            to run growth functions at scale. It consists of email automation,
            sales list building, rule based flow builder, team performance and
            sales performance analytics.
          </p>
        </div>
      </div>
    );
  };

  /*============================================
       renderBlock2
==============================================*/
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
            <div className="conclusion-text-div-alore">
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

  /*============================================
       table
==============================================*/
  renderBlockTable = () => {
    return (
      <div className="comparison-table-main-div">
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="comparison-bg-div">
                  <span>Dominate</span>
                </th>
                <th></th>
                <th className="comparison-border-div">
                  <span>Alore</span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="comparison-table">
          <table>
            <tbody className="comparison-table-body">
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>
                    <img src={whiteCheck} alt="comparison check" />
                  </td>
                  <td></td>
                  <td>
                    {data.datacheck ? (
                      <img src={data.datacheck} alt="comparison check" />
                    ) : (
                      <img
                        src={minuIcon}
                        alt="comparison check"
                        className="comparison-minus-icon"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  /*============================================
     render
==============================================*/
  render() {
    return (
      <div className="background-section background-section--comparison">
        <div className="comparison-navbar-section">
          <LandingPageNavbar />
        </div>
        <ScrollDown />
        <ScrollTop />
        <div className="comparsion-title-section">
          <h2 className="comparison-title">Dominate &amp; Alore.io</h2>
          <h2 className="comparison-title-2"> Comparison</h2>
        </div>
        {this.renderBlock1()}
        {this.renderBlockTable()}
        {this.renderBlock2()}
        <LandingPageFooter />
      </div>
    );
  }
}

export default LandingPageComparisonAlore;
