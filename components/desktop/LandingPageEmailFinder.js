import React, { Component } from "react";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageFooter from "./LandingPageFooter";
import ScrollDown from "./ScrollDown";
import ScrollTop from "./ScrollTop";
import PageTitleFontBig from "./common/PageTitleFontBig";

const imgArr1 = "./img/desktop/email/new-email1.png";
const imgArr2 = "./img/desktop/email/new-email2.png";
const imgArr3 = "./img/desktop/email/new-email3.png";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6];
const email_Array = [
  {
    imgPath: imgArr1,
    aryHead: "Publicly Available Emails Only.",
    aryText:
      "Our tool sources publicly available emails in real-time. Only emails that have been marked as public and aren't behind a login screen are pulled and presented to you.",
  },
  {
    imgPath: imgArr2,
    aryHead: "100% GDPR Compliant.",
    aryText:
      "We do not store your data, you completely own your data.  We also follow all GDPR guidelines to ensure you do not get into trouble.",
  },
  {
    imgPath: imgArr3,
    aryHead: "10 Different Sources Checked.",
    aryText:
      "10 different public sources are checked in real time for each domain name that you enter. If you're unable to find email i.ds for a particular domain, it may be because those emails are not made public by the authors or web administrators.",
  },
];

export class LandingPageEmailFinder extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      //errors: {},
      showContent: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnClickSendBtn = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handelShow = () => {
    this.setState({
      showContent: true,
    });
  };

  renderBlockEmail1 = () => {
    return (
      <div className="email-search-section">
        <PageTitleFontBig
          text={"Email Finder"}
          extraClass={"ebook-page-title"}
        />
        <h2 className="pt-60 email_finder-title">
          Our email finder helps you find relevant email
        </h2>
        <br />
        <h2 className="email_finder-title">
          {" "}
          address for your business in just seconds
        </h2>
      </div>
    );
  };
  renderBlockEmail2 = () => {
    const { showContent } = this.state;

    return (
      <div className="email-search-outer-div">
        {/* <h2 className="domain-text">
          Enter a company name to get started. for example : Dominate.ai
        </h2> */}
        <div className="row mx-0 flex-nowrap">
          <form noValidate onSubmit={this.handleOnClickSendBtn}>
            <input
              name="email"
              type="text"
              value={this.state.email}
              className="email-finder-input"
              placeholder="company/domain name"
              onChange={this.handleOnChange}
            />
          </form>
          <button className="email-finder-search-btn" onClick={this.handelShow}>
            {/* <i className="fa fa-search fa-lg" /> */}
            Search
          </button>
        </div>
        {showContent ? (
          <div className="show-content-main-div">
            <div className="row justify-content-between align-items-center mx-0 show-content-div">
              <h5 className="show-content-left-text">13 mail address found!</h5>
              <h5 className="show-content-left-text ">Found In</h5>
            </div>
            <div className="show-content-result-div">
              {list.map((data, key) => (
                <div key={key} className="show-content-result-inner-div">
                  <div className="row justify-content-between align-items-center mx-0">
                    <h5 className="show-result-left-text">mail@domain.com</h5>
                    <h5 className="show-result-link">link</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  emailArray = () => {
    return (
      <div className="email-array-outer-div ">
        {email_Array.map((val, index) => (
          <div
            key={index}
            className="row justify-content-betwetween email-array-inner-div aign-items-start mx-1"
          >
            <img src={val.imgPath} alt="email" className="email-array-img" />
            <div className="email-array-name-div">
              <h3 className="email-array-name">{val.aryHead}</h3>
              <h3 className="email-array-para">{val.aryText}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };
  render() {
    return (
      <div className="background-section">
        <div className="background-section--blogs ">
          <LandingPageNavbar />
          <ScrollDown />
          <ScrollTop />
          {this.renderBlockEmail1()}
          {this.renderBlockEmail2()}
          {this.emailArray()}
          <LandingPageFooter />
        </div>
      </div>
    );
  }
}

export default LandingPageEmailFinder;
