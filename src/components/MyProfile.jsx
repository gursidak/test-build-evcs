import React, { Component } from "react";
import Jordan from "./J.jpg";
import ImageUploader from "./ImageUploader.jsx";
import TextField from "@material-ui/core/TextField";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProfilePicture: Jordan,
      UploadedFileObj: {},
      mobileNo: "+1 (647) 539 9953",
      newName: "",
      newEmailId: "",
    };

    this.handleImageSelector = this.handleImageSelector.bind(this);
    this.setProfilePicture = this.setProfilePicture.bind(this);
  }

  handleImageSelector(event) {
    console.log(event.target.files[0]);
    this.setState(
      {
        currentProfilePicture: URL.createObjectURL(event.target.files[0]),
        UploadedFileObj: event.target.files[0],
      },
      () => {
        console.log(this.state.currentProfilePicture);
      }
    );
  }

  setProfilePicture(fileObj) {
    console.log("imported : ", fileObj);
    this.setState({ UploadedFileObj: fileObj }, () => {
      this.setState({
        currentProfilePicture: URL.createObjectURL(this.state.UploadedFileObj),
      });
    });
  }

  render() {
    return (
      <div id="myprofile-container" className="container">
        <div className="row">
          <div className="col-12">
            <img
              src={this.state.currentProfilePicture}
              alt="profile picture"
              id="profile-picture"
            />
            <div className="col-12">
              <ImageUploader setProfilePic={this.setProfilePicture} />
            </div>
          </div>
        </div>

        <form className="container profile-update text-center">
          <div className="row row-styles justify-content-center labels">
            <div className="col-12 coll col-sm-4 " style={{ paddingTop: "8px" }}>
              CHANGE NAME
            </div>
            <div className="col-12 input-col input-col col-sm-auto">
              <TextField
                label="Name"
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
              />
            </div>
          </div>

          <div className="row row row-styles justify-content-center labels">
            <div className="col-12 coll col-sm-4 " style={{ paddingTop: "8px" }}>
              PHONE NUMBER
            </div>
            <div className="col-12 input-col col-sm-auto">
              <TextField
                label="Phone"
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
              />
            </div>
          </div>

          <div className="row row row-styles justify-content-center labels">
            <div className="col-12 coll col-sm-4  " style={{ paddingTop: "8px" }}>
              EMAIL ADDRESS
            </div>
            <div className="col-12 input-col col-sm-auto labels">
              <TextField
                label="Email"
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
              />
            </div>
            </div>


            <div className="row row-styles">
              <div className="col-12 text-center">
                <button
                  className="btn btn-danger evcsButton ">              
                  SAVE CHANGES
                </button>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default Profile;
