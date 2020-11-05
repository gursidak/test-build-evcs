import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class Shiv extends Component {
  render() {
    return (
      <>
        <Button variant="contained" color="primary" disableElevation>
          Disable elevation
        </Button>
      </>
    );
  }
}

export default Shiv;
