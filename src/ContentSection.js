import React, { Component } from 'react';
import "./vendors/css/grid.css"; 
import Fade from 'react-reveal/Fade';
import './Content.css';

class ContentSection extends Component {
  render() {
    return (
        <section className="section-content section-steps" id="content">
            <div className="row">
                <h2>Content Creation</h2>
            </div>
        
            <Fade right>
                <div className="row ">
                    <div className="col span-1-of-4 box">
                        <img src={require("./img/articles.jpg")} height="165" alt="Articles"/>
                        <h3>Articles</h3>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Original Content
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Translation
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Search Engine friendly
                        </div>
                        <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                            <a href="#">@lamill_content</a>
                        </div>
                    </div>
                    <div className="col span-1-of-4 box">
                        <img src={require("./img/photos.jpg")}  height="165" alt="Photography"/>
                        <h3>Photography</h3>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Pictures
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Graphics
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Exclusive
                        </div>
                        <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                            <a href="#">@lamill_pics</a>
                        </div>
                    </div>
                    <div className="col span-1-of-4 box">
                        <img src={require("./img/videos.jpg")} height="165" alt="Videos"/>
                        <h3>Vidoes</h3>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Educational Videos
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Review Videos
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Entertainment
                        </div>
                        <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                            <a href="#">@lamill_studio</a>
                        </div>
                    </div>
                    <div className="col span-1-of-4 box">
                        <img src={require("./img/design.jpg")} height="165" alt="design"/>
                        <h3>Design</h3>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Web Design
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Digital Design
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            Infographics
                        </div>
                        <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                            <a href="#">@lamill_design</a>
                        </div>
                    </div>
            </div>
        </Fade>
        </section>
    );
  }
}

export default ContentSection;