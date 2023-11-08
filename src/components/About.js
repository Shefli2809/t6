import React from 'react';
import image from './image.png';
import { TypeAnimation } from 'react-type-animation';

function About() {
    return (
        <div id="about-section" className="container text-start px-5 text-center text-dark" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center text-start">
                    <div >
                        <TypeAnimation
                            sequence={['Welcome!\n I am Shefali', 1000, "",]}
                            speed={50}
                            style={{ whiteSpace: 'pre-line', fontSize: '3em', fontWeight: 'bolder'}}
                            repeat={Infinity}
                        /><br /><br /><br />
                        <p>I'm a third year Computer Science and Engineering undergraduate, I am passionate about Web development, ML and AI.</p>
                        <p>My goal as a web developer is to create user-friendly websites and elegant web applications. I'm committed to learning and staying updated with new technologies to craft digital solutions that make a positive impact.</p>
                    </div>
                </div>

                <div className='col-md-2'></div>
                <div className="col-md-4">
                    <img src="https://images8.alphacoders.com/127/thumbbig-1279866.webp" alt="person image" className="img-round img-fluid border-dark" />
                </div>
            </div>
        </div>
    );
}

export default About;