import React, { Component } from 'react'
import './App.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class carousel extends Component {
    render() {
        return (
            <OwlCarousel
                className="owl-theme"
                items='1'
                autoplay
                loop
            >
                {/* <div className=''><img src='logo.jpg' /></div> */}
                <div className='item'><img alt="carouselImg1" src='logo.jpg' /></div>
                <div className='item'><img alt="carouselImg2" src='logo.jpg' /></div>
                <div className='item'><img alt="carouselImg3" src='logo.jpg' /></div>
                <div className='item'><img alt="carouselImg4" src='logo.jpg' /></div>
            </OwlCarousel>
        )
    }
}

export default carousel