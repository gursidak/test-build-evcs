import React, { Component } from 'react';
 import OwlCarousel from 'react-owl-carousel';
 import 'owl.carousel/dist/assets/owl.carousel.css';
 import 'owl.carousel/dist/assets/owl.theme.default.css';
 import carousel1 from "./jordan.jpg"
 import carousel2 from "./J.jpg" 

 import "./App.css"
 
const options = {
    items: 8,
};



class VendorCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <OwlCarousel
                className="owl-carousel owl-theme"
                autoplay  
                margin={1}
                // items={9}
                autoWidth='true'
                nav
                {...options}
            >
                <div  className="img"> <img src={carousel1} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel2} alt="vendor-station-picture" /> </div>
                <div  className="img"> <img  src={carousel1} alt="vendor-station-picture" /> </div>

                </OwlCarousel>
         );
    }
}
 
export default VendorCarousel;