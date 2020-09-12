import React, { Component } from "react";
import OtpInput from "react-otp-input";
import "./App.css";

class Otp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
    };
    this.SyncState = this.SyncState.bind(this);
  }

  SyncState() {
    this.props.getOtpValue(this.state.otp);
    this.props.changeState();
  }

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div >
        <h4> Enter verification code </h4>
        <OtpInput
          className="otp"
          value={this.state.otp}
          onChange={this.handleChange}
          numInputs={6}
          separator={<span> </span>}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle="otp-input"
          focusStyle="focus-style"
          containerStyle="otp-box-container"
        />
        <button
          type="submit"
          onClick={this.SyncState}
          className="btn btn-danger evcsButton"
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default Otp;
