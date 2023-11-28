import React, { useState } from "react";
import "../Navbar/Nav.css";
import Dropdown from "./Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

function Nav(){

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isTecDropdownVisible, setTecDropdownVisible] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleTecDropdownToggle = () => {
        setTecDropdownVisible(!isTecDropdownVisible);
    };

    return(
        <>
            <div className="nav">
                <div className="logo1">
                    <NavLink to="/"><img className="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="LogoImg" /></NavLink>
                    {/* <button className="category">
                        {/* Categories */}
                        {/* <Dropdown /> */}
                    {/* </button> */} 

                    <div className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                        <button className="category">Category</button>
                        {isDropdownVisible && (
                            <div className="start-dropdown">
                                <div className="dropdown-content">
                                    <div className="dropdown-content_border">
                                        <ul>
                                            <li className="lionhover"><NavLink to="/Business">Business</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Business/Communication">Communication</NavLink></li>
                                                                <li className="lionhover">Managements</li>
                                                                <li className="lionhover">Business Strategy</li>
                                                                <li className="lionhover">Operations</li>
                                                                <li className="lionhover">Human Resources</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Finance and Accounting
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Accounting & Bookkeeping</li>
                                                                <li className="lionhover">Compliance</li>
                                                                <li className="lionhover">Economic</li>
                                                                <li className="lionhover">Finance</li>
                                                                <li className="lionhover">Taxes</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">IT & Software
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">IT Certification</li>
                                                                <li className="lionhover">Network & Security</li>
                                                                <li className="lionhover">Hardware</li>
                                                                <li className="lionhover">Operating system & Servers</li>
                                                                <li className="lionhover">Other IT & Software</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Design
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Web Design</li>
                                                                <li className="lionhover">Game Design</li>
                                                                <li className="lionhover">3D & Animation</li>
                                                                <li className="lionhover">Fashion Design </li>
                                                                <li className="lionhover">Other Design</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Marketing
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Digital Marketing</li>
                                                                <li className="lionhover">Social Media Marketing</li>
                                                                <li className="lionhover">Public Relationship</li>
                                                                <li className="lionhover">Content Marketing</li>
                                                                <li className="lionhover">Product Marketing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Life Style
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Arts & Crafts</li>
                                                                <li className="lionhover">Beauty & Makeup</li>
                                                                <li className="lionhover">Food & Beverage</li>
                                                                <li className="lionhover">Pet Care & Training</li>
                                                                <li className="lionhover">Travel</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Photography & Video
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Digital Photography</li>
                                                                <li className="lionhover">Photography</li>
                                                                <li className="lionhover">Video Design</li>
                                                                <li className="lionhover">Commercial Photography</li>
                                                                <li className="lionhover">Photography Tools</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Music & Arts
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Instruments</li>
                                                                <li className="lionhover">Music Production</li>
                                                                <li className="lionhover">Vocal</li>
                                                                <li className="lionhover">Music Software</li>
                                                                <li className="lionhover">Music Techniques</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Health & Fitness
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Fitness</li>
                                                                <li className="lionhover">Sport</li>
                                                                <li className="lionhover">Yoga</li>
                                                                <li className="lionhover">Mental Health</li>
                                                                <li className="lionhover">Dance</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover">Teaching & Academic
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover">Engineering</li>
                                                                <li className="lionhover">Math</li>
                                                                <li className="lionhover">Science</li>
                                                                <li className="lionhover">Social Science</li>
                                                                <li className="lionhover">Teacher Training</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="serchbar1">
                    <input className="serchbar" placeholder="Search for anything" />
                </div>
                <div className="login">
                    <button className="teachon dropdown" onMouseEnter={handleTecDropdownToggle} onMouseLeave={handleTecDropdownToggle}>Teach On Udemy
                        {isTecDropdownVisible && (
                                <div className="dropdown-teachon">
                                    <h3>Turn what you know into an opportunity and reach millions around the world.</h3>
                                    <button className="dropdown-teachon_btn">Lern more</button>
                                </div>
                        )}
                    </button>    
                    <button className="cartbtn"><img className="cartimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBCXqF1rdOYnyCZjSGCFQXGOVCKLMcgnQyRYdvHeU4XkdGnhJ" alt="CartImg" /> </button>
                    <button className="loginbtn btn">Log in</button>
                    <button className="signupbtn btn">Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Nav;