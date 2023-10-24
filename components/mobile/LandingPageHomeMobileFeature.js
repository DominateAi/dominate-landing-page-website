import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Link from "next/link";

/*-- img --*/
const img1 = "./img/mobile-dark-theme/home/home-fold-one.png";
const img2 = "./img/mobile-dark-theme/home/home-laptop-img.png";

// const img1 = "/img/mobile/home/feature/networking.svg";
// const img2 = "/img/mobile/home/feature/user.svg";
// const img3 = "/img/mobile/home/feature/presentation.svg";
// const img4 = "/img/mobile/home/feature/handshake.svg";
// const img5 = "/img/mobile/home/feature/pie-chart.svg";
// const img6 = "/img/mobile/home/feature/group.svg";
// const app = "/img/mobile/home/slide/app.svg";
// const play = "/img/mobile/home/slide/play.png";

// const listArray = [
//   {
//     imgP: img1,
//     name: "Manage Teams",
//   },
//   {
//     imgP: img2,
//     name: "Track Leads",
//   },
//   {
//     imgP: img3,
//     name: "Send Proposals",
//   },
//   {
//     imgP: img4,
//     name: "Close Deals",
//   },
//   {
//     imgP: img5,
//     name: "Analyze & Predict",
//   },
//   {
//     imgP: img6,
//     name: "Compare Performance",
//   },
// ];

export class LandingPageHomeMobileFeature extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.autoSlide();
  }

  handleOnclick = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  autoSlide = () => {
    this.timeout = setTimeout(() => {
      this.autoSlide();
      this.setActiveSlide();
    }, this.props.delaySlide);
  };

  stopAutoSlide = () => {
    clearTimeout(this.timeout);
  };

  setActiveSlide = () => {
    let totalSlides = this.props.imgPaths.length;
    let activeIndex = this.state.activeIndex + 1;
    if (activeIndex === totalSlides) {
      activeIndex = 0;
    }
    this.setState({ activeIndex });
  };

  // renderBlock = () => {
  //   return (
  //     <div className="home-features-img-section">
  //       {listArray.map((val, index) => {
  //         let activeClass =
  //           index === this.state.activeIndex ? "activeThumbnail" : "";

  //         return (
  //           <div
  //             className={`home-features-img-section-outer-block ${activeClass}`}
  //             key={index}
  //             onClick={() => this.handleOnclick(index)}
  //           >
  //             <div className={`home-features-img-section-block ${activeClass}`}>
  //               <img
  //                 src={val.imgP}
  //                 alt="features"
  //                 className="home-feature-img"
  //               />
  //             </div>
  //             <span>{val.name}</span>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  render() {
    return (
      <div>
        <div className="home-mobile-slider-section">
          {/* <div className="home-mobile-slider-section-img-block">
            <div className="home-mobile-slider">
              {/*<img
              src={("/img/mobile/home/slide/macbook.png")}
              alt="macbook"
              className="home-mobile-slider"
            />*/}
          {/*<ReactCSSTransitionGroup
                transitionName={"fade"}
                transitionAppear={false}
                transitionEnter={false}
                transitionLeave={false}
              >
                <img
                  key={this.state.activeIndex}
                  src={this.props.imgPaths[this.state.activeIndex]}
                  alt="slide"
                  className="home-mobile-slider"
                />
              </ReactCSSTransitionGroup>
            </div>
          </div> */}
          <div className="text-center">
            <img src={img2} alt="command center" className="home-laptop-img" />
            <h5 className="text-uppercase new-home-ready-text">
              ready to dominate?
            </h5>
            <h4 className="new-home-manage-text">
              Manage <br />
              High Ticket B2b
              <br /> sales.
            </h4>
            <div className="book-btn-demo">
              <a
                href="https://calendly.com/akhil-dominate/demo"
                target="_blank"
                rel="noopener noreferrer"
                // className="d-none"
              >
                <div className="book-btn">Book a demo</div>
              </a>
            </div>
          </div>
          <div className="new-home-tool-div">
            <h3 className="new-home-tool-text">
              A tool that<span> works</span> for you.
              <br /> Not against you.
            </h3>
            <p className="new-home-para">
              An easy to get started with and easy
              <br /> to use tool with which you can <br />
              Dominate your sales quotas.
            </p>
          </div>
          <div className="text-right">
            <img
              src={img1}
              alt="command center"
              className="new-home-fold-one"
            />
          </div>{" "}
          {/* <div className="background-img-mobile">
            <h2 className="home-slider-sales">
              SALES SOLUTION <br /> FOR STARTUPS.
            </h2>
            <h4 className="home-slider-content">
              A sales tracking and management software
              <br /> geared towards startup success.
            </h4>
          </div> */}
          {/* <div className="row justify-content-between align-items-center home-app-section">
            <a
              href="https://play.google.com/store/apps/details?id=com.dominate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={play} alt="google play" className="goolge-play-img" />
            </a>
            <img src={app} alt="app store" className="goolge-play-img1" />
          </div> */}
          {/* <div className="book-btn-demo">
            <a
              href="https://calendly.com/akhil-dominate/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="d-none"
            >
              <span className="book-btn">Book a demo</span>
            </a>
          </div> */}
          {/* <h2 className="mobile-featues-title">Features</h2>
          <div className="background-img-mobile background-img-mobile--after">
            {this.renderBlock()}
            <div className="book-btn-demo">
              <Link href="/features">
                <a>
                  <div className="navbar-btn navbar-btn--home__features">
                    Know more
                  </div>
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default LandingPageHomeMobileFeature;
