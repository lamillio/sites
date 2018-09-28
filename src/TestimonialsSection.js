import React, { Component } from 'react';
import './Testimonials.css';

class TestimonialsSection extends Component {
  render() {
    return (
        <section className="section-testimonials">
            <div className="row">
                <h2>Our Future customers love us</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-3">
                    <blockquote>
                        LaMill is just awesome! I just launched a startup which leaves me with no time for do most of OS/Linux related tasks, so LaMill is a life-saver.
                        <cite><img src={require("./img/customer-1.jpg")}  alt="Person" />Alberto Duncan, Fake person</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                        LaMill made the whole process simple. My site is fast now and easy to work with. Professional execution  by LaMill saved my project time and money.  
                        <cite><img src={require("./img/customer-2.jpg")} alt="Person" />Joana Silva, Fake person</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                        I was looking for quick and easy delivery of my project.
                        I tried a lot of them and ended up with LaMill. Best  service. Keep up the great work!
                        <cite><img src={require("./img/customer-3.jpg")} alt="Person" />Milton Chapman, Fake person</cite>
                    </blockquote>
                </div>
            </div>
        </section>
    );
  }
}

export default TestimonialsSection;