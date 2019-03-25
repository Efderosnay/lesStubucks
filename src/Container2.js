import React, { Component } from 'react';
import background2 from './StubrewIcedCoffee.png';
import arrow from './Icons/icon- angle-arrow-down-white.png';
import './Container2.css';

class Container2 extends Component {
    render() {
      return (
            <div className="grid-container2">
                <div className="newProductTitle">
                    <div className="title1"> Try something new? </div>
                </div>
                <div className="arrow">
                <img src={arrow} className="arrow1" alt="arrow" />
                </div>
                <div className="container2">
                    <div className="background">
                        <img src={background2} className= "background2" alt="background2" />
                    </div>
                    <div className="textContent">
                        <div className="title">The new StuBrew</div>
                        <div className="description">
                            A delicious new nitro brew developed 
                            carefully on the darkside of the moon,
                            instilled with the freshness of Stu himself.
                        </div>
                    </div>
                </div>
                
            </div>
      );
    }
}  

export default Container2;