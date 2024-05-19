import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './page/nav';
import Quran from './page/quran';
import Main from './page/mane'
import Project from './page/project';
import DataCard from './page/dataCard';
import Easy from './page/eazy';
import Help from './page/Help';
import FormDonation from './page/FormDonation';
import Free from './page/free';
function App() {
  return (
    <div className='App'>
      <Navbarr />
      <Quran />
      <Routes>
        <Route path="/"   element={<Main />} />
        <Route path="/FormDonation"  element={<FormDonation />} />
        <Route path="/Help"  element={<Help />} />
        <Route path="/Free"  element={<Free />} />
        <Route path="/Easy"     element={<Easy />} />
        <Route path="/DataCard" element={<DataCard />} />
      </Routes>
    </div>
  );
}

export default App;


