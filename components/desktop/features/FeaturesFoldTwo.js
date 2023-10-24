import React from "react";

//img
// const img1 = "/img/desktop/features/new/features-fold-two-img-one.png";
const img1 = "./img/desktop-dark-theme/features/sales-center.png";
// const img2 = "/img/desktop/features/new/features-fold-two-img-two.png";
const img2 = "./img/desktop-dark-theme/features/smart-works-cards.png";
// const img3 = "/img/desktop/features/new/features-fold-two-img-three.svg";
const img3 = "./img/desktop-dark-theme/features/front-end-design.png";
// const img4 = "/img/desktop/features/new/features-fold-two-img-four.svg";
const img4 = "./img/desktop-dark-theme/features/account-details.png";

// const icon1 = "/img/desktop/features/new/yellow-icon-one.svg";
// const icon2 = "/img/desktop/features/new/yellow-icon-two.svg";
// const icon3 = "/img/desktop/features/new/yellow-icon-three.svg";
// const icon4 = "/img/desktop/features/new/yellow-icon-four.svg";

export default function FeaturesFoldTwo() {
  /*==================================================
                     renderOne
===================================================*/
  const renderOne = () => {
    return (
      <div className="row mx-0 align-items-start flex-nowrap new-features-fold-two-content-div-one">
        <div>
          <h4 className="new-features-fold-two-text-two ">Sales Centre</h4>
          {/* * yellow icon
          <img src={icon2} alt="" className="new-features-fold-two-icon-two" /> */}
          <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
            Our sales centre has a complete collection of tools that your team
            can
            <br /> use through the entire sales cycle -right from prospecting to
            reaching <br />
            out at scale, tracking data and closing deals.
          </p>
          {/* <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white pt-30 ">
            <span className="new-features-fold-two-text-three-polygaon">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            lorem
          </h5>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-47 pt-25 pl-10">
            lorem
          </h5>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-19 pt-25 pl-10">
            lorem
          </h5> */}
        </div>
        <div className="new-features-fold-two-content-one-img-div">
          <img
            src={img1}
            alt="features fold two content one"
            className="new-features-fold-two-content-one-img"
          />
        </div>
        {/* <div className="new-features-fold-two-content-two-img-div">
          <img
            src={img2}
            alt="new features fold two content two"
            className="new-features-fold-two-content-two-img"
          />
        </div> */}
        {/* <div className="new-features-fold-two-content-two-div">
          <h4 className="new-features-fold-two-text-two ">
            Lorem ipsum dolor sit amet
          </h4>
          <p className="new-features-fold-two-para  new-features-fold-two-para--width pt-25">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua
          </p>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white pt-30 ">
            <span className="new-features-fold-two-text-three-polygaon">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            lorem
          </h5>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-47 pt-25 pl-10">
            lorem
          </h5>
          <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-19 pt-25 pl-10">
            lorem
          </h5>
        </div> */}
        {/* <div className="new-features-fold-two-content-two-img-two-div">
          <img
            src={img3}
            alt="new features fold two content two"
            className="new-features-fold-two-content-two-img-two"
          />
        </div> */}
      </div>
    );
  };

  /*=========================================================================
                                  renderThree
   ==========================================================================*/
  // const renderThree = () => {
  //   return (
  //     <div className="row mx-0 align-items-start flex-nowrap new-features-fold-two-content-three-div">
  //       <div>
  //         <h4 className="new-features-fold-two-text-two">
  //           Lorem ipsum dolor sit amet
  //         </h4>
  //         {/* * yellow icon
  //         <img src={icon4} alt="" className="new-features-fold-two-icon-four" /> */}
  //         <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //           eiusmod
  //           <br /> tempor incididunt ut labore et dolore magna aliqua
  //         </p>
  //         <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white pt-30 ">
  //           <span className="new-features-fold-two-text-three-polygaon">
  //             <i className="fa fa-caret-right"></i>
  //           </span>{" "}
  //           lorem
  //         </h5>
  //         <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-47 pt-25 pl-10">
  //           lorem
  //         </h5>
  //         <h5 className="new-features-fold-two-text-three new-features-fold-two-text-three--white-19 pt-25 pl-10">
  //           lorem
  //         </h5>
  //       </div>
  //       <div className="new-features-fold-two-content-three-img-div">
  //         <img
  //           src={img4}
  //           alt="new features fold two content three"
  //           className="new-features-fold-two-content-three-img"
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  /*==================================================
                     renderTwo
  ===================================================*/
  const renderTwo = () => {
    return (
      <div className="row mx-0 align-items-start flex-nowrap new-features-fold-two-content-div-one-two">
        <div>
          <h4 className="new-features-fold-two-text-two ">Command Centre</h4>
          <p className="new-features-fold-two-para new-features-fold-two-para--width pt-25">
            Being the sales head comes with a lot of accountability. Our command
            centre helps you track your entire
            <br /> team's progress and help them before they need it. Now set
            quotas for your organization and members,
            <br /> create custom roles and permissions, approve leaves and
            create custom fields at the organization level.
          </p>
        </div>
        <div className="new-features-fold-two-content-command-centre-img-div">
          <img
            src="/img/desktop-dark-theme/features/command-centre.png"
            alt="command centre"
            className="new-features-fold-two-content-command-centre-img"
          />
        </div>
      </div>
    );
  };
  /*=======================================
                    render
  ========================================*/
  return (
    <div>
      <div className="new-features-fold-two-title-div">
        <h2 className="text-center new-features-fold-two-title">
          The Most Effective Sales Tool Out There.
        </h2>
        {/* <img src={icon1} alt="" className="fold-two-yellow-icon-one" /> */}
      </div>
      <p className="text-center new-features-fold-two-para pt-30">
        If you're a B2b startup sales team that works remotely, you won't find a
        better tool than Dominate, simply because
        <br /> we've prioritized remote selling around everything we've built
        for you.
      </p>
      {renderOne()}
      {renderTwo()}
      {/* {renderThree()} */}
    </div>
  );
}
