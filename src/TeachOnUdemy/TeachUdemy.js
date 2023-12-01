import React, { useState } from "react";
import "../TeachOnUdemy/TeachUdemy.css";

function TeachUdemy() {

        const [activeRoute, setActiveRoute] = useState(0);
      
        const handleRouteClick = (index) => {
          setActiveRoute(index);
        };

        const contentData = [
            {
              text: "You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.",
              subText: "The way that you teach — what you bring to it — is up to you.",
              howWeHelp: "We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.",
              imageSrc: "https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
            },
            {
              text: "Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.",
              subText: "If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.",
              howWeHelp: "Our support team is available to help you throughout the process and provide feedback on test videos.",
              imageSrc: "https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
            },
            {
              text: "Gather your first ratings and reviews by promoting your course through social media and your professional networks.",
              subText: "Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.",
              howWeHelp: "Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.",
              imageSrc: "https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
            }
          ];

    return(
        <>
            <div className="Techudemy">
                    <div className="TuContainer1">
                            <div className="TuContainer1_item1">
                                    <h1 className="TuContainer1_item1_H1">Come teach with us</h1><br/>
                                    <p>Become an instructor and change lives — including your own</p><br/>
                                    <button className="get_start_btn">Get started</button>
                            </div>
                    </div>
            </div><br/>

            <div className="TuContainer1_item2">
                <h1 className="TuContainer1_item2_h1">So many reasons to start</h1><br/>

                <div className="TuContainer1_item2_part1">
                        <div className="TuContainer1_item2_part1_1">
                                <img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="tecmeimg" />
                                <h2>Teach your way</h2>
                                <p className="Reson_p">Publish the course you want, in the way you want, and always have control of your own content.</p>
                        </div>

                        <div className="TuContainer1_item2_part1_1">
                                <img src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="tecmeimg" />
                                <h2>Teach your way</h2>
                                <p className="Reson_p">Publish the course you want, in the way you want, and always have control of your own content.</p>
                        </div>

                        <div className="TuContainer1_item2_part1_1">
                                <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="tecmeimg" />
                                <h2>Teach your way</h2>
                                <p className="Reson_p">Publish the course you want, in the way you want, and always have control of your own content.</p>
                        </div>
                </div>
            </div><br/>

            <div className="information">
                    <div className="information_1">
                            <div className="information_1_1">
                                    <h1 className="information_1_1_h1">62M</h1>
                                    <p>Students</p>
                            </div>

                            <div className="information_1_1">
                                    <h1 className="information_1_1_h1">75+</h1>
                                    <p>Languages</p>
                            </div>

                            <div className="information_1_1">
                                    <h1 className="information_1_1_h1">830M</h1>
                                    <p>Enrollments</p>
                            </div>

                            <div className="information_1_1">
                                    <h1 className="information_1_1_h1">180+</h1>
                                    <p>Countries</p>
                            </div>

                            <div className="information_1_1">
                                    <h1 className="information_1_1_h1">15,000+</h1>
                                    <p>Enterprise customers</p>
                            </div>
                    </div>
            </div><br/>

            <div className="HowToBeing">
                    <h1 className="HowToBeing_h1">How To Begin</h1><br/><br/>
                    
                    <div className="HowToBeing_route">
                            <h2
                                className={`HowToBeing_route_h2 ${activeRoute === 0 ? 'active' : ''}`}
                                onClick={() => handleRouteClick(0)}
                            >
                                Plan your curriculum
                            </h2>
                            <h2
                                className={`HowToBeing_route_h2 ${activeRoute === 1 ? 'active' : ''}`}
                                onClick={() => handleRouteClick(1)}
                            >
                                Record your video
                            </h2>
                            <h2
                                className={`HowToBeing_route_h2 ${activeRoute === 2 ? 'active' : ''}`}
                                onClick={() => handleRouteClick(2)}
                            >
                                Launch your course
                            </h2>
                    </div><hr/><br/>
                    
                    <div className="HowToBeing_content">
                            <div className="HowToBeing_content1">
                                <p className="HowToBeing_content1_p">{contentData[activeRoute]?.text}</p>
                                <p className="HowToBeing_content1_p">{contentData[activeRoute]?.subText}</p><br/>
                                <h2>How we help you</h2><br/>
                                <p className="HowToBeing_content1_p">{contentData[activeRoute]?.howWeHelp}</p>
                            </div>

                            <div className="HowToBeing_content11">
                                <img src={contentData[activeRoute]?.imageSrc} alt="howtobeingimg" />
                            </div>
                    </div>
            </div><br/>

                <div className="peopleReview">
                    <div className="peopleReview_img">
                        <img src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg" alt="peopleimg" />
                    </div>
                    <div className="peopleReview_content">
                        <p className="HowToBeing_content1_p2">“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p><br/>
                        <h3>Frank Kane</h3>
                        <p>Data Science & IT Certifications</p>
                    </div>
                </div><br/>

            <div className="foralone">
                    <div className="foralone1">
                            <img src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="foralonimg" />
                    </div>

                    <div className="foralone1 foralone111">
                            <h1>You won’t have to do it alone</h1><br/>
                            <p className="foralone222">Our <span className="alonespan">Instructor Support Team</span> is here to answer your questions and review your test video, while our <span className="alonespan">Teaching Center</span> gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our <span className="alonespan">online community.</span></p><br/>

                            <a className="foralong_a">Need more detailsbefoure you start? Learn more.</a>
                    </div>

                    <div className="foralone1">
                            <img src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="foralonimg" />
                    </div>
            </div><br/>


            <div className="lasttechme">
                    <h1 className="lasttechme_h">Become an instructor today</h1><br/>
                    <p className="lasttechme_p">Join one of the world’s largest online learning marketplaces.</p><br/>

                    <button className="lasttechme_btn">Get started</button>
            </div>


        </>
    )
}

export default TeachUdemy;