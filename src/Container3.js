import React, { Component } from 'react';
import arrow2 from "./Icons/icon-angle-arrow-down-green.png";
import image1 from "./buyCoffee.jpg";
import image2 from "./buyTea.jpg";
import image3 from "./buyEquipment.png";
import './Container3.css';

class Container3 extends Component {
    render() {
      return ( 
            <div className="grid-container3">
                <div className="shopTitle">
                    <div className="title2"> The Stu Shop </div>
                </div>
                <div className="arrow2">
                    <img src={arrow2} className="arrowImg2" alt="arrow2" />
                </div> 
                <div className="container3">
                    <div className="buyCoffee">
                        <img src={image1} className="image1" alt="image1" /> 
                    </div>
                    <div className="titleCoffee">    
                        <div className="coffeeTitle">Shop Coffee</div>
                    </div>
                    <div className="buyTea">
                        <img src={image2} className="image2" alt="image2" />
                    </div>    
                    <div className="textTea">     
                        <div className="teaTitle">Shop Tea</div>
                    </div>
                    <div className="buyEquipment">
                        <img src={image3} className="image3" alt="image3" /> 
                    </div>
                    <div className="textEquipment">     
                        <div className="equipmentTitle">Shop Equipment</div>
                    </div>
                    <div className="DescripCoffee">
                        <div className="coffeeText">Hand-roasted coffee, delivered fresh for ultimate flavour.</div>
                    </div>
                    <div className="DescripTea">
                        <div className="teaText">Our finest selection of premium whole leaf tea</div>
                    </div>
                    <div className="DescripEquip">
                        <div className="equipText">Brewers and presses for making the perfect Stu at home.</div>
                    </div>
                </div>
            </div>
      );
    }
}  

export default Container3;