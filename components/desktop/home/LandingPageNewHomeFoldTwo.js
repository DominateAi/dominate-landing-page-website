import React from "react";
const img1 = "./img/desktop/home/granular-reporting-img.svg";
const img2 = "./img/desktop-dark-theme/home/home-cmd.png";
const icon = "./img/desktop-dark-theme/home/home-cmd-icon.png";
// const img2 = "/img/desktop/home/new-home-command-center-img1.svg";
// const img3 = "/img/desktop/home/new-home-command-center-img2.svg";
const img3 = "./img/desktop-dark-theme/home/home-account-based.png";
const img4 = "./img/desktop-dark-theme/home/home-cmd-quato.png";
const img5 = "./img/desktop-dark-theme/home/people.png";

export default function LandingPageNewHomeFoldTwo() {
  /*=====================================
            renderCommandCenter
  ====================================*/

  const renderCommandCenter = () => {
    return (
      <div className="new-home-command-center">
        <div className="text-right">
          <img
            src={img2}
            alt="command center"
            className="command-center-img1"
          />
        </div>
        {/* <img src={img3} alt="command center" className="command-center-img2" /> */}
        <div className="new-home-command-center-content-div">
          <img src={icon} alt="" className="command-center-icon" />
          <h2 className="granular-reporting-text">Command Centre </h2>
          <p className="font-24-nunito-light tools-that-works-para tools-that-works-para--cmd">
            As a Business Owner, or a sales lead, you can centrally track your
            team’s productivity.
            <br /> Determine commond problem areas, set goals and quotas,
            Identify opportunities easily
            <br /> so that your team can prioritize.{" "}
          </p>
          <h5 className="new-home-24-poppins-text blue-gradient-text">
            Track your monthly sales quotas for the team and the organisation
          </h5>
        </div>
        {/* <h4 className="font-18-montserrat-medium command-center-text2 blue-gradient-text">
          And Track the progress of your goals
        </h4> */}
        {/* <h4 className="font-18-montserrat-medium command-center-text3 blue-gradient-text">
          And Many more with our
        </h4> */}
        <div className="home-cmd-quato-img-div">
          <img
            src={img4}
            alt="command center"
            className="command-center-img3"
          />
        </div>
      </div>
    );
  };
  /*=====================================
            renderGranularReporting
  ====================================*/
  const renderGranularReporting = () => {
    return (
      <div className="new-home-granular-reporting-main-div">
        <div className="new-home-granular-reporting-img-div">
          <img src={img3} alt="granular reporting" />
        </div>
        <div className="new-home-granular-reporting-text-div text-right">
          <img src={img5} alt="granular reporting" className="people-img" />
          <h4 className="font-18-montserrat-medium command-center-text3  blue-gradient-text">
            And Many more with our
          </h4>
          <h2 className="granular-reporting-text">
            {/*Granular Reporting*/}
            account based focus
          </h2>
          <p className="font-24-nunito-light tools-that-works-para  pt-20">
            As they say, the details have the complete picture. Dominate lets
            you dig deep into the numbers for each Account, Deal and Lead and
            that enables you to prioritize on the most profitable accounts.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="row mx-0 tools-that-works-main-div align-items-center flex-nowrap">
        <div className="col-5 p-0">
          <img
            src={"./img/desktop/home/new-home-fold-two.svg"}
            className="new-home-fold-two-img"
            alt="A tool that works for you. Not against you."
          />
        </div>
        <div className="col-7 tools-that-works-div">
          <h3 className="blue-gradient-text">Focused on Productivity.</h3>
          <h2 className="font-48-poppins-extrabold new-tools-title">
            A tool that works <br />
            for you.
            <br />
            Not against you.
          </h2>
          <p className="font-24-nunito-light tools-that-works-para">
            An easy to get started with and easy to use tool that you can work
            with, everyday. Our tool helps your team to be productive and
            efficient and helps them communicate with prospects with context and
            truly, Dominate their sales quotas.{" "}
          </p>
        </div>
      </div>
      {renderCommandCenter()}
      {renderGranularReporting()}
    </div>
  );
}
