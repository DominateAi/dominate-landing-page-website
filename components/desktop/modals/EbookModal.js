import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
//import EbookDownloadModal from "./EbookDownloadModal";
import { validateContactUsFormEbook } from "../../../store/validation/validateContactUsFormEbook";

export class EbookModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      open2: false,
      fname: "",
      lname: "",
      cname: "",
      email: "",
      ebookErrors: {},
    };
  }
  onCloseModal = () => {
    this.setState({
      open: false,
    });
  };

  onCloseSubModal = () => {
    this.setState({
      open2: false,
    });
  };

  allClose = () => {
    this.setState({
      open: false,
      open2: false,
    });
  };

  openNewEntry = () => {
    this.setState({
      open: true,
    });
  };

  openSubModal = () => {
    this.setState({
      open2: true,
    });
  };

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnClickSave = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { ebookErrors, isValid } = validateContactUsFormEbook(this.state);

    if (!isValid) {
      this.setState({ ebookErrors });
    }
    if (isValid) {
      this.setState({
        open2: true,
        open: false,
      });
    }
  };
  renderEbookOneMoreThing = () => {
    const { open } = this.state;
    return (
      <>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          closeOnEsc={true}
          closeOnOverlayClick={false}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal customModal--ebook ",
            closeButton: "customCloseButton",
          }}
        >
          <span className="closeIconInModal" onClick={this.onCloseModal} />
          <div>
            <h2 className="modal-title">Just one more thing!</h2>
            <form
              noValidate
              onSubmit={this.handleOnClickSave}
              className="ebook-modal-from"
            >
              {/* --row 1-- */}
              <div className="modal-row-1">
                <div className="row  justify-content-between align-items-center mx-1">
                  <div className=" modal-input">
                    <label htmlFor="first-name">First name</label>
                    <input
                      type="text"
                      name="fname"
                      value={this.state.fname}
                      onChange={this.handelChange}
                      placeholder="Name"
                    />
                    {this.state.ebookErrors.fname && (
                      <div className="is-invalid">
                        {this.state.ebookErrors.fname}
                      </div>
                    )}
                  </div>

                  <div className=" modal-input">
                    <label htmlFor="last-name">Last name</label>
                    <input
                      type="text"
                      name="lname"
                      value={this.state.lname}
                      onChange={this.handelChange}
                      placeholder="Name"
                    />
                    {this.state.ebookErrors.lname && (
                      <div className="is-invalid">
                        {this.state.ebookErrors.lname}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* --row 2-- */}

              <div className="modal-row-1">
                <div className="row  justify-content-between align-items-center mx-1">
                  <div className=" modal-input">
                    <label htmlFor="company name">Company Name</label>
                    <input
                      type="text"
                      name="cname"
                      value={this.state.cname}
                      onChange={this.handelChange}
                      placeholder="Company Name"
                    />
                    {this.state.ebookErrors.cname && (
                      <div className="is-invalid is-invalid--cname">
                        {this.state.ebookErrors.cname}
                      </div>
                    )}
                  </div>

                  <div className=" modal-input">
                    <label htmlFor="first-name">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handelChange}
                      placeholder="mail@mail.com"
                    />
                    {this.state.ebookErrors.email && (
                      <div className="is-invalid">
                        {this.state.ebookErrors.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center pt-3">
                <button className="modal-btn" onClick={this.handleOnClickSave}>
                  Continue to download
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  };

  renderEbookSubModal = () => {
    const { open2 } = this.state;
    return (
      <>
        <Modal
          open={open2}
          onClose={this.onCloseSubModal}
          closeOnEsc={true}
          closeOnOverlayClick={false}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal customModal--ebookDownload customModal--ebook",
            closeButton: "customCloseButton",
          }}
        >
          <span className="closeIconInModal" onClick={this.onCloseSubModal} />
          <div className="ebook-download-div">
            <h1 className="modal-title">Thank you for your details! </h1>
            <h1 className="modal-title">The Ebook has been sent to your</h1>
            <h1 className="modal-title"> mail address</h1>
          </div>
          <h5 className="download-email-address">{this.state.email}</h5>
          <div className="row justify-content-center align-items-center modal-close-btn-div">
            <button className="modal-btn" onClick={this.allClose}>
              Close Window
            </button>
          </div>
        </Modal>
      </>
    );
  };

  render() {
    return (
      <>
        {this.renderEbookOneMoreThing()}
        {this.renderEbookSubModal()}
        <div className="row mx-0 align-items-center justify-content-center">
          <button
            className="email-send-btn email-send-btn--ebook"
            onClick={this.openNewEntry}
          >
            Download
          </button>
        </div>
      </>
    );
  }
}

export default EbookModal;
