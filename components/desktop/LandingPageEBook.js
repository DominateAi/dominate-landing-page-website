import React, { Component } from "react";
import PageTitleFontBig from "./common/PageTitleFontBig";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageNavbar from "./LandingPageNavbar";
import EbookModal from "./modals/EbookModal";

//const ebook_array = [1, 2, 3];

export class LandingPageEBook extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderEbook1 = (imgPath, title, author, para) => {
    return (
      <div className="eBook-outer-section">
        <div className="eBook-img-section">
          <img src={imgPath} alt="ebook" className="ebook-img" />
        </div>
        <div className="ebook-text-section">
          <h5 className="ebook-title">{title}</h5>
          <h5 className="ebook-author">{author}</h5>
          <p className="ebook-para">{para}</p>
        </div>
        <EbookModal />
      </div>
    );
  };

  render() {
    return (
      <div className="background-section background-section--ebook">
        <LandingPageNavbar />
        <PageTitleFontBig text={"ebooks"} extraClass={"ebook-page-title"} />
        <div className="row justify-content-center align-items-center mx-0 ebook-content-section">
          {this.renderEbook1(
            "./img/desktop-dark-theme/ebook/ebook-1.png",
            "Become a Sales-minded strategist",
            "Trisha Gupta",
            "Learn the best ways by industry specialists to create and implment rewarding and lasting strategies"
          )}
          {this.renderEbook1(
            "./img/desktop-dark-theme/ebook/ebook-2.png",
            "Putting together the A TEAM",
            "Tanishq Tripathi",
            "Building a successful team is about more than finding a group of people with the right mix of professional skills."
          )}
          {this.renderEbook1(
            "./img/desktop-dark-theme/ebook/ebook-3.png",
            "The fine art of thinking outside the box",
            "Sanjar Nirmani",
            "How to stand apart from the over saturated market? Finding something to offer which has nothing been done before is quite tricky."
          )}
        </div>
        <LandingPageFooter />
      </div>
    );
  }
}

export default LandingPageEBook;
