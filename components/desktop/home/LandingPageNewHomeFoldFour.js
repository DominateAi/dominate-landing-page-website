import React from "react";
// const img1 = "/img/desktop/home/new-home-sales-center-img.svg";
const img1 = "./img/desktop-dark-theme/home/home-simplify-sales.png";
const icon = "./img/desktop-dark-theme/home/home-sales-center-icon.png";
const img2 = "./img/desktop-dark-theme/home/home-sales-center.png";
// const img2 = "/img/desktop/home/new-home-sales-center-main-img.png";
const img3 = "./img/desktop-dark-theme/home/home-account-base-management.png";
// const img3 = "/img/desktop/home/new-home-account-card-img.svg";
// const img4 = "/img/desktop/home/new-home-lead-team-img.png";
const img4 = "./img/desktop-dark-theme/home/home-deals-pipeline.png";
// const img5 = "/img/desktop/home/new-home-leads-management.png";
const img5 = "./img/desktop-dark-theme/home/home-extensive-lead-managment.png";
// const img6 = "/img/desktop/home/new-home-proposal-img.png";
const img6 = "./img/desktop-dark-theme/home/home-quotation.png";
// const img7 = "/img/desktop/home/new-home-contact-img.png";
const img7 = "./img/desktop-dark-theme/home/home-contacts.png";
const img8 = "./img/desktop-dark-theme/home/home-proposal.png";

export default function LandingPageNewHomeFoldFour() {
  const renderBlock1 = () => {
    return (
      <div className="new-home-sales-center-div row mx-0 flex-nowrap align-items-start">
        <img
          src={img1}
          alt="sales center"
          className="new-home-sales-center-img"
        />
        <div className="new-home-sales-center-content-div">
          <h5 className="p-0 m-0 blue-gradient-text">Focused on simplicity.</h5>
          <h2 className="font-48-poppins-extrabold new-tools-title mb-13 simplify-sales-text">
            Simplify Sales,
            <br /> Amplify Business.
          </h2>
          <p className="font-24-nunito-light tools-that-works-para tools-that-works-para--sales-center">
            Selling doesn’t have to be confusing. Dominate takes the complexity
            out of managing your leads and provides a simple, abstracted view of
            your entire pipeline, So you can focus on what matters - Your
            Propsects !
          </p>
        </div>
      </div>
    );
  };

  const renderBlock2 = () => {
    return (
      <div>
        <div className="row sales-center-left-img-row mx-0 flex-nowrap justify-content-between align-items-start ">
          <div className="sales-center-left-img-row__colm1">
            <img src={icon} alt="" className="sales-center-icon" />{" "}
            <h2 className="granular-reporting-text sales-center-text">
              Sales Centre
            </h2>
            <p className="font-24-nunito-light tools-that-works-para pr-100">
              All the tools that help you sell better, in a single place.
              <br /> The sales centre inside dominate enables you to create
              custom
              <br /> deal pipelines, create proposals, presentations and <br />
              estimates and much more.
            </p>
          </div>
          <img
            src={img2}
            alt="sales center"
            className="sales-center-left-img"
          />
        </div>
        <div className="row mx-0 align-items-center home-account-card-div flex-nowrap">
          <img src={img3} alt="account card" className="account-card-img" />
          <div>
            <div className="account-card-content-div">
              <h5 className="font-24-montserrat-semiBold">
                Account Based Management
              </h5>
              <p className="font-18-montserrat-medium">
                Better Management of Accounts.
                <br /> Get more data on revenue <br /> and projection.
              </p>
            </div>
          </div>
        </div>
        <div className="home-custom-deal-pipline-div  row justify-content-between mx-0 align-items-start flex-nowrap">
          <div className="custom-deal-pipelines-div">
            <h4 className="font-24-montserrat-semiBold">
              Custom Deal Pipelines
            </h4>
            <p className="font-18-montserrat-medium">
              Create and maintain mutliple pipelines
              <br /> based on your particular sales flow.
            </p>
            <img
              src={img4}
              alt="deals pipeline"
              className="home-custom-deal-pipeline"
            />
          </div>
          <div className="extensive-lead-managment-div">
            <div className="extensive-lead-managment-content-div">
              <h4 className="font-24-montserrat-semiBold">
                Extensive Lead Managment
              </h4>
              <p className="font-18-montserrat-medium">
                Track your leads in multiple
                <br />
                visualisations for easy management
              </p>
            </div>
            <img
              src={img5}
              alt="leads managment"
              className="home-expensive-leads-management-img"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderBlock3 = () => {
    return (
      <div>
        <div className="new-home-quotation-proposal-contacts-div row mx-0 align-items-start justify-content-between flex-nowrap">
          <img src={img6} alt="quotation" className="new-home-quotation-img" />
          <div className="new-home-quotation-div">
            <h4 className="font-24-montserrat-semiBold">Quotations</h4>
            <p className="font-18-montserrat-medium">
              Create quick estimates and send <br /> them directly to your
              prospects.
            </p>
          </div>
          <div className="new-home-contact-div">
            <h4 className="font-24-montserrat-semiBold">Contacts</h4>
            <p className="font-18-montserrat-medium">
              Add people you cross paths with as contacts. Add business
              <br /> context and import them as leads.
            </p>
            <img src={img7} alt="contacts" className="new-home-contacts-img" />
          </div>
          <div className="new-home-proposal-div">
            <div className="new-home-proposal-content-div">
              <h4 className="font-24-montserrat-semiBold">
                {" "}
                {/* Proposals */}
                Presentation
              </h4>
              <p className="font-18-montserrat-medium">
                Choose from hundreds of pre-designed <br />
                templates and create quick proposals.
              </p>
            </div>
            <img
              src={img8}
              alt="presentation"
              className="new-home-presentation-img"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {renderBlock1()}
      {renderBlock2()}
      {renderBlock3()}
    </>
  );
}
