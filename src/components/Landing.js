import React, { Component } from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
class First extends Component {
    render() {
        return (
         <div>
            <div className='body'>
                <div className='content-box'>
                <img src='logo.jpg' alt='logo' />
                <Link to='/sign' style={{color:'white' ,fontSize:'30px'}}>Sign-up</Link>
                <h1> Smart Charging Station powered by GATS </h1>
                </div>
            </div>
        </div>
        )
    }
}

export default First
