import React, { Component } from 'react';

class About extends Component {
    state = {}
    render() {
        return (

            <React.Fragment>
                <title>About me</title>
                <div class="header">
                    <h1>About me</h1>
                    <div class="dropdown">
                        <button class="dropbtn">Menu</button>
                        <div class="dropdown-content">
                            <div>
                                <nav>
                                    <a href="index.html">Home</a>
                                    <a href="About-me.html">About</a>
                                    <a href="Contact.html">Contact</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero">

                </div>
                <div class="content">

                    <div class="brick-breaker">
                        <a href="http://www.lhssa.org/">
                            <img src="http://www.lhssa.org/wp-content/uploads/2016/09/LutheranHighSchoolLogo.png" class="float-left"
                                alt="Example" width="300" height="450" />
                        </a>
                        <h2>High School</h2>
                        <p>
                            Lutheran high school of San Antonio college prepratory school is where I started my journey into the
                            tech world! There I met my first technology mentor Mr. Andrew Eickstead!
                            He started as just my computer one teacher to start us on the basics, but he came to my freshman study
                            hall one day and asked if anyone wanted to join the robotics club for
                            extracurricular credits, and I joined! Here I learned to code, design, and build robots! Click the link
                            to where the rest of my life started.
                        </p>
                    </div>
                    <div id="online-reputation-management" class="online-reputation-management">
                        <a href="spotify:playlist:7hK487TMahiIx4oN9ZXsvi">
                            <img src="https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/708/2016/05/12151716/5941bb8de2a544d4-DSC_0927.jpg"
                                alt="Example" class="float-right" />
                        </a>
                        <h2>Sports Life</h2>
                        <p>
                            In my life sports played a big part in painting who I am and my past experience. My dad was an athletic
                            director at my old middle school,
                            which made sports almost a center point of my earlier life. I played in various sports including soccer,
                            baseball, and basketball.
                            All of these sports followed me through highschool, and I even feel that it had a positive effect on my
                            academic life.
                        </p>
                    </div>
                    <div id="social-media-marketing" class="social-media-marketing">
                        <a href="https://www.firstinspires.org/robotics/ftc">
                            <img src="https://news.psu.edu/sites/default/files/styles/threshold-992/public/FTC%202016.jpg?itok=T48IVmyn"
                                alt="Example" class="float-left" />
                        </a>
                        <h2>JSTI</h2>
                        <p>
                            One of my favorite accomplishments in highschool was being invited to join a camp hosted by the DOD and
                            Homeland security called JSTI or Joint Science and Technology Institute.
                            There I was placed into a group called water quality where I learned a great deal about our water system
                            and what all goes into keeping our water clean and keeping us safe.
                        </p>
                    </div>
                </div>
                <div class="benefits">
                    <div class="benefit-lead">
                        <a href="https://www.linkedin.com/in/noah-raesch-bb1b07155/" target="_blank" style={{ color: 'black' }} black rel="noopener noreferrer">
                            <h3>
                                <strong>LinkedIn</strong>
                            </h3>
                        </a>
                        <img src="./assets/images/lead-generation.png" alt="Example" />
                        <p>
                            Click the title to follow to my LinkedIn account! Feel free to add and contact me there!
                        </p>
                    </div>
                    <div class="benefit-brand">
                        <a href="https://github.com/noahnr" target="_blank" style={{ color: 'black' }} black rel="noopener noreferrer">
                            <h3><strong>Git Hub</strong></h3>
                        </a>
                        <img src="./assets/images/brand-awareness.png" alt="Example" />
                        <p>
                            Click the title to follow to my github account to see all the work I've done throughout the school year!
                        </p>
                    </div>
                    <div class="benefit-cost">
                        <a href="Resume For Web Developer.pdf" target="_blank" style={{ color: 'black' }} black rel="noopener noreferrer">
                            <h3><strong>Resume</strong></h3>
                        </a>
                        <img src="./assets/images/cost-management.png" alt="Example" />
                        <p>
                            Click the title to follow to a PDF of my resume!
                        </p>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default About;