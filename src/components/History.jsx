import React, { Component } from 'react';
import {ListItem, ListItemContent, ListItemAction } from 'react-mdl';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class History extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            pastBookings :[
                                { key:1,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:2,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:3,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:4,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},                
                                { key:5,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:6,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:7,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:8,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},                
                                { key:9,  StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:10, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},                
                                { key:11, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:12, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"},
                                { key:13, StationName:"Gursidak Gas Station", date:"July 26,2020", paid:"₹400"}
                
                
                            ]
         }
        this.renderContent = this.renderContent.bind(this);
    }

    renderContent(){
        return(
            <div id="historyContainer">
        {this.state.pastBookings.map((vendor) => {

                    return(
                        <ListItem key={vendor.key} className='' threeLine >
                        <ListItemContent subtitle={vendor.date}> <a>{vendor.StationName}</a>
                        </ListItemContent>
                        <ListItemAction>
                            <FontAwesomeIcon icon={faCheckCircle} id="paymentDoneIcon" />
                            <p> {vendor.paid} </p>
                        </ListItemAction>
                        </ ListItem >
                    )
                        
                    } )}
        </div>
        )
    }

    render(){


        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
    


}
 
export default History;