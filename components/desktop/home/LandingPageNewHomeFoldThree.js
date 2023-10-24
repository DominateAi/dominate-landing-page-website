import React from "react";
// const img2 = "/img/desktop/home/sales-management-img.svg";
const arrow = "./img/desktop-dark-theme/home/productivity-arrow.png";
const img2 = "./img/desktop-dark-theme/home/sales-management.png";
// const img3 = "/img/desktop/home/new-home-compare.svg";
const img3 = "./img/desktop-dark-theme/home/home-focus-on-collaboration.png";
// const img4 = "/img/desktop/home/new-home-productivity.png";
const img4 = "./img/desktop-dark-theme/home/home-chat-calendar.png";
// const img5 = "/img/desktop/home/new-home-task-img.svg";
const img5 = "./img/desktop-dark-theme/home/home-tasks.png";

export default function LandingPageNewHomeFoldThree() {
  /*=====================================
            renderSalesManagement
  ====================================*/
  const renderSalesManagement = () => {
    return (
      <div className="row justify-content-between align-items-center mx-0 flex-nowrap new-home-sales-management-div">
        <div className="new-home-sales-management-text-div">
          <h5 className="blue-gradient-text">Works great for remote teams.</h5>
          <h2 className="font-48-poppins-extrabold new-tools-title">
            Sales Management,
            <br />
            For the sales <br />
            Teams of the
            <br /> future.
          </h2>
          <p className="font-24-nunito-light tools-that-works-para tools-that-works-para--sales-managemnet">
            Your team is not in the same room / office / city ? <br />
            Awesome! Dominate is a perfect fit for you.
            <br /> Collaborate effectively, remotely.
          </p>
        </div>
        <div className="new-home-sales-management-img-div">
          <img src={img2} alt="sales management" />
        </div>
      </div>
    );
  };

  /*=====================================
            renderCompare
  ====================================*/
  const renderCompare = () => {
    return (
      <div className="compare-main-div text-center">
        <img src={img3} alt="compare" className="new-home-compare-img" />
        <div className="compare-content-div text-right">
          <h5 className="font-24-montserrat-medium blue-gradient-text you-can-also-text">
            {/*You can also*/}
            Focused on
          </h5>
          <h3 className="granular-reporting-text">
            {/*Compare*/}
            Collaboration
          </h3>
          <p className="font-24-nunito-light tools-that-works-para">
            Undersand how your peers are managing their pipelines and learn from
            them.
          </p>
        </div>
      </div>
    );
  };

  /*=====================================
            renderProductivity
  ====================================*/
  const renderProductivity = () => {
    return (
      <>
        <div className="new-home-productivity text-right">
          <img
            src={img4}
            alt="Productivity Tools"
            className="productivity-tool-img"
          />
          <div className="new-home-productivity-content-div">
            <img
              src={arrow}
              alt=""
              className="new-home-productivity-arrow-img"
            />
            <h5 className="font-24-montserrat-medium blue-gradient-text you-can-also-text">
              And a great number of
            </h5>
            <h3 className="granular-reporting-text">Productivity Tools</h3>
          </div>
          <div className="new-home-productivity-chat-div">
            <h4 className="font-24-nunito-bold chat-text">Chat</h4>
            <p className="font-18-montserrat-medium text-inter-semibold">
              Stay in touch with your
              <br />
              team all time
            </p>
          </div>
          <div className="new-home-productivity-calendar-div">
            <h4 className="font-24-nunito-bold chat-text">Calendar</h4>
            <p className="font-18-montserrat-medium text-inter-semibold">
              Manage all your follow ups, meetings
              <br />
              requests and Leaves - at one place!
            </p>
          </div>
          <div className="new-home-productivity-tasks-div">
            <h4 className="font-24-nunito-bold chat-text">Tasks</h4>
            <p className="font-18-montserrat-medium text-inter-semibold">
              Add tasks to track your workload{" "}
            </p>
          </div>
        </div>
        <div className="new-home-task-img-div text-left">
          <img src={img5} alt="task" className="new-home-task-img" />
        </div>
      </>
    );
  };
  return (
    <div>
      {renderSalesManagement()}
      {renderCompare()}
      {renderProductivity()}
    </div>
  );
}
