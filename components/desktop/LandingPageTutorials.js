import React, { Component } from "react";
import PageTitleFontBig from "./common/PageTitleFontBig";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageNavbar from "./LandingPageNavbar";
import ScrollDown from "./ScrollDown";
import ScrollTop from "./ScrollTop";

const v1 = "./img/desktop/tutorial/v1.mov";
const v2 = "./img/desktop/tutorial/v2.mov";
const v3 = "./img/desktop/tutorial/v3.mov";
const v4 = "./img/desktop/tutorial/v4.mov";
const v5 = "./img/desktop/tutorial/v5.mov";

export class LandingPageTutorials extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderTutorialBlock = (
    no,
    name,
    para,
    nameExtraClass,
    paraExtraClass,
    noextraClass,
    tutorial
  ) => {
    return (
      <div className="row mx-5 tutorial-section">
        <div className="tutorial-left-section">
          <video controls width="100%" height="100%" autoPlay>
            <source src={tutorial} type="video/mp4" alt="tutorials" />
          </video>
        </div>
        <div className="tutorial-right-section">
          <h2 className={`tutorial-title ${nameExtraClass}`}>{name}</h2>
          <h2 className={`tutorial-para ${paraExtraClass}`}>{para}</h2>
          <div className={`feature-number-div ${noextraClass}`}>
            <h5 className="tutorial-span-text">{no}</h5>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="background-section background-section--tutorials">
        <LandingPageNavbar />
        <ScrollDown />
        <ScrollTop />
        <PageTitleFontBig
          text={"tutorials"}
          extraClass={"tutorial-page-title"}
        />
        <div className="tutorial-section1">
          {this.renderTutorialBlock(
            "1",
            "Sign up Process",
            "Sign up and create a workspace for you and your team where everyone can collaborate and work together.",
            "tutorial-name-1",
            "tutorial-para-1",
            "tutoria-no-1",
            v1
          )}
        </div>
        <div className="tutorial-section2">
          {this.renderTutorialBlock(
            "2",
            "Add teams, holidays and chat with team.",
            "Set up your workspace by adding official holidays and adding your team members to the workspace. Once added you can directly chat with them in Dominate.",
            "tutorial-name-2",
            "tutorial-para-2",
            "tutoria-no-1",
            v2
          )}
        </div>
        <div className="tutorial-section3">
          {this.renderTutorialBlock(
            "3",
            "Add leads and track them",
            "You can add potential customers as leads and track them through various stages with the various views present: List, Funnel and our hero-Kanban view.",
            "tutorial-name-3",
            "tutorial-para-3",
            "tutoria-no-1",
            v3
          )}
        </div>
        <div className="tutorial-section4">
          {this.renderTutorialBlock(
            "4",
            "Send emails and save templates",
            "You can create a safe one stop communication channel via our mail feature and you can also save them as templates for reuse.",
            "tutorial-name-4",
            "tutorial-para-4",
            "tutoria-no-1",
            v4
          )}
        </div>
        <div className="tutorial-section5">
          {this.renderTutorialBlock(
            "5",
            "Dashboard and report settings",
            "You can track your progress and data of your organization with multiple widgets on dashboard and reports.",
            "tutorial-name-5",
            "tutorial-para-5",
            "tutorial-no-5",
            v5
          )}
        </div>
        <LandingPageFooter />
      </div>
    );
  }
}

export default LandingPageTutorials;
