import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import GetInTouch from "./modals/GetInTouch";

export class LandingPageNavbarmodal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  onCloseModal = () => {
    this.setState({
      open: false,
    });
  };

  openNewEntry = () => {
    this.setState({
      open: true,
    });
  };

  renderModal = () => {
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
            modal: "customModal customModal--get",
            closeButton: "customCloseButton",
          }}
        >
          <span className="closeIconInModal" onClick={this.onCloseModal} />
          <div>
            <GetInTouch />
          </div>
        </Modal>
      </>
    );
  };
  render() {
    return (
      <div>
        {this.renderModal()}
        <button className="email-send-btn" onClick={this.openNewEntry}>
          Book a demo
        </button>
      </div>
    );
  }
}

export default LandingPageNavbarmodal;
