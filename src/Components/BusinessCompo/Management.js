import React, { useContext, useState } from "react";
import "../BusinessCompo/Business.css";
import { NavLink } from "react-router-dom";
import { store } from "../../Store/Data";
import AddCardBtn from "../../Cart/AddToCart/BtnAddCart";

function Management(){

    const [Sdata] = useContext(store);

    const [isHoverVisible, setIsHoverVisible] = useState(Array(Sdata.length).fill(false));

    const handleHoverDropdownToggle = (index) => {
        setIsHoverVisible((prevVisibility) => {
            const updatedVisibility = [...prevVisibility];
            updatedVisibility[index] = !updatedVisibility[index];
            return updatedVisibility;
        });
    };

    return(
        <>
            <div className="Nav2nd">
                <h3>Business</h3>
                <img className="Nav2nd_img" src="https://s.udemycdn.com/browse_components/link-bar/large-next.svg" alt="sign" />
                <p className="Nav2nd_P"><NavLink className="Nav2nd_P2" to="/Business/Communication">Communication</NavLink></p>
                <p className="Nav2nd_P"><NavLink className="Nav2nd_P2" to="/Business/Managements">Managements</NavLink></p>
                <p className="Nav2nd_P"><NavLink className="Nav2nd_P2" to="/Business/Business_Strategy">Business Strategy</NavLink></p>
                <p className="Nav2nd_P"><NavLink className="Nav2nd_P2" to="/Business/Operations">Operations</NavLink></p>
                <p className="Nav2nd_P"><NavLink className="Nav2nd_P2" to="/Business/Human_Resources">Human Resources</NavLink></p>
            </div>

            <div className="Communication">
                
                <h1 className="Communication_H1">Management Courses</h1>
                <h2 className="Communication_H2">Courses to get you started</h2>

                <div className="mostpopular">
                    <h3 className="mostpopular_H3">Most popular</h3><hr/>

                    <div className="mostpopcontent">
                                
                    {Sdata.filter((item) => item.subcategory === "Management").map((item, index) => {
                            return(
                                <>                        
                                    <div key={index} className="Startmostpop_item dropdown" onMouseEnter={() => handleHoverDropdownToggle(index)} onMouseLeave={() => handleHoverDropdownToggle(index)}>
                                                {isHoverVisible[index] && (
                                                <div className="dropdown-myProfile byaddcart">
                                                        <div className="Addcart1">
                                                                <h4>{item.name}</h4>
                                                                <div className="Addcartmini">
                                                                    <button className="bestsellerbtn">Bestseller</button>
                                                                    <p className="Addcartmini_update">Updated November 2023</p>
                                                                </div><br/>    
                                                                <p>{item.discr}</p>
                                                        </div>  
                                                        <hr/><br/>
                                                        <AddCardBtn product={item}/>
                                                    </div>
                                                )}
                                        <img className="Startmostpop_item_Img" src={item.image} alt="Communicationimage" />
                                        <h3>{item.name}</h3>
                                        <p>{item.Wname}</p>
                                        <div className="subInfoRating">
                                            <div class="rating">
                                                <div class="star-container">
                                                    <div class="star half"></div>
                                                </div>
                                                <div class="star-container">
                                                    <div class="star"></div>
                                                </div>
                                                <div class="star-container">
                                                    <div class="star"></div>
                                                </div>
                                                <div class="star-container">
                                                    <div class="star"></div>
                                                </div>
                                                <div class="star-container">
                                                    <div class="star"></div>
                                                </div>
                                                </div><p className="rating_length">(486391)</p>
                                            </div>

                                            <div> <span  className="subInforupee">₹{item.price}</span><span className="subInfooldmrp"> <del> ₹{item.oldprice}</del></span></div>
                                            <button className="bestsellerbtn">Bestseller</button>
                                    </div>
                                </>
                            )
                        })} 
                    </div>
                </div>
            </div>

            <div className="aboutsection">
                <hr/>
                        <div className="ASchild1">
                                <div className="ASmini">
                                    <img className="ASmini_img" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJRacqYivS-UjxhOO4UPc3f3ryzORPIDByID2o7We26oiIEp5H" alt="ManagementImage" />
                                    <h2 className="ASmini_H2">Learn in-demand skills with over 210,000 video courses</h2>
                                </div>

                                <div className="ASmini">
                                    <img className="ASmini_img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYLtySaxciI_EyNE3L5_LsDe8iUpXkykWl46N_faJqYhza_hmX" alt="ManagementImage" />
                                    <h2 className="ASmini_H2">Choose courses taught by real-world experts</h2>
                                </div>

                                <div className="ASmini">
                                    <img className="ASmini_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYkKsByAwOOOEo961Xlhj0Q87RgLIWJZCIP6omGLekWRLTFLH" alt="ManagementImage" />
                                    <h2 className="ASmini_H2">Learn at your own pace, with lifetime access on mobile and desktop</h2>
                                </div>  
                        </div>
                <hr/>
            </div>

            <div className="PopularSec">
                    <h2>Popular topics</h2>
                    <div className="popular_topic">
                            <button className="popular_topic_Btn">Product Management</button>
                            <button className="popular_topic_Btn">Management Skills</button>
                            <button className="popular_topic_Btn">Project Management</button>
                            <button className="popular_topic_Btn">Quality Management</button>
                            <button className="popular_topic_Btn">Risk Management</button>
                            <button className="popular_topic_Btn">Leadership</button>
                            <button className="popular_topic_Btn">ISO 9001</button>
                            <button className="popular_topic_Btn">Business Strategy</button>
                            <button className="popular_topic_Btn">Manager Training</button>
                            <button className="popular_topic_Btn">PMI Project Management Professional (PMP)</button>
                    </div>
            </div>

            <div className="popular_Ins">
                <h2>Popular Instructors</h2>
                <div className="popular_Ins_item">
                        <div className="Ins_item_1">
                                <img className="Ins_item_1_Img" src="https://img-c.udemycdn.com/user/75x75/2565950_892c_2.jpg" alt="Managementimage" />
                                <div className="Ins_mini_item">
                                    <h3>TJ Walker</h3>
                                    <p>Communication Skills, Public Speaking</p>
                                    <h4>4.5 <div class="star"></div><span className="for_ins_text">Instructor Rating</span></h4>
                                    <h4>1,836,428 <span className="for_ins_text">students</span></h4>
                                    <h4>218 <span className="for_ins_text">course</span></h4>
                                </div>
                        </div>

                        <div className="Ins_item_1">
                                <img className="Ins_item_1_Img" src="https://img-c.udemycdn.com/user/75x75/22101060_9158_2.jpg" alt="Managementimage" />
                                <div className="Ins_mini_item">
                                    <h3>Jessica Brody</h3>
                                    <p>Fiction Writing, Creative Writing</p>
                                    <h4>4.7 <div class="star"></div><span className="for_ins_text">Instructor Rating</span></h4>
                                    <h4>63,906 <span className="for_ins_text">students</span></h4>
                                    <h4>11 <span className="for_ins_text">course</span></h4>
                                </div>
                        </div>

                        <div className="Ins_item_1">
                                <img className="Ins_item_1_Img" src="https://img-c.udemycdn.com/user/75x75/1681918_d7a1_7.jpg" alt="Managementimage" />
                                <div className="Ins_mini_item">
                                    <h3>Shani Raja</h3>
                                    <p>Writing, Writing Editing</p>
                                    <h4>4.6 <div class="star"></div><span className="for_ins_text">Instructor Rating</span></h4>
                                    <h4>519,708 <span className="for_ins_text">students</span></h4>
                                    <h4>13 <span className="for_ins_text">course</span></h4>
                                </div>
                        </div>

                        <div className="Ins_item_1">
                                <img className="Ins_item_1_Img" src="	https://img-c.udemycdn.com/user/75x75/14942868_3ed6_38.jpg" alt="Managementimage" />
                                <div className="Ins_mini_item">
                                    <h3>TJ Walker</h3>
                                    <p>Chris Haroun | 1.4 Million Students |</p>
                                    <h4>4.5 <div class="star"></div><span className="for_ins_text">Instructor Rating</span></h4>
                                    <h4>1,404,706 <span className="for_ins_text">students</span></h4>
                                    <h4>74 <span className="for_ins_text">course</span></h4>
                                </div>
                        </div>
                </div>
            </div>

            <div className="allCcource">
                <h2>All Communication courses</h2><br/>
                <div className="fornotsure">
                    <img className="fornotsureImg" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSK4XX5P0UrM-P8ULiT516j5e8Di-dH32AfbdEe7pHsqAPP0tB" alt="Managementimage" />
                    <h3>Not sure? All courses have a 30-day money-back guarantee</h3>
                </div>    
            </div> 

            <div className="Business_last_sec">
                    <div className="forBLast">
                            <div className="Bfor_rating">
                                            <hr/>
                                    <h2>Rating</h2><br/>
                                    <div className="Bforstart">
                                            <div className="Bforstart_div"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <p>4.5 & up <span className="Bforstart_span">727</span></p>
                                    </div>

                                    <div className="Bforstart">
                                            <div className="Bforstart_div"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <p>4.2 & up <span className="Bforstart_span">24</span></p>
                                    </div>

                                    <div className="Bforstart">
                                            <div className="Bforstart_div"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <p>5.0 & up <span className="Bforstart_span">125</span></p>
                                    </div>

                                    <div className="Bforstart">
                                            <div className="Bforstart_div"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <p>4.8 & up <span className="Bforstart_span">256</span></p>
                                    </div>

                                    <div className="Bforstart">
                                            <div className="Bforstart_div"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <p>4.6 & up <span className="Bforstart_span">25</span></p>
                                    </div>
                            </div>

                            <div className="forBLast_content">
                            {Sdata.filter((item) => item.subcategory === "Management").map((item, index) => {
                            return(
                                <>
                                <div className="forBLast_content_item2 dropdown" key={index} onMouseEnter={() => handleHoverDropdownToggle(index)} onMouseLeave={() => handleHoverDropdownToggle(index)}>
                                                {isHoverVisible[index] && (
                                                        <div className="dropdown-myProfile byaddcart">
                                                                <div className="Addcart1">
                                                                        <h4>{item.name}</h4>
                                                                        <div className="Addcartmini">
                                                                            <button className="bestsellerbtn">Bestseller</button>
                                                                            <p className="Addcartmini_update">Updated November 2023</p>
                                                                        </div><br/>    
                                                                        <p>{item.discr}</p>
                                                                </div>  
                                                                <hr/><br/>
                                                                <AddCardBtn product={item}/>
                                                            </div>
                                                        )}
                                    <div className="forBLast_content_item1">
                                            <img className="forBLast_content_item1_Img" src={item.image} alt="HumanRimage" />
                                    </div>

                                        <div className="forBLast_content_item2">
                                            <h3>{item.name}</h3>
                                            <p>{item.discr}</p>
                                                <div className="forBrtag">
                                                    <br/>
                                                </div>
                                            <p className="forlastcolor">{item.Wname}</p>
                                            <div className="Bforstart LastBforstart">
                                                    <h3>4.5</h3>
                                                    <div class="star"></div>
                                                    <div class="star"></div>
                                                    <div class="star"></div>
                                                    <div class="star"></div>
                                                    <div class="star"></div>
                                                    <p><span className="Bforstart_span">275</span></p>
                                            </div>
                                            <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
                                        </div>

                                    <div className="forBLast_content_item3">
                                            <h4>₹ {item.price}</h4>
                                            <p><del>₹ {item.oldprice}</del></p>
                                    </div>
                                </div><hr/>


                                </>
                            )
                        })} 


                            </div>
                    </div>
            </div>

        </>
    )
}

export default Management;