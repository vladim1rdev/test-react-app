import React from 'react';
import Pdf from '../doc/CV.pdf'

function onResumeClick(){
    window.open(Pdf);
}

const AboutMe = () => {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="about_inner">
                        <img className="about_photo" src="images/designer_photo.png" alt=""/>

                        <div className="about_content">
                            <h3 className="about_title">about me</h3>
                            <h2 className="about_bigtitle">who am i</h2>
                            <div className="about_text">
                                <p>My name is Vladimir. I was born in the capital of Kazakhstan - Nur-Sultan. I am 26 years old. Graduated from Nazarbayev Intellectual School in 2013. After that, I completed bachelor's and master's degrees at Dubna University, majoring in nuclear physics. At the moment I am a junior researcher at the Joint Institute for Nuclear Research. I was engaged in modeling the passage of particles by the Monte Carlo method. Last year I became interested in developing frontend applications. Ever since school, when we were taught the basics of html and Photoshop, I was interested in working with the design and client side of applications.</p>
                            </div>
                            <button className="btn" type="button" onClick={onResumeClick}>see my resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;