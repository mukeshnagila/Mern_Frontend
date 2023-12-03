import React, { useEffect, useState } from "react";
import "../Navbar/Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5";

function Nav(){
    
    const totalItems = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0)) || 0;

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isTecDropdownVisible, setTecDropdownVisible] = useState(false);
    const [IsProfilevisible, SetProfileVisible] = useState(false);
    const [menuOpen, SetMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);  
    const [isDropdownOpen2, setDropdownOpen2] = useState(false);  
    const [isDropdownOpen3, setDropdownOpen3] = useState(false);  
    const [isDropdownOpen4, setDropdownOpen4] = useState(false);  
    const [isDropdownOpen5, setDropdownOpen5] = useState(false);  
    const [isDropdownOpen6, setDropdownOpen6] = useState(false);  
    const [isDropdownOpen7, setDropdownOpen7] = useState(false);  
    const [isDropdownOpen8, setDropdownOpen8] = useState(false);  
    const [isDropdownOpen9, setDropdownOpen9] = useState(false);  
    const [isDropdownOpen10, setDropdownOpen10] = useState(false); 

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

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
        SetMenuOpen(false);
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

                                            <li className="lionhover"><NavLink to="/Design">Design</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Desine/web_D">Web Design</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Desine/game_D">Game Design</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Desine/animation_D">3D & Animation</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Desine/fashion_D">Fashion Design</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Desine/other_D">Other Design</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/Marketing">Marketing</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Marketing/Digital_M">Digital Marketing</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Marketing/Media_M">Social Media Marketing</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Marketing/Public_M">Public Relationship</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Marketing/Content_M">Content Marketing</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Marketing/Product_M">Product Marketing</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/LifeStyle">Life Style</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/LifeStyle/Arts_S">Arts & Crafts</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/LifeStyle/Beauty_S">Beauty & Makeup</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/LifeStyle/Food_S">Food & Beverage</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/LifeStyle/Pet_S">Pet Care & Training</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/LifeStyle/Travel_S">Travel</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/Photography">Photography & Video</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Photography/Digital_p">Digital Photography</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Photography/Photo_p">Photography</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Photography/Video_p">Video Design</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Photography/Commercial_p">Commercial Photography</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Photography/Ptool_p">Photography Tools</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/Music">Music & Arts</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Music/Instruments_m">Instruments</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Music/Music_m">Music Production</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Music/Vocal_m">Vocal</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Music/Msoftware_m">Music Software</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Music/Mtechniqe_m">Music Techniques</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/Health">Health & Fitness</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Health/Fitness_h">Fitness</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Health/Sport_h">Sport</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Health/Yoga_h">Yoga</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Health/Mhealth_h">Mental Health</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Health/Dance_h">Dance</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="lionhover"><NavLink to="/Academic">Teaching & Academic</NavLink>
                                                <div className="business-dropdown">
                                                    <div className="start-2nddropdown">
                                                        <div className="dropdown-content">
                                                            <ul>
                                                                <li className="lionhover"><NavLink to="/Academic/Engineering_T">Engineering</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Academic/Math_T">Math</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Academic/Science_T">Science</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Academic/SScience_T">Social Science</NavLink></li>
                                                                <li className="lionhover"><NavLink to="/Academic/Training_T">Teacher Training</NavLink></li>
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

            <div className="navmobile">
                    <div className="navmobile_start">
                            <div className="menuspace">
                                <div className='menu' onClick={() => {
                                        SetMenuOpen(!menuOpen);
                                    }}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                </div>

                                <div id="close" className={menuOpen ? "open" : ""}>
                                    <div className='links'>
                                            
                                    {tokenforAuth || userData ?
                                            (<>
                                                
                                                    <button className="Navhover1" onMouseEnter={handleProfilecDropdownToggle} onMouseLeave={handleProfilecDropdownToggle}>
                                                        <div>
                                                            <div className="Navhover2">
                                                                    <div className="afterlogin2">
                                                                        <h2>{userData && userData.name? userData.name.split(" ").map(word => word[0].toUpperCase()).join(""): "Profile"}</h2>
                                                                    </div>
                                                                    <div className="afterlogin3">
                                                                        <h3>{userData && userData.name ? userData.name.split(" ").slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "Profile"}</h3>
                                                                        <p>{userData && userData.email ? userData.email : "User Email"}</p>
                                                                    </div>
                                                            </div><hr/>
                                                            <div><br/>
                                                                <button className="teachon "><NavLink to="/Mylearning" onClick={scrollToTop} className="mylearning teachon">My Learning</NavLink></button>
                                                            </div><br/><hr/>
                                                        

                                                            <div className="textalign" onClick={() => {
                                                                    setDropdownOpen(!isDropdownOpen);
                                                                }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Business</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Business/Communication">Communication</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Business/Managements">Managements</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Business/Business_Strategy">Business Strategy</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Business/Operations">Operations</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Business/Human_Resources">Human Resources</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}


                                                            <div className="textalign" onClick={() => {
                                                                setDropdownOpen3(!isDropdownOpen3);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Finance and Accounting</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen3 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Finance_Accounting/Accounting_Bookkeeping">Accounting & Bookkeeping</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Finance_Accounting/Compliance">Compliance</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Finance_Accounting/Economic">Economic</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Finance_Accounting/Finance">Finance</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Finance_Accounting/Taxes">Taxes</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )} 

         {/* ///////////////////////////////////////////  Start Here /////////////////////////////////////////////     */}

                                                            <div className="textalign" onClick={() => {
                                                                setDropdownOpen4(!isDropdownOpen4);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">IT & Software</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen4 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/IT_Software/IT_Certification">IT Certification</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/IT_Software/Network_Security">Network & Security</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/IT_Software/Hardware">Hardware</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/IT_Software/Operating_System">Operating system & Servers</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/IT_Software/Other_ITSoftware">Other IT & Software</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}   

         {/* ///////////////////////////////////////////  End Here /////////////////////////////////////////////     */}


         {/* ///////////////////////////////////////////  Start Here /////////////////////////////////////////////     */}

                                                            <div className="textalign" onClick={() => {
                                                                setDropdownOpen5(!isDropdownOpen5);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Design</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen5 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Desine/web_D">Web Design</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Desine/game_D">Game Design</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Desine/animation_D">3D & Animation</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Desine/fashion_D">Fashion Design</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Desine/other_D">Other Design</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}   

         {/* ///////////////////////////////////////////  End Here /////////////////////////////////////////////     */}

         {/* ///////////////////////////////////////////  Start Here /////////////////////////////////////////////     */}

                                                            <div className="textalign" onClick={() => {
                                                                setDropdownOpen6(!isDropdownOpen6);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Marketing</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen6 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Marketing/Digital_M">Digital Marketing</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Marketing/Media_M">Social Media Marketing</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Marketing/Public_M">Public Relationship</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Marketing/Content_M">Content Marketing</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Marketing/Content_M">Content Marketing</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}   

         {/* ///////////////////////////////////////////  End Here /////////////////////////////////////////////     */}

         {/* ///////////////////////////////////////////  Start Here /////////////////////////////////////////////     */}

                                                            <div className="textalign" onClick={() => {
                                                                setDropdownOpen7(!isDropdownOpen7);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Life Style</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen7 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/LifeStyle/Arts_S">Arts & Crafts</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/LifeStyle/Beauty_S">Beauty & Makeup</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/LifeStyle/Food_S">Food & Beverage</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/LifeStyle/Pet_S">Pet Care & Training</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/LifeStyle/Travel_S">Travel</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}   

         {/* ///////////////////////////////////////////  End Here /////////////////////////////////////////////     */}

         {/* ///////////////////////////////////////////  Start Here //////////////////////////8//////////////////     */}

                                                            <div className="textalign" onClick={() => {
                                                                setDropdownOpen8(!isDropdownOpen8);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Photography & Video</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen8 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Photography/Digital_p">Digital Photography</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Photography/Photo_p">Photography</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Photography/Video_p">Video Design</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Photography/Commercial_p">Commercial Photography</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Photography/Ptool_p">Photography Tools</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}   

         {/* ///////////////////////////////////////////  End Here /////////////////////////////////////////////     */}

         {/* ///////////////////////////////////////////  Start Here /////////////////////////////////////////////     */}

                                                            <div className="textalign" onClick={() => {
                                                                setDropdownOpen9(!isDropdownOpen9);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Music & Arts</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen9 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Music/Instruments_m">Instruments</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Music/Music_m">Music Production</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Music/Vocal_m">Vocal</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Music/Msoftware_m">Music Software</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Music/Mtechniqe_m">Music Techniques</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}   

         {/* ///////////////////////////////////////////  End Here /////////////////////////////////////////////     */}

         {/* ///////////////////////////////////////////  Start Here /////////////////////////////////////////////     */}

                                                        <div className="textalign" onClick={() => {
                                                                setDropdownOpen10(!isDropdownOpen10);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Health & Fitness</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen10 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Health/Fitness_h">Fitness</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Health/Sport_h">Sport</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Health/Yoga_h">Yoga</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Health/Mhealth_h">Mental Health</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Health/Dance_h">Dance</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}   

         {/* ///////////////////////////////////////////  End Here /////////////////////////////////////////////     */}
                                                                
                                                            <div className="textalign" onClick={() => {
                                                                    setDropdownOpen2(!isDropdownOpen2);
                                                            }}>
                                                                <button className="teachon dropcat"><NavLink className="mylearning teachon">Teaching & Academic</NavLink></button>
                                                            </div>
                                                            {isDropdownOpen2 && (
                                                                <div className={menuOpen ? "open open88" : ""}>
                                                                    {/* Dropdown content */}
                                                                    <ul>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Academic/Engineering_T">Engineering</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Academic/Math_T">Math</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Academic/Science_T">Science</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Academic/SScience_T">Social Science</NavLink></li>
                                                                        <li className="lionhover"><NavLink onClick={scrollToTop} className="lionhover12" to="/Academic/Training_T">Teacher Training</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                )}
                                                            <br/><hr/><br/>
                                                            
                                                            <button className="signupbtn btn" onClick={handelLogout}>LogOut</button>
                                                            <br/><br/>
                                                        </div>
                                                    </button>

                                            </> )  
                                        : 
                                            (<>
                                                <button className="loginbtn btn"><NavLink to="/login" className="loginbtn">Log in</NavLink></button>
                                                <button className="signupbtn btn"><NavLink to="/register" className="signupbtn">Sign up</NavLink></button>
                                            </>)
                                        }   

                                    </div>
                                    <div className="cencelsign">
                                        <button onClick={() => {SetMenuOpen(!menuOpen)}}><img className="cencelsign2" src="https://cdn-icons-png.flaticon.com/512/262/262037.png" alt="cancelimg" /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="menuspace">
                                <NavLink to="/"><img className="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="LogoImg" /></NavLink>
                            </div>
                        
                            <div className="menuspace">
                                    <div className="serchbar1">
                                        
                                        <button className="searchiconBtn" onClick={handleSearch}><IoSearchSharp className="searchicon" /></button>
                                    <div className="login">
                                        {localStorage.getItem("token") ? (            
                                            <button className="cartbtn"><NavLink to="/Cart"><img className="cartimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBCXqF1rdOYnyCZjSGCFQXGOVCKLMcgnQyRYdvHeU4XkdGnhJ" alt="CartImg" /></NavLink>{totalItems}</button>
                                        ): (    
                                            <button className="cartbtn"><NavLink to="/login"><img className="cartimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBCXqF1rdOYnyCZjSGCFQXGOVCKLMcgnQyRYdvHeU4XkdGnhJ" alt="CartImg" /></NavLink>{totalItems}</button>
                                        )}
                                    </div>
                                    </div>

                            </div>
                    </div> 
            </div>
        </>
    )
}

export default Nav;