import React, { useContext, useState } from "react";
import "../Components/Style.css";
import ImageSlider from "../Slider/Slider";
import { store } from "../Store/Data";
import AddCardBtn from "../Cart/AddToCart/BtnAddCart";

function Home() {

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
            <div className="iflogin">
                <img className="homeImage" src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/1c1f8809-69ec-43d7-8770-a145a714df9e.jpg" alt="HomeImg" />
                <div className="Banner">
                    <h1>Black Friday Sale ends tonight</h1>
                    <p>Save big on the skills that could change everything. Get courses for as low as ₹389.</p>
                </div>
            </div><br/><br/>
            <div className="ifnotlogin">
                <ImageSlider />
            </div>

            <div className="company">
                <div className="companyA">
                    <h2 className="companyH2">Trusted by over 15,000 companies and millions of learners around the world</h2>
                    <ul className="companyB">
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg" alt="Homeimg" /></li>
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" alt="Homeimg" /></li>
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" alt="Homeimg" /></li>
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" alt="Homeimg" /></li>
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" alt="Homeimg" /></li>
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" alt="Homeimg" /></li>
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" alt="Homeimg" /></li>
                        <li className="companyImg"><img src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" alt="Homeimg" /></li>
                    </ul>
                </div>
            </div><br/><br/>

            <div className="broad_section">
                    <div className="B_section_chold">
                        <h2 className="B_sectionA">A broad selection of courses</h2>
                    </div>
                    <p className="b_section_para">
                        Choose from over 210,000 online video courses with new additions published every month
                    </p><br/>
                    <div className="B_section_btn">
                        <button className="Bsecbtn Bsecbtn_Active">Python</button>
                        <button className="Bsecbtn">Excel</button>
                        <button className="Bsecbtn">Web Development</button>
                        <button className="Bsecbtn">JavaScript</button>
                        <button className="Bsecbtn">Data Science</button>
                        <button className="Bsecbtn">Amazon AWS</button>
                        <button className="Bsecbtn">Drawing</button>
                    </div>

                    <div className="course_detail">
                        <div className="B_section_chold">
                            <h2 className="B_sectionA">Expand your career opportunities with Python</h2>
                        </div>
                        <p className="b_section_para2">
                            Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. 
                            Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. 
                            You’ll learn how to build everything from games to sites to apps. 
                            Choose from a range of courses that will appeal to.....
                        </p><br/>
                        <button className="ExplorePBtn">Explore Python</button><br/><br/>

                        <div className="courseInfo">
                        {Sdata.filter((item) => item.category === "Marketing" && item.id % 3 === 0).map((item, index) => {
                            return(<>
                            
                                <div className="subInfo sbinfoH dropdown" key={index} onMouseEnter={() => handleHoverDropdownToggle(index)} onMouseLeave={() => handleHoverDropdownToggle(index)}>
                                                            {isHoverVisible[index] && (
                                                                <div className="dropdown-myProfile byaddcart byhome">
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
                                    <img className="subInfoimg" src={item.image} alt="Homeimage" />
                                    <h3 className="subInfoH3">{item.name}</h3>
                                    <p className="subInfoP">{item.Wname}</p>
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
                                </div>
                                </>)
                            })}

                        </div>
                    </div>

                    <div className="goals">
                        <h2 className="goals_h1">How learners like you are achieving their goals</h2><br/>
                        <div className="goals_items">
                                <div className="Gitem_1">
                                        <img className="Gitem_1_img" src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Homeimage" /><br/><br/>
                                        <div>
                                                I am proud to say that after a few months of taking this course...
                                                <span className="Gitem_font">I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.
                                        </div><br/>
                                        <div className="goals_bottom">
                                            <div className="goals_bottom_content">
                                                WA
                                            </div>
                                            <h5 className="goals_bottom_H5">Will A</h5>
                                        </div><br/>
                                        <hr/><br/>

                                        <div className="goals_last">
                                            <img className="goals_last_img" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnLLLG_sTO8CovLe2dKrMCjWx8PobwJAQ7_lDGZGy_5z19fhVo" alt="Homeimage" />
                                            <h3 className="goals_last_font">Leadership: Practical Leadership Skills</h3>
                                        </div>
                                </div>


                                <div className="Gitem_1">
                                        <img className="Gitem_1_img" src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Homeimage" /><br/><br/>
                                        <div>
                                                I am proud to say that after a few months of taking this course...
                                                <span className="Gitem_font">I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.
                                        </div><br/>
                                        <div className="goals_bottom">
                                            <div className="goals_bottom_content">
                                                WA
                                            </div>
                                            <h5 className="goals_bottom_H5">Will A</h5>
                                        </div><br/>
                                        <hr/><br/>

                                        <div className="goals_last">
                                            <img className="goals_last_img" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnLLLG_sTO8CovLe2dKrMCjWx8PobwJAQ7_lDGZGy_5z19fhVo" alt="Homeimage" />
                                            <h3 className="goals_last_font">Leadership: Practical Leadership Skills</h3>
                                        </div>
                                </div>

                                <div className="Gitem_1">
                                        <img className="Gitem_1_img" src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Homeimage" /><br/><br/>
                                        <div>
                                                I am proud to say that after a few months of taking this course...
                                                <span className="Gitem_font">I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.
                                        </div><br/>
                                        <div className="goals_bottom">
                                            <div className="goals_bottom_content">
                                                WA
                                            </div>
                                            <h5 className="goals_bottom_H5">Will A</h5>
                                        </div><br/>
                                        <hr/><br/>

                                        <div className="goals_last">
                                            <img className="goals_last_img" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnLLLG_sTO8CovLe2dKrMCjWx8PobwJAQ7_lDGZGy_5z19fhVo" alt="Homeimage" />
                                            <h3 className="goals_last_font">Leadership: Practical Leadership Skills</h3>
                                        </div>
                                </div>
                        </div>
                    </div><br/><br/>

                    <div className="learners">
                            <h2>Learners are viewing</h2><br/>
                                <div className="learners_A">

                            {Sdata.filter((item) => item.id % 80 === 0 || (item.subcategory === "product_M" && item.id % 2 === 0)).map((item, index) => {
                                return(<>
                            
                                    <div className="subInfo dropdown" key={index} onMouseEnter={() => handleHoverDropdownToggle(index)} onMouseLeave={() => handleHoverDropdownToggle(index)}>
                                                {isHoverVisible[index] && (
                                                        <div className="dropdown-myProfile byaddcart byhome">
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
                                        <img className="subInfoimg" src={item.image} alt="Homeimage" />
                                        <h3 className="subInfoH3">{item.name}</h3>
                                        <p className="subInfoP">{item.Wname}</p>
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
                                    </>)
                            })}        
                            </div>    
                    </div><br/><br/>
                    
                    <h2>Top categories</h2>
                    <div className="Top_cat">
                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">Design</h4>
                        </div>

                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">Development</h4>
                        </div>

                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">Marketing</h4>
                        </div>

                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">IT and Software</h4>
                        </div>

                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">Personal Development</h4>
                        </div>

                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">Business</h4>
                        </div>

                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">Photography</h4>
                        </div>

                        <div className="Top_cat1">
                            <img className="Top_cat_img" src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" alt="Homeimage" />
                            <h4 className="Top_cat_H4 Top_cat_H4_Btn">Music</h4>
                        </div>
                    </div><br/><br/>
            </div>

            <div className="ByCategory">
                    <h2 className="ByCategory_H2">Featured topics by category</h2><br/>
                    <div className="Category_flex">
                            <div className="CF1">
                                    <h3>Development</h3>
                                    <div className="CF2">
                                        <h3 className="CF2_H3">Python</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">Web Development</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">Mechine Learning</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>
                            </div>

                            <div className="CF1">
                                    <h3>Business</h3>
                                    <div className="CF2">
                                        <h3 className="CF2_H3">Financial Analysis</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">SQL</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">PMP</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>
                            </div>

                            <div className="CF1">
                                    <h3>IT and Software</h3>
                                    <div className="CF2">
                                        <h3 className="CF2_H3">Amazon AWS</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">Ethical Hacking</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">Cyber Security</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>
                            </div>

                            <div className="CF1">
                                    <h3>Design</h3>
                                    <div className="CF2">
                                        <h3 className="CF2_H3">Photoshop</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">Graphic Design</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>

                                    <div className="CF2">
                                        <h3 className="CF2_H3">Drawing</h3>
                                        <p className="CF2_P">36,354,994 learners</p>
                                    </div>
                            </div>
                    </div><br/>
                    <button className="ExploreBTN">Explore more topics</button>
            </div><br/><br/>

            <div className="Udemy_business">
                    <div className="UB1">
                        <img className="UB1_image" src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="Homeimage" />
                        <h3 className="UB1_H3">Upskill your team with Udemy Business</h3>
                        <ul className="forul">
                            <li className="forli">Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li><br/>
                            <li className="forli">International course collection in 14 languages</li><br/>
                            <li className="forli">Top certifications in tech and business</li><br/>
                        </ul>
                        <button className="Udemy_Business_btn">Get Udemy business</button>
                        <button className="Lern_more">Lern more</button>
                    </div>
                    <div className="UB2">
                        <img className="UB2_img" src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="Homeimage" />
                    </div>
            </div><br/><br/>

            <div className="story">
                <div className="storyA">
                        <div className="storycontent">
                            <img className="Gitem_1_img" src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="Homeimage" /><br/><br/>
                            <div>Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its <span className="Gitem_font">data scientists, with highly relevant and in-demand tech skills</span> that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.</div><br/>
                            <h3 className="CF2_H3">Read full story</h3>
                        </div>

                        <div className="storyprofile">
                            <img className="profileimg" src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg" alt="Homeimage" /><br/><br/>
                            <h3>Jim Hemgen</h3>
                            <p className="storyprofile_p">Principle</p><br/>
                            <p>Booz Allen Hamilton</p>
                        </div>
                </div>
                <div className="forviewmore">
                    <h3 className="CF2_H3">View more costumers story...</h3>
                </div>
            </div><br/><br/>

            <div className="forlastsection">
                    <div className="forlastsectionA">
                        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="Homeimage" />
                    </div>
                    <div className="forlastsectionB">
                        <h1>Become an instructor</h1><br/>
                        <p className="forlastsectionB_p">Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p><br/>
                        <button className="startteachingBTN">Start teaching today</button>
                    </div>
            </div><br/>
        </>
    )
}

export default Home;