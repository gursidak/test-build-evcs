import React from 'react';
import { Route , Switch } from 'react-router-dom';
import Landing from './Landing';
import Sign from './Sign';
import Waiting from './Waiting';
import AddVehicleInfo from './AddVehicleInfo';
import FetchSubmitInfo from './FetchSubmitInfo';
import caraousel from './caraousel';


const Main = () => (
    <switch>
        <Route exact path='/' component={Landing} />
        <Route path='/sign' component={Sign} />
        <Route path='/Waiting' component={Waiting} />
        <Route path='/AddVehicleInfo' component={AddVehicleInfo} />
        <Route path='/SubmitFetch' component={FetchSubmitInfo} />
        <Route path='/caraousel' component={caraousel} />


    </switch>
)

export default Main;