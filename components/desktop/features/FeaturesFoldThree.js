import React from "react";

//img
// const img1 = "/img/desktop/features/new/features-fold-two-img-five.svg";
const img1 = "./img/desktop-dark-theme/features/granular-reporting.png";
// const img2 = "/img/desktop/features/new/features-fold-two-img-six.png";
const img2 = "./img/desktop-dark-theme/features/sequencing.png";
// const img3 = "/img/desktop/features/new/features-fold-two-img-seven.png";
const img3 = "./img/desktop-dark-theme/features/proposal-presentation.png";
const img4 = "./img/desktop-dark-theme/features/member-progress.png";
// const img5 = "/img/desktop/features/new/features-fold-two-img-nine.png";
const img5 = "./img/desktop-dark-theme/features/member-log.png";
// const gradient4 = "/img/desktop/features/new/member-icon.svg";
// const icon1 = "/img/desktop/features/new/yellow-icon-four.svg";
// const icon2 = "/img/desktop/features/new/yellow-icon-two.svg";
// const icon3 = "/img/desktop/features/new/yellow-icon-three.svg";
// const blueShade = "/img/desktop/features/new/blue-shade.svg";

export default function FeaturesFoldThree() {
  /*========================================
                renderOne
    ==========================================*/
  const renderOne = () => {
    return (
      <div className="new-features-fold-three-content-div-one">
        <div className="new-features-fold-three-content-div-content-one">
          <h4 className="new-features-fold-two-text-two ">
            Granular Reporting
          </h4>
          {/* * yellow icon
          <img
            src={icon2}
            alt=""
            className="new-features-fold-three-icon-one"
          /> */}
          <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
            Now dig into granular insights about how your leads move through
            <br />
            pipelines, accounts that bring in maximum revenue and reasons why
            <br />
            deals are not closing.
          </p>
          <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
            Use the data to optimize your processes in real-time.
          </p>
          {/* <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white pt-30">
            <span className="new-features-fold-two-text-three-polygaon">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            lorem
          </h5>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-47 pt-25 pl-10">
            lorem
          </h5>
          <h5 className="new-features-fold-two-text-three pt-25 new-features-fold-two-text-three--white-19 pl-10">
            lorem
          </h5> */}
        </div>
        <div className="new-features-fold-three-content-div-one-img-div">
          <img
            src={img1}
            className="new-features-fold-three-content-div-one-img"
            alt="new features fold three content one"
          />
        </div>
      </div>
    );
  };
  /*========================================
                renderTwo
    ==========================================*/
  const renderTwo = () => {
    return (
      <div className="new-features-fold-three-content-div-two row mx-0 align-itens-start flex-nowrap">
        <div className="new-features-fold-three-content-div-two-img-div">
          <img
            src={img2}
            className="new-features-fold-three-content-div-two-img"
            alt="new features fold three content two"
          />
        </div>
        <div className="new-features-fold-three-content-div-two-img-div__text-content">
          <h4 className="pt-36 new-features-fold-two-text-two">Sequencing</h4>
          {/* * yellow icon
          <img
            src={icon3}
            alt=""
            className="new-features-fold-three-icon-two"
          /> */}
          <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
            Reach out to prospects at scale by defining time based triggers.
            <br /> Engage and nurture leads directly from within the dominate
            console.
          </p>
          {/* <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white pt-30">
            <span className="new-features-fold-two-text-three-polygaon">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            lorem ipsum
          </h5>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-47 pt-25 pl-10">
            lorem ipsum
          </h5>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-19 pt-25 pl-10">
            lorem ipsum
          </h5> */}
        </div>
      </div>
    );
  };

  /*========================================
                renderThree
    ==========================================*/
  const renderThree = () => {
    return (
      <div className="new-features-fold-three-content-div-three row mx-0 align-items-center justify-content-between flex-nowrap">
        <div>
          <h4 className="new-features-fold-two-text-two">
            Proposals, Presentations and Estimates
          </h4>
          {/* * yellow icon
          <img
            src={icon1}
            alt=""
            className="new-features-fold-two-icon-four new-features-fold-two-icon-four--three"
          /> */}
          <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
            Sales teams are not desginers and we get that.
            <br /> Now choose from hundreds of templates to create value based
            proposals, send detailed
            <br /> presentations or simple draft up estimates.
          </p>
          {/* <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white pt-30">
            <span className="new-features-fold-two-text-three-polygaon">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            lorem ipsum
          </h5>
          <h5 className="new-features-fold-two-text-three pt-25 pl-10 new-features-fold-two-text-three--white-47">
            lorem ipsum
          </h5>
          <h5 className="new-features-fold-two-text-three--white-19 new-features-fold-two-text-three pt-25 pl-10">
            lorem ipsum
          </h5> */}
        </div>
        <div className="new-features-fold-three-content-div-three-img-div">
          <img
            src={img3}
            className="new-features-fold-three-content-div-three-img"
            alt="new features fold three content three"
          />
        </div>{" "}
      </div>
    );
  };

  /*========================================
                renderFour
    ==========================================*/
  const renderFour = () => {
    return (
      <div className="new-features-fold-three-content-div-four row mx-0 align-itens-start flex-nowrap">
        <div>
          <h4 className="new-features-fold-two-text-two">Member Progress</h4>
          <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
            Stay one step ahead of unmet quotas by understanding the needs of
            your
            <br /> team and where they're struggling. Help them make better
            decisions with
            <br /> Dominate Ai.
          </p>
          {/* <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--blue pt-30">
            <span className="new-features-fold-two-text-three-polygaon">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            lorem ipsum
          </h5>
          <h5 className="new-features-fold-two-text-three pt-25 pl-10">
            lorem ipsum
          </h5>
          <h5 className="new-features-fold-two-text-three pt-25 pl-10">
            lorem ipsum
          </h5> */}
        </div>
        <div className="new-features-fold-three-content-div-four-img-div">
          <img
            src={img4}
            className="new-features-fold-three-content-div-four-img"
            alt="new features fold three content four img"
          />
        </div>
      </div>
    );
  };

  /*========================================
                renderFive
    ==========================================*/
  const renderFive = () => {
    return (
      <div className="new-features-fold-three-content-div-five row mx-0 justify-content-between align-itens-start flex-nowrap">
        <div>
          <h4 className="new-features-fold-three-content-five-title pt-100">
            Members log
          </h4>
          <h5 className="new-features-fold-three-content-five-subtitle">
            Lorem ipsum dolor sit amet
          </h5>
          <p className="new-features-fold-two-para new-features-fold-two-para--fold-three-content-five-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="new-features-fold-three-content-div-five-img-div text-right">
          {/* <img
            src={gradient4}
            className="new-features-fold-three-content-div-six-img"
            alt=""
          /> */}
          <img
            src={img5}
            className="new-features-fold-three-content-div-five-img"
            alt="new features fold three content five"
          />
        </div>{" "}
      </div>
    );
  };
  return (
    <>
      <div className="new-features-fold-three-div text-center">
        {/** blue-shade */}
        {/* <img src={blueShade} className="blue-shade" alt="" /> */}
        <h2 className="new-features-fold-three-title">
          Dominate Your sales quotas.
        </h2>
        <a
          href={process.env.NEXT_PUBLIC_LOGIN_URL}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <div className="navbar-btn navbar-btn--features mt-60">
            Start Free Trial{" "}
          </div>
        </a>
      </div>
      {renderOne()}
      {renderTwo()}
      {renderThree()}
      {renderFour()}
      {/* {renderFive()} */}
    </>
  );
}
