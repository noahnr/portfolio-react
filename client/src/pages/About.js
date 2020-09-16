import React from "react";
import { Card, CardTitle, CardText } from "../components/Card";

function About() {
    return (
        <Card>
            <CardTitle title="About" extClass="text-left" />
            <hr />
            <CardText>
                <img
                    className="float-left rounded"
                    alt="Noah Soukup"
                    src="img/profilepic.jpeg"
                    style={{
                        height: "150px",
                        width: "150px",
                        marginRight: "20px"
                    }}
                />
                <p style={{ fontSize: "40px" }} >
                    <a href="https://www.linkedin.com/in/noah-raesch-bb1b07155/"><i className="fab fa-linkedin p-1"></i></a>
                    <a href="https://github.com/noahnr"><i className="fab fa-github-square p-1"></i></a>
                    <a href="img/Resume.PDF"><i className="far fa-file p-1"></i></a>
                    <a href="mailto:noahsoukupraesch@gmail.com"><i className="far fa-envelope p-1"></i></a>
                </p>
                <h2>High School</h2>
                <p>
                    Lutheran high school of San Antonio college prepratory school is where I started my journey into the
                    tech world! There I met my first technology mentor Mr. Andrew Eickstead!
                    He started as just my computer one teacher to start us on the basics, but he came to my freshman study
                    hall one day and asked if anyone wanted to join the robotics club for
                    extracurricular credits, and I joined! Here I learned to code, design, and build robots! Click the link
                    to where the rest of my life started.
                </p>
                <h2>Sports Life</h2>
                <p>
                    In my life sports played a big part in painting who I am and my past experience. My dad was an athletic
                    director at my old middle school,
                    which made sports almost a center point of my earlier life. I played in various sports including soccer,
                    baseball, and basketball.
                    All of these sports followed me through highschool, and I even feel that it had a positive effect on my
                    academic life.
            </p>
                <h2>JSTI</h2>
                <p>
                    One of my favorite accomplishments in highschool was being invited to join a camp hosted by the DOD and
                    Homeland security called JSTI or Joint Science and Technology Institute.
                    There I was placed into a group called water quality where I learned a great deal about our water system
                    and what all goes into keeping our water clean and keeping us safe.
            </p>

            </CardText>
        </Card>
    );
}

export default About;