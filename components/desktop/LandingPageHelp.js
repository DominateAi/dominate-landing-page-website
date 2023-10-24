import React, { Component } from "react";
import PageTitleFontBig from "./common/PageTitleFontBig";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageFooter from "./LandingPageFooter";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import ScrollDown from "./ScrollDown";
import ScrollTop from "./ScrollTop";
const list = [
  {
    que: "Q. Can I edit my workspace Name?",
    ans: "No, you can not.",
  },
  {
    que: "Q. Can I change my plan after initial subscription?",
    ans: "Yes, you can change it in profile section under plans tab. There you can select the desired plan and after the payment confirmation It will be reflected.",
  },
  {
    que: "Q.  Will I be informed before my free trial ends?",
    ans: "Yes you will be prompted to subscribe before your free trial ends.",
  },
  {
    que: "Q.    How can I invite individuals onto my workspace?",
    ans: "When as the admin of a workspace you add an employee an invite link is sent to the added employee using which the individual can logon onto the workspace",
  },
  {
    que: "Q.    How can I change a lead into customer?",
    ans: "A lead can be converted into a customer when you change the lead status to converted lead. This means that lead has now converted into a customer and their details can be found in customer section.",
  },
  {
    que: "Q.    How do I track leads closed by an individual or overall?",
    ans: "You can check under individual profiles of the employees for it and for overall you can track via a performance scoreboard widget available on dashboard",
  },
];
export class LandingPageHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "",
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  /*
   * handlers
   */
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnClickSearch = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  renderBlock1 = () => {
    return (
      <div className="help-section">
        <form onSubmit={this.handleOnClickSearch} className="help-search-div">
          <input
            name="helpText"
            type="text"
            placeholder="Enter keyword, question"
            className="help--search"
            value={this.state.helpText}
            onChange={this.handleOnChange}
          />
          <button
            className="search-icon--help"
            onClick={this.handleOnClickSearch}
          >
            {/* <i
              className="fa fa-search "
              aria-hidden="true"
              onClick={this.handleOnClickSearch}
            ></i> */}
            Search
          </button>
        </form>
        <div className="row justify-content-center align-items-center help-btn-div">
          <button className="email-send-btn email-send-btn--help_write">
            Write to us
          </button>
          <button className="email-send-btn email-send-btn--help_chat">
            Chat with Us
          </button>
        </div>
        <span className="help-span-text">or</span>
        <h5 className="help-social-icon-title">
          Connect with us
          {/* on our social media */}
        </h5>
        <div className="help-social-icon-section">
          {/* instagram */}
          <a
            href="https://www.instagram.com/dominate.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram mr-5 fa-lg social-icon-color" />
          </a>
          {/* facebook */}
          <i className="fa fa-facebook mr-5 fa-lg social-icon-color" />
          {/* linkedIn */}
          <a
            href="https://www.linkedin.com/company/dominate-ai/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin  fa-lg social-icon-color" />
          </a>
          {/* twitter */}
          {/* <i className="fa fa-twitter mr-5 fa-lg social-icon-color" /> */}
        </div>
      </div>
    );
  };

  renderBlock2 = () => {
    return (
      <div className="help-accordian-section d-flex justify-content-between align-items-start">
        <div className="col-6 p-0">
          <h5 className=" help-social-icon-title blue-gradient-text help-social-icon-title--accordian">
            Some of our Frequently Asked Questions
          </h5>
          {/* className="pt-60" */}
          <div className="pt-20">
            {list.map((data, key) => (
              <div key={key}>
                <Accordion allowZeroExpanded={true}>
                  <AccordionItem>
                    <AccordionItemHeading className="accordian-heading">
                      <AccordionItemButton>{data.que}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordian-panel">
                      <p>{data.ans}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6 pl-40 support-section">
          <h2 className="font-53-montserrat-extrabold for-direct-support-title blue-gradient-text">
            For Direct Support
          </h2>
          <p className="support-email-text">
            <span className="support-email-title"> Email 1 -</span>{" "}
            <a href="mailto:developers@myrl.tech"> developers@myrl.tech</a>{" "}
            <br />
            <br />
            <span className="support-email-title"> Email 2</span> -
            <a href="mailto:akhil@dominate.ai"> akhil@dominate.ai</a>
          </p>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="background-section">
        <div className=" background-section--help">
          <LandingPageNavbar />
          <ScrollDown />
          <ScrollTop />
          <PageTitleFontBig
            text={"how can we help you?"}
            extraClass={"help-title"}
          />
          {this.renderBlock1()}
          {this.renderBlock2()}
          <LandingPageFooter />
        </div>
      </div>
    );
  }
}

export default LandingPageHelp;
