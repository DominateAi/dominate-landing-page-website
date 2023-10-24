import React, { Component } from "react";

export class LandingPageContact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      //errors: {},
    };
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
  render() {
    return (
      <div className="row justify-content-center align-items-center mx-0 pl-250">
        <div className="from-div">
          <form noValidate onSubmit={this.handleOnClickSendBtn}>
            <input
              name="email"
              type="email"
              value={this.state.email}
              className="contact-email-input"
              placeholder="Enter your email"
              onChange={this.handleOnChange}
            />
          </form>
        </div>
        <button
          type="submit"
          className="email-send-btn"
          onClick={this.handleOnClickSendBtn}
        >
          {/* Send */}
          Subscribe
        </button>
      </div>
    );
  }
}

export default LandingPageContact;
