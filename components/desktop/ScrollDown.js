import React, { Component } from "react";

export class ScrollDown extends Component {
  render() {
    return (
      <div>
        <div className="scroll">
          <div className="home-scroll-cta">
            <div className="scroll-animated">
              <span className="scroll-animated-inner"></span>
            </div>
            {/*<svg className="shape-scroll-touch small-only">
          <use href="#shape-scroll-touch"></use>
            </svg>*/}
            <p id="P_6">scroll</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollDown;
