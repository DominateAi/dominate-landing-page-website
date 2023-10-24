import React, { Component } from "react";
import LandingPageMobileNavbar from "../LandingPageMobileNavbar";
import LandingPageMobileFooter from "../LandingPageMobileFooter";
import ComparisonPageBackButton from "./ComparisonPageBackButton";

const blueCheck = "./img/mobile-dark-theme/icon/check-icon.png";
const whiteCheck = "./img/mobile-dark-theme/icon/check-icon.png";
const minuIcon = "./img/mobile-dark-theme/icon/minus-icon.png";

const tableData = [
  { name: "Track Leads", datacheck: blueCheck },
  { name: "Sending Proposals" },
  { name: "Sendings Estimates" },
  { name: "Revenue Forecast" },
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

// const mobileList1 = [
//   { name: "Lead Scoring" },
//   { name: "Lead Enrichment" },
//   { name: "Proposals" },
//   { name: "Estimates" },
//   { name: "Organization Targets" },
//   { name: "Individual Targets" },
//   { name: "Automated Workflows" },
//   { name: "Mobile first" },
//   { name: "Linkedin Scraper" },
//   { name: "Qualified Leads" },
//   { name: "Revenue Forecast" },
//   { name: "Track Recurring Revenue" },
//   { name: "Performance Scoreboard" },
// ];

const mobileList2 = [
  "Clearbit is primarily a data enrichment platform that can be used to build marketing outreach lists.",
  "Dominate on the other hand is not just a list builder but also a CRM and data enrichment platform.",
  "With the help of dominate, sales people can not only build lists but track leads, deals and accounts.",
  "Dominate enables you to track recurring deals and revenue, forecast revenue and provides intent based leads that are interested in your product or service.",
];
export class MobileClearbitComparison extends Component {
  // renderBlockTable = () => {
  //   return (
  //     <div className="row mx-1  align-items-start mobile-comparison-table-section">
  //       <div className="mobile-comparison-table-section-1">
  //         {mobileList1.map((val, key) => (
  //           <div key={key} className="row align-items-start">
  //             <h4 className="mobile-comparison-table-text">{val.name}</h4>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="mobile-comparison-table-section-2">
  //         <img
  //           src={"/img/mobile/comparison/dominate.png"}
  //           alt="mobile dominate"
  //           className="mobile-dominate-img"
  //         />
  //         <h5 className="mobile-comparison-dominate-text">Dominate</h5>
  //       </div>
  //       <div className="mobile-comparison-table-section-3">
  //         <img
  //           src={"/img/mobile/comparison/clearbit.png"}
  //           alt="mobile clearbit"
  //           className="mobile-zendesk-img"
  //         />
  //         <h5 className="mobile-comparison-dominate-text mobile-comparison-dominate-text--pipe">
  //           Clearbit
  //         </h5>
  //       </div>
  //     </div>
  //   );
  // };

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
                  <span>Clearbit</span>
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

  renderBlockPara = () => {
    return (
      <div className="mobile-comparison-para-section">
        <p className="mobile-comparison-para">
          Dominate is a new-gen, A.I driven sales team management software that
          takes CRMs to another level. Dominate is B2b-focused,
          salespeople-centric and built for startups from ground up. It enriches
          each stage of the sales funnel right from prospecting to tracking to
          closing deals.
        </p>
        <br />
        <p className="mobile-comparison-para">
          Clearbit is a marketing data engine for customer interactions for
          identifying future prospects and personalizing marketing and sales
          interactions with the help of fresh, accurate data that rely on
          real-time lookups to nurture relationships throughout the lifecycle.
        </p>
      </div>
    );
  };

  renderBlockConclusion = () => {
    return (
      <div className="comparison-conclusion-section">
        <h2 className="mobile-conclusion-text">Conclusion</h2>
        <img
          src={"./img/mobile-dark-theme/comparison/conclusion.png"}
          // src={"/img/mobile/comparison/conclusion.svg"}
          alt="mobile conclusion"
          className="mobile-conclusion"
        />
        {mobileList2.map((val, key) => (
          <div key={key}>
            <h5 className="mobile-conclusion-para">{val}</h5>
          </div>
        ))}
      </div>
    );
  };
  render() {
    return (
      <div className="mobile-background-color">
        <LandingPageMobileNavbar />
        <div className="comparison-section row justify-content-start align-items-center mx-0">
          <ComparisonPageBackButton />
          <div className="comparison-text-section">
            <h2 className="mobile-comparison-title">Comparison</h2>
            <h5 className="mobile-comparison-subtitle">Dominate Vs Clearbit</h5>
          </div>
        </div>
        {this.renderBlockTable()}
        {this.renderBlockPara()}
        {this.renderBlockConclusion()}
        <div className="comparison-footer-section">
          <LandingPageMobileFooter />
        </div>
      </div>
    );
  }
}

export default MobileClearbitComparison;
