import React, { Component } from "react";
import LandingPageHomeNavbar from "./LandingPageMobileNavbar";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { validateContactUsForm } from "../../store/validation/validateContactUsForm";

//const logo = "/img/mobile/get/arrow.svg";
const logo = "./img/mobile-dark-theme/icon/left-arrow.png";

const dropdownOptions = [
  { value: "Book a demo", label: "Book a demo" },
  { value: "Write to us", label: "Write to us" },
  {
    value: "enqurie about enterprise plan",
    label: "enqurie about enterprise plan",
  },
  { value: "other", label: "other" },
];

export class LandingPageHomeMobileContact extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      cname: "",
      pnumber: "",
      c_code: "",
      message: "",
      purposeValue: dropdownOptions[0].value,
      purpose: dropdownOptions[0],
      purposeOption: "",
      errors: {},
    };
  }

  //--handler--//
  handleDropdownChange = (e) => {
    this.setState({ purpose: e, purposeValue: e.value });
    // console.log(`Option selected:`, e);
  };
  handleChangeNumber = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.validity.valid ? e.target.value : "",
    });
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onChangeCountryCode = (val) => {
    this.setState({ c_code: val });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { errors, isValid } = validateContactUsForm(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div className="mobile-background-color">
        <LandingPageHomeNavbar />
        <div className="row justify-content-start align-items-center pt-50 mx-0">
          <Link href="/">
            <a>
              <img src={logo} alt="back" className="back-img" />
            </a>
          </Link>
          <h2 className="get-title">Get in Touch</h2>
        </div>
        <form onSubmit={this.handelSubmit}>
          <div className="mobile-form-section mx-0">
            {/* -- row 1  email address -- */}
            <div className=" mobile-modal-input">
              <label htmlFor="first-name">Email address</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder="mail@mail.com"
              />
              {this.state.errors.email && (
                <div className="is-invalid">{this.state.errors.email}</div>
              )}
            </div>
            <div className=" mobile-modal-input ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="fullname"
                value={this.state.fullname}
                onChange={this.handleOnChange}
                placeholder="Name"
              />
              {this.state.errors.fullname && (
                <div className="is-invalid">{this.state.errors.fullname}</div>
              )}
            </div>
            {/* -- row 2 -- */}
            <div className=" mobile-modal-input">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                name="cname"
                value={this.state.cname}
                onChange={this.handleOnChange}
                placeholder="Name"
              />
              {this.state.errors.cname && (
                <div className="is-invalid">{this.state.errors.cname}</div>
              )}
            </div>
            <div>
              <h2 className="mobile-label"> Phone Number</h2>{" "}
              <div className="row justify-content-start flex-nowrap mx-0 ">
                <div className="mobile-modal-input ">
                  <PhoneInput
                    country={"us"}
                    value={this.state.c_code}
                    placeholder="country code"
                    onChange={this.onChangeCountryCode}
                  />
                  {/*{this.state.errors.c_code && (
                    <div className=" is-invalid is-invalid--c_code">
                      {this.state.errors.c_code}
                    </div>
                  )}*/}
                </div>
                <div className="mobile-modal-input mobile-modal-input--pnumber">
                  <input
                    name="pnumber"
                    type="text"
                    value={this.state.pnumber}
                    pattern="[0-9]*"
                    placeholder="Number"
                    maxLength="10"
                    onChange={this.handleChangeNumber}
                  />
                  {this.state.errors.pnumber && (
                    <div className="is-invalid is-invalid--pnumber">
                      {this.state.errors.pnumber}
                    </div>
                  )}
                </div>
              </div>
            </div>{" "}
            {/* row 3 */}
            <div className="mobile-modal-input mobile-modal-input--select">
              <label htmlFor="purpose" className="field-text">
                Purpose
              </label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select-elements"
                isSearchable={false}
                value={this.state.purpose}
                options={dropdownOptions}
                placeholder="book a demo"
                onChange={(e) => this.handleDropdownChange(e)}
              />
            </div>
            {/* row 4  */}
            <div className=" mobile-modal-input mobile-modal-input--message">
              <label htmlFor="company">Message</label>
              <textarea
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleOnChange}
              />
              {this.state.errors.message && (
                <div className="is-invalid">{this.state.errors.message}</div>
              )}
            </div>
          </div>
          {/* row 5 */}

          <div className="row justify-content-center align-items-center pt-5 pb-5">
            <button className="mobile-modal-btn" onClick={this.handelSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LandingPageHomeMobileContact;
