import React from 'react';
import MainPage from './components/mainPage.js';
import logo from "./data/logo.png";

const App = () => {
    return (
      <div style={{backgroundColor: 'black'}}>
          <img className='logo' src={logo} alt='logo' style={{height:'100px'}}/>
          <MainPage />
      </div>
    );
}

export default App;
