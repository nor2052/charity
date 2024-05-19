import React from 'react';
// import { Link} from 'react-router-dom';
import {  Routes, Route } from 'react-router-dom';
import DataCard from './dataCard';
import Project from './project';
import Easy from './eazy';
import Help from './Help';
import FormDonation from './FormDonation';
import Free from './free';

function Main() {
    return (
        <div className='dip'>
            <Routes>
            <Route path="/DataCard" component={DataCard} />
            <Route path="/Project" component={Project} />
            <Route path="/Easy" component={Easy} />
            <Route path='/FormDonation' component={FormDonation} />
            <Route path='/Free' component={Free} />
            </Routes>
        <p className='title2'>إغاثة ملهوف</p>
        <Help />
        <br/><br/><br/><br/><br/>
        <p className='title2'>تيسرت</p>
        <Easy />
         </div>
    );
}

export default Main;
