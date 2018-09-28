import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Waypoint from 'react-waypoint';
import './Header.css';


class Header extends Component {
    constructor() {
        super();
        
        this.handleScrollUp = this.handleScrollUp.bind(this);
        this.handleScrollDown = this.handleScrollDown.bind(this);
        this.state = {
            navclass: "sticky",
        }
    }
    
    handleScrollDown() {
        this.setState({navclass:"sticky"});
    }
    
    handleScrollUp() {
        this.setState({navclass: ""});
    }
    
    render() {
        return (
            <header>
                <nav className={this.state.navclass}>
                    <div className="row">
                        <ul className="main-nav js--main-nav">
                            <li><a href="#services">Services</a></li>
                            <li><a href="#content">Content</a></li>
                            <li><a href="#software">Software</a></li>
                            <li><a href="#form">Signup</a></li>
                        </ul>
                        <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                    </div>
                </nav>
                <Waypoint onEnter={this.handleScrollUp}
                          onLeave={this.handleScrollDown}>
                    <div className="hero-text-box">
                        <h1><span className="normal">LaMill - <br/>Build. Learn. Advance.</span></h1>
                        <a className="btn btn-full js--scroll-to-form" href="#form">Signup</a>
                        <a className="btn btn-ghost js--scroll-to-services" href="#services">Show me more</a>
                    </div>
                </Waypoint>
            </header>
        );
    }
}

export default Header;
