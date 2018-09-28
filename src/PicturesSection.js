import React, { Component } from 'react';
import './Pictures.css';

class PicturesSection extends Component {
  render() {
    return (
        <section className="section-pictures">
            <ul className="pics-showcase clearfix">
                <li>
                    <figure className="pics-photo">
                        <img src={require('./img/lens2.jpg')} alt="Pictures"></img>
                    </figure>
                </li>
                <li>
                    <figure className="pics-photo">
                        <img src={require("./img/windmill.jpg")}  alt="Pictures"/>
                    </figure>
                </li>
                <li>
                    <figure className="pics-photo">
                        <img src={require("./img/lens.jpg")}  alt="Pictures"/>
                    </figure>
                </li>
                <li>
                    <figure className="pics-photo">
                        <img src={require("./img/bridge.jpg" )} alt="Pictures"/>
                    </figure>
                </li>
            </ul>
            <ul className="pics-showcase clearfix">
                <li>
                    <figure className="pics-photo">
                        <img src={require("./img/comp1.jpg" )} alt="Pictures"/>
                    </figure>
                </li>
                <li>
                    <figure className="pics-photo">
                        <img src={require("./img/comp2.jpg" )} alt="Pictures"/>
                    </figure>
                </li>
                <li>
                    <figure className="pics-photo">
                        <img src={require("./img/comp2.jpg" )} alt="Pictures"/>
                    </figure>
                </li>
                <li>
                    <figure className="pics-photo">
                        <img src={require("./img/comp1.jpg" )} alt="Pictures"/>
                    </figure>       
                </li>
            </ul>
        </section>   
    );
  }
}

export default PicturesSection;