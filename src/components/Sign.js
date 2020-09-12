import React, { Component } from "react";
import "./App.css";
import { Button, Grid, Cell } from "react-mdl";
import Carousel from "./Carousel";
import PersonalInfoForm from "./PersonalInfoForm";
import AddVehicleInfo from "./AddVehicleInfo.jsx";
import ChargerType from "./ChargerType";
import OtpInput from "./ReactOtp.jsx";

class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activelog: 1,
      imageUploaded: null,
      mobileNo: "",
      name: "",
      email: "",
      regNo: "",
      rcImage: "",
      rcType: "",
      ChargerType: "",
      otp:""
    };

    this.addPersonalInfoToState = this.addPersonalInfoToState.bind(this);
    this.addRcInfoToState = this.addRcInfoToState.bind(this);
    this.addCarDetailsToState = this.addCarDetailsToState.bind(this);
    this.addOtpToState = this.addOtpToState.bind(this)
  }

  changeState(activeId) {
    this.setState({ activelog: activeId });
  }

  fileSelector(event) {
    this.setState({
      imageUploaded: event.target.files[0],
    });
  }

  addPersonalInfoToState(info) {
    this.setState({ name: info.name, email: info.email });
  }
  // Sign;
  addRcInfoToState(info) {
    this.setState(
      { rcType: info.type, rcImage: info.img, regNo: info.reg },
      () => {
        console.log(this.state.regNo, this.state.rcImage, this.state.rcType);
      }
    );
  }

  addCarDetailsToState(chargerType) {
    this.setState({ chargerType }, () => {
      console.log(this.state.chargerType);
    });
  }
  addOtpToState(otp){

    this.setState((state, props) => { return { otp:otp }} )
    

  }
  toggleinup() {
    if (this.state.activelog === 0) {
      return (
        <div>
          <form
            required
            className="sign-in-form"
            onSubmit={() => this.changeState(1)}
          >
            <h3>GATS Charging Station</h3>
            <br />
            <div className="input-box">
              <i className="fa fa-phone"></i>
              <input
                type="tel"
                value={this.state.mobileNo}
                minLength="10"
                pattern="-?[0-9]*(\.[0-9]+)?"
                maxLength="10"
                placeholder="Enter your phone number"
                required
                onChange={(event) => {
                  this.setState({ mobileNo: event.target.value });
                }}
              />
              <Button type="submit" id="submitphone">
                {" "}
                <i className="fa fa-arrow-right"></i>
              </Button>
            </div>
          </form>
        </div>
      );
    } else if (this.state.activelog === 1) {
      return (
        <div>
          <OtpInput changeState={()=>{this.changeState(2)}} getOtpValue={this.addOtpToState}/>

        </div>
      );
    } else if (this.state.activelog === 2) {
      return (
        <div className="addVehicleInfo">
          <PersonalInfoForm
            phoneNo={this.state.mobileNo}
            addValuesToState={this.addPersonalInfoToState}
            changeComponent={() => {
              this.changeState(3);
            }}
          />
        </div>
      );
    } else if (this.state.activelog === 3) {
      return (
        <div>
          <ChargerType
            changeComponent={() => {
              this.changeState(4);
            }}
            getChargerInfo={this.addCarDetailsToState}
          />
        </div>
      );
    } else if (this.state.activelog === 4) {
      return (
        <div className="addRcPage">
          <AddVehicleInfo getInfo={this.addRcInfoToState} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="sign-box">
        <link
          rel="stylesheet"
          href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
        />
        <div className="Sign">
          <header className="logo-header">
            <img src="logo.jpg" alt="GATS-logo" />
            <div className="CompName">GATS SCS</div>
          </header>
          <div className="Sign-content">
            <Grid className="main-grid">
              <Cell col={12}>{this.toggleinup()}</Cell>
            </Grid>
          </div>
        </div>
        <div className="slider">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Sign;
