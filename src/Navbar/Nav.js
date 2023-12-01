import React, { useEffect, useState } from "react";
import "../Navbar/Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Nav(){
    
    const totalItems = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0)) || 0;

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isTecDropdownVisible, setTecDropdownVisible] = useState(false);
    const [IsProfilevisible, SetProfileVisible] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleTecDropdownToggle = () => {
        setTecDropdownVisible(!isTecDropdownVisible);
    };

    const handleProfilecDropdownToggle = () => {
        SetProfileVisible(!IsProfilevisible);
    };

    const tokenforAuth = localStorage.getItem("token");

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          const token = localStorage.getItem("token");
          console.log("Token:", token);  
          if (token) {
            try {
            //   const response = await fetch("https://ecommerce-project-8m5d.onrender.com/api/finduser", {
                const response = await fetch("http://localhost:8008/api/finduser", {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
    
              if (response.ok) {
                const user = await response.json();
                setUserData(user);
              } else {
                // Handle error when fetching user data
                console.error("Failed to fetch user data");
              }
            } catch (error) {
              // Handle other errors
              console.error("Error fetching user data:", error);
            }
          }
        };
    
        fetchUserData();
      }, []);

      const nav = useNavigate();
      const handelLogout = () => {
        localStorage.removeItem("token")
        nav('/login')
        window.location.reload(true)
    }


    const [searchItem, setSearchItem] = useState("");
    const handleInput = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value);
    }
    const handleSearch = async () => {

        if (!searchItem.trim()) {
            alert('Please fill in the search field first.');
            return;
          }

        try {
            const response = await axios.get(`http://localhost:8008/api/search?searchItem=${searchItem}`);
            const searchData = response.data;
            console.log(response.data);
            console.log(searchData.length);
            if (searchData.length === 0) {
                alert("Results not found!");
                setSearchItem("");
                nav("/");
            }
            else {
                nav("/SearchItem", { state: { searchData, searchItem } });
                setSearchItem("");
            }
        }
        catch (err) {
            console.log("Error searching:", err);
        }
    }


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
                                                                <li className="lionhover"><NavLink to="/Business/Managements">Managements</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Business/Business_Strategy">Business Strategy</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Business/Operations">Operations</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Business/Human_Resources">Human Resources</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/Finance_Accounting">Finance and Accounting</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Finance_Accounting/Accounting_Bookkeeping">Accounting & Bookkeeping</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Finance_Accounting/Compliance">Compliance</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Finance_Accounting/Economic">Economic</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Finance_Accounting/Finance">Finance</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Finance_Accounting/Taxes">Taxes</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/IT_Software">IT & Software</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/IT_Software/IT_Certification">IT Certification</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/IT_Software/Network_Security">Network & Security</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/IT_Software/Hardware">Hardware</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/IT_Software/Operating_System">Operating system & Servers</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/IT_Software/Other_ITSoftware">Other IT & Software</NavLink></li>
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
                    <input className="serchbar" style={{ fontSize: "16px" }} value={searchItem}  onChange={handleInput} placeholder="Search for anything"/><button className="searchiconBtn" onClick={handleSearch}><img className="searchicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEh_35CCxsTtQsJ3yZCojZHqWBq2ny9sBhP0Mq_AfITKrCogKgSHYftY-giG-rBhHYjc&usqp=CAU" alt="searchimg" /></button>
                </div>
                <div className="login">
                    <button className="teachon dropdown" onMouseEnter={handleTecDropdownToggle} onMouseLeave={handleTecDropdownToggle}><NavLink to="/TeachUdemy" className="mylearning teachon">Teach On Udemy</NavLink>
                        {isTecDropdownVisible && (
                                <div className="dropdown-teachon">
                                    <h3>Turn what you know into an opportunity and reach millions around the world.</h3>
                                    <button className="dropdown-teachon_btn">Lern more</button>
                                </div>
                        )}
                    </button>
                {localStorage.getItem("token") ? (            
                    <button className="cartbtn"><NavLink to="/Cart"><img className="cartimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBCXqF1rdOYnyCZjSGCFQXGOVCKLMcgnQyRYdvHeU4XkdGnhJ" alt="CartImg" /></NavLink>{totalItems}</button>
                ): (    
                    <button className="cartbtn"><NavLink to="/login"><img className="cartimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBCXqF1rdOYnyCZjSGCFQXGOVCKLMcgnQyRYdvHeU4XkdGnhJ" alt="CartImg" /></NavLink>{totalItems}</button>
                )}

                    {tokenforAuth || userData ?
                        (<>
                            <div>
                                <button className="teachon mylearning"><NavLink to="/Mylearning" className="mylearning teachon">My Learning</NavLink></button>
                            </div>
                                <button className="myProfile dropdown" onMouseEnter={handleProfilecDropdownToggle} onMouseLeave={handleProfilecDropdownToggle}>
                                    {userData && userData.name? userData.name.split(" ").map(word => word[0].toUpperCase()).join(""): "U"}

                                {IsProfilevisible && (
                                    <div className="dropdown-myProfile">
                                        <div className="afterlogin1">
                                                <div className="afterlogin2">
                                                    <h2>{userData && userData.name? userData.name.split(" ").map(word => word[0].toUpperCase()).join(""): "Profile"}</h2>
                                                </div>
                                                <div className="afterlogin3">
                                                    <h3>{userData && userData.name ? userData.name.split(" ").slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "Profile"}</h3>
                                                    <p>{userData && userData.email ? userData.email : "User Email"}</p>
                                                </div>
                                        </div><hr/><br/>
                                        <button className="signupbtn btn" onClick={handelLogout}>LogOut</button>
                                        <br/><br/>
                                    </div>
                                )}
                                </button>
                        </> )  
                    : 
                        (<>
                            <button className="loginbtn btn"><NavLink to="/login" className="loginbtn">Log in</NavLink></button>
                            <button className="signupbtn btn"><NavLink to="/register" className="signupbtn">Sign up</NavLink></button>
                        </>)
                    }   
                    
                       
                </div>
            </div>
        </>
    )
}

export default Nav;