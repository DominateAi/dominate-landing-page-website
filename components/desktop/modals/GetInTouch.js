import React, { Component } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { validateContactUsForm } from "../../../store/validation/validateContactUsForm";

const dropdownOptions = [
  { value: "Book a demo", label: "Book a demo" },
  { value: "Write to us", label: "Write to us" },
  {
    value: "enqurie about enterprise plan",
    label: "enqurie about enterprise plan",
  },
  { value: "other", label: "other" },
];

export class GetInTouch extends Component {
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

  renderBlock1 = () => {
    return (
      <div>
        <h2 className="get-in-touch-title">get in touch</h2>
        <form onSubmit={this.handelSubmit}>
          <div className="get-outer-div">
            {/* -- row 1 -- */}
            {/* email address */}
            <div className="get-row1">
              <div className="modal-input">
                <label htmlFor="first-name">Email address</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                    placeholder="mail@mail.com"
                  />
                </div>
                {this.state.errors.email && (
                  <div className="is-invalid">{this.state.errors.email}</div>
                )}
              </div>

              {/* full name*/}
              <div className=" modal-input  modal-input--full">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  name="fullname"
                  value={this.state.fullname}
                  onChange={this.handleOnChange}
                  placeholder="Name"
                />
                {this.state.errors.fullname && (
                  <div className="is-invalid is-invalid--fullname">
                    {this.state.errors.fullname}
                  </div>
                )}
              </div>
            </div>
            {/* -- row 2 -- */}
            {/* compay name*/}
            <div className="get-row1">
              <div className=" modal-input">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  name="cname"
                  value={this.state.cname}
                  onChange={this.handleOnChange}
                  placeholder="Name"
                />
                {this.state.errors.cname && (
                  <div className="is-invalid is-invalid--cname">
                    {this.state.errors.cname}
                  </div>
                )}
              </div>

              {/* phone number */}
              <div className=" modal-input--full">
                <h3 className="label"> Phone number</h3>
                <div className="row justify-content-end align-items-end">
                  <div className="new-country-code-block modal-input modal-input--code ">
                    <PhoneInput
                      country={"us"}
                      value={this.state.c_code}
                      placeholder="country code"
                      onChange={this.onChangeCountryCode}
                    />
                    {this.state.errors.pnumber && (
                      <div className="invalid--c_code"></div>
                    )}
                  </div>
                  <div className="modal-input modal-input--pnumber">
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
              </div>
            </div>
            {/* row 3 */}
            {/* purpose */}
            <div className="modal-input modal-input--select">
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
            {/* message */}
            <div className=" modal-input modal-input--message">
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
          <div className="row justify-content-center align-items-center contact-submit-btn-div">
            <button className="modal-btn" onClick={this.handelSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  render() {
    return <div>{this.renderBlock1()}</div>;
  }
}

export default GetInTouch;
