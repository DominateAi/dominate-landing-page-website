import React, { Component } from "react";
import LandingPageNavbar from "../LandingPageNavbar";
import LandingPageFooter from "../LandingPageFooter";
import ScrollTop from "../ScrollTop";
import ScrollDown from "../ScrollDown";

// const blueCheck = "/img/desktop/comparison/blue-check.svg";
// const whiteCheck = "/img/desktop/comparison/white-check.svg";
// const minuIcon = "/img/desktop/comparison/minu-icon.svg";

const blueCheck = "./img/desktop-dark-theme/icons/check-icon.png";
const whiteCheck = "./img/desktop-dark-theme/icons/check-icon.png";
const minuIcon = "./img/desktop-dark-theme/icons/minus-icon.png";

const tableData = [
  { name: "Track Leads", datacheck: blueCheck },
  { name: "Sending Proposals" },
  { name: "Sendings Estimates" },
  { name: "Revenue Forecast", datacheck: blueCheck },
  { name: "Lead Scoring", datacheck: blueCheck },
  { name: "Lead Enrichment", datacheck: blueCheck },
  { name: "Automated Workflows", datacheck: blueCheck },
  { name: "Mobile first", datacheck: blueCheck },
  // { name: "Organization Targets" },
  // { name: "Individual Targets" },
  // { name: "Linkedin Scraper" },
  // { name: "Qualified Leads" },
  // { name: "Track Recurring Revenue" },
  // { name: "Performance Scoreboard" },
];

const list2 = [
  "Nimble is a popular CRM tool and is quite lightweight but it has serious limitations due to being available only for Microsoft outlook users",
  "Dominate on the other has is quite feature rich and takes away a lot of the pain of a salesperson.",
  "Advanced features for better collaboration, ability to design proposals, track deals on Kanban make sales more efficient.",
  "In addition to this, the ability to track recurring deals and recurring revenue / retainers and use of big data to provide deep insights into the intent of leads adds tremendous value to the sales process.",
];

export class LandingPageComparisonNimble extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  /*============================================
       renderBlock1
==============================================*/
  renderBlock1 = () => {
    return (
      <div className="comprison-content-para">
        <div className="row justify-content-between mx-1  flex-nowrap align-items-start">
          <p className="comparison-para pr-60">
            Dominate is a new-gen, A.I driven sales team management software
            that takes CRMs to another level. Dominate is B2b-focused,
            salespeople-centric and built for startups from ground up. It
            enriches each stage of the sales funnel right from prospecting to
            tracking to closing deals.
          </p>
          <p className="comparison-para pl-3">
            Nimble is a lightweight CRM that works inside Microsoft outlook to
            organize leads, reminders, follow ups and meetings. It is only
            available in the Outlook environment.
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
                  <span>Nimble</span>
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
          <h2 className="comparison-title">Dominate &amp; Nimble</h2>
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

export default LandingPageComparisonNimble;
