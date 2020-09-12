import React, { Component } from 'react';

import {ListItem, ListItemAction, ListItemContent} from 'react-mdl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

class Bookings extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            activeBookings:[

                {key:1, StationName:"Gursidak Gas Station", date:"August 26,2020", daysPending:"Days_Pndng" },
                {key:2, StationName:"Aman Gas Station", date:"August 26,2020"    , daysPending:"Days_Pndng" },
                {key:3, StationName:"Rapid Gas Station", date:"August 26,2020"   , daysPending:"Days_Pndng" }

                
            ]
        
        
        };

        this.renderContent = this.renderContent.bind(this);
    }

    renderContent(){
        
        return (
            <div>
                {this.state.activeBookings.map((vendor) => {
        
                return(
                    < ListItem key={vendor.key} className='' threeLine >
                    <ListItemContent onClick={() => { this.changeFocus(vendor) }} subtitle={vendor.date}> {vendor.StationName}
                    </ListItemContent>
                    <ListItemAction>
                        <FontAwesomeIcon icon={faCalendarAlt} id="daysPendingIcon" />  
                        <p>{vendor.daysPending} </p>
                    </ListItemAction>
                    
                    </ ListItem >
                )
        
                    
                } )}
            </div>
        )


    
    }

    render() {
        return (
       
                <section className="bookings" >
                    {this.renderContent()}
                </section>
        );
    }
}

export default Bookings;








// return (
//     <div>

//     </div>
// )