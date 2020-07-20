import React, { Component } from 'react';
import './App.css'
import Jordan from './jordan.jpg'
class MyVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = { rcNo:null, 
          rcImage:null,
          RClist : [
            { SerialNumber : 1 , Number:"PB/000593/2020"},
            { SerialNumber : 2 , Number:"PB/000593/2020"},
            { SerialNumber : 3 , Number:"PB/000593/2020"},
            { SerialNumber : 4 , Number:"PB/000593/2020"}
          ]
        }
        this.renderRClist = this.renderRClist.bind(this)
    }

    renderRClist(){
      return( 
        this.state.RClist.map((rc) => (
          <React.Fragment>
            <tr>
            <td>{rc.SerialNumber}</td>
            <td>{rc.Number}</td>
            <td><a href="#">Download</a> </td>
            </tr>
          </React.Fragment>         
         ) )
      );
    }

    render() { 
        return ( 
        <div id="myvehicle-container" >

        {/* <img src={Jordan} alt="profile picture" id="vehicle-picture"  />
                <br />
                <div className="myprofile-imagebox">  
                  <h4> Name</h4>
                  <p>Vehicle Number</p>
                </div> */}
                <h3>My RC</h3>

          <table>            
            <tr>
              <th>Serial No</th>
              <th>RC Number</th>
              <th>Download RC</th>
            </tr>
            
            {this.renderRClist()}

          </table>
        </div>
         );
    }
}
 
export default MyVehicle;