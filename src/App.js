import React, { Component } from 'react';
import logo from './logo.png';
import background from './StubucksHero.jpg';
import './App.css';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='grid-container'>
        <div className='banner'></div>
        <img src={logo} className="app-logo" alt="logo" />
        <div className='gps'></div>
        <div className='menu'>   
          <nav className="menu-nav">
              <div className="blank">
                <a href=" #" className="blank"> </a>
              </div>
              <div className="coffee">
                <a href=" #" className="coffeePage">Coffee</a>
              </div>
              <div className="tea">
                <a href=" #" className="teaPage">Tea</a>
              </div>
              <div className="menu-item">
                <a href=" #" className="menu-itemPage">Menu</a>
              </div>
              <div className="rewards">
                <a href=" #" className="rewardsPage">Rewards</a>
              </div>
              <div className="join">
                <a href=" #" className="joinPage">Want to join our team?</a>
              </div>
              <div className="locations">
                <a href=" #" className="locationsPage">Locations</a>
              </div>
              <div className="specials">
                <a href=" #" className="specialsPage">Specials</a>
              </div>
            </nav>
        </div>
        <div className='container1'>
          <img src={background} className= "app-background" alt="background" />
        </div>
        </div>
        <Container2 />
        <Container3 />
        <Container4 />
      </div>

    );
  }
}

export default App;
