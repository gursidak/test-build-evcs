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
   
   RenderList = () => {
    return this.state.list.map((ele) => (<li key={ele.key} className='list-group-item'>{ele.value}</li>));
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
                                    {this.RenderList()}
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
