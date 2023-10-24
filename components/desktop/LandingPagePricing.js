import React, { Component } from "react";
import LandingPageFooter from "./LandingPageFooter";
import PageTitleFontBig from "./common/PageTitleFontBig";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageCurrency from "./LandingPageCurrency";

export class LandingPagePricing extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  /*renderBtnBlock = () => {
    return (
      <div className="row justify-content-between mx-0 price-btn">
        <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
          <span className="start-btn ">Start free trial</span>
        </a>
        <button className="start-btn contact-btn" onClick={this.openNewEntry}>
          Contact Us
        </button>
      </div>
    );
  };*/

  render() {
    return (
      <>
        <LandingPageNavbar activeLink={"pricing"} />
        <PageTitleFontBig text={"pricing"} extraClass={"pricing-title"} />
        <LandingPageCurrency />
        {/*this.renderBtnBlock()*/}
        <LandingPageFooter />
      </>
    );
  }
}

export default LandingPagePricing;
