import React, { Component } from "react";
import LandingPageMobileNavbar from "../LandingPageMobileNavbar";
import ComparisonPageBackButton from "./ComparisonPageBackButton";
import LandingPageMobileFooter from "../LandingPageMobileFooter";

const blueCheck = "./img/mobile-dark-theme/icon/check-icon.png";
const whiteCheck = "./img/mobile-dark-theme/icon/check-icon.png";
const minuIcon = "./img/mobile-dark-theme/icon/minus-icon.png";

const tableData = [
  { name: "Track Leads" },
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
  "Salesflare is feature rich and has various features required for a typical CRM setup.",
  "Dominate adds various layers on top of a traditional CRM and enables better collaboration between the team.",
  "There are organization and individual level targets, performance scoreboards, ability to send proposals.",
  "The most important feature that Dominate brings to the table is the ability to process millions of TBs of data from across the internet to provide relevant insights into the leads and provide qualified leads to users.",
];

export class MobileSalesflareComaparison extends Component {
  // renderBlockTable = () => {
  //   return (
  //     <div className="row mx-1  align-items-start justify-content-center mobile-comparison-table-section">
  //       <div className="mobile-comparison-table-section-1">
  //         {mobileList1.map((val, key) => (
  //           <div key={key} className="row align-items-start ">
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
  //           src={"/img/mobile/comparison/salesflare.svg"}
  //           alt="mobile Salesflare"
  //           className="mobile-zendesk-img"
  //         />
  //         <h5 className="mobile-comparison-dominate-text mobile-comparison-dominate-text--pipe">
  //           Salesflare
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
                  <span>Salesflare</span>
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
          Salesflare is a feature-rich traditional CRM that provides salespeople
          with features such as tracking leads, deals and emails along with
          various integrations to make their job easier.
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
            <h5 className="mobile-comparison-subtitle">
              Dominate Vs Salesflare
            </h5>
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
export default MobileSalesflareComaparison;
