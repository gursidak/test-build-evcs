import React, { Component } from 'react'
import {Layout, Textfield,  Navigation, Header, Drawer, Content} from 'react-mdl';
import Button from 'react-bootstrap/Button';

class MainView extends Component {
    state = { list :[
        {key:0 , value:'Singh Gas Station'},
        {key:1 , value:'Goyal Gas Station'},
        {key:3 , value:'Jha Gas Station'}
    ]
   } 
    render() {
        
    
        return ( 
            <div className='MainView'>
                <div className="demo-big-content">
                    <Layout fixedHeader >
                        <Header title="EVCS" scroll>
                            <Navigation>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="EVCS">
                            <Navigation>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content>

                            <div className="page-content">
                                <div className="card" style={{width: "100%" , textAlign:'center'}}>
                                 <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                </ul> 
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </div>
            </div>
         );
}
}
 
export default MainView;

