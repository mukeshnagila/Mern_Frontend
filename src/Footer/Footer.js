import React from "react";
import "../Footer/Footer.css";

function Footer(){
    return(
        <>
            <div className="footer">
                    <div className="footercontent">
                        <div className="Fbox1">
                            <div className="FContent1">
                                <ul className="footerul">
                                    <li className="footerli">Udemy Business</li>
                                    <li className="footerli">Teach on Udemy</li>
                                    <li className="footerli">Get the app</li>
                                    <li className="footerli">About us</li>
                                    <li className="footerli">Contact us</li>
                                </ul>
                            </div>

                            <div className="FContent1">
                                <ul className="footerul">
                                    <li className="footerli">Careers</li>
                                    <li className="footerli">Blog</li>
                                    <li className="footerli">Help and Support</li>
                                    <li className="footerli">Affiliate</li>
                                    <li className="footerli">Investors</li>
                                </ul>
                            </div>

                            <div className="FContent1">
                                <ul className="footerul">
                                    <li className="footerli">Terms</li>
                                    <li className="footerli">Privacy policy</li>
                                    <li className="footerli">Cookie setting</li>
                                    <li className="footerli">Sitemap</li>
                                    <li className="footerli">Accessibility statement</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Fbox2">
                            <div className="FContent2">
                                <button className="Fbutton"><span className="forfooterBTN"><img className="Fbutton_img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRu5BLsLk4yX2jDU3uzZlXbz-sMsDAGanqzMRHHulNfRweBvMh1" alt="Footerimg" />English</span></button>
                            </div>
                        </div>
                    </div><br/><br/><br/>

                    <div className="lastfooter">
                            <div className="LFooter1">
                                 <img className="Lfooter_img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Footerimage" />
                            </div>
                            <div className="LFooter2">
                                <p className="Lfooter_P">© 2023 Udemy, Inc.</p>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default Footer;


// <>
// .homeImage{
//     width: 90vw;
//     height: auto;
//     object-fit: contain;
//     object-position: initial;
//     padding: 0% 4%;
// }

// .Banner{
//     position: absolute;
//     box-shadow: 0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
//     padding: 2rem 2rem;
//     width: 25rem;
//     left: 4.8rem;
//     top: 7.8rem;
//     display: flex;
//     flex-direction: column;
//     background: #fff;
// }

// .company{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     container-type: inline-size;
//     background-color: #f7f9fa;
// }

// .companyA{
//     padding: 3.2rem 2.4rem
// }

// .companyH2{
//     color: #6a6f73;
//     font-weight: 400;
//     margin-bottom: 2.4rem;
//     font-size: 1.9rem;
//     max-width: 100%;
// }

// .companyB{
//     display: grid;
//     justify-content: space-between;
//     grid-auto-flow: initial;
//     grid-template-columns: repeat(4,4fr);
//     grid-gap: 1.6rem;
// }

// .companyImg{
//     justify-self: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 48px;
//     height: 48px;
// }

// .broad_section{
//     margin: 0 0 1.6rem;
//     padding-right: 2.4rem;
//     padding-left: 2.4rem;
// }

// .B_section_chold{
//     margin: 0;
//     max-width: 100%;
// }

// .B_sectionA{
//     max-width: 80rem;
// }

// .b_section_para{
//     margin: 1rem 0 0;
//     max-width: 80rem;
//     font-size: 1.3rem;
// }

// .B_section_btn{
//     display: grid;
//     grid-auto-columns: max-content;
//     grid-auto-flow: column;
//     grid-gap: 1.6rem;
// }

// .Bsecbtn{
//     background: 0 0;
//     padding: 0.8rem 0.4rem;
//     outline-offset: -0.4rem!important;
//     color: #6a6f73;;
//     position: relative;
//     width: 100%;
//     font-weight: 800;
//     font-size: 15px;
//     border: none;
//     cursor: pointer;
// }

// .Bsecbtn_Active{
//     color: #2d2f31;
// }

// .Bsecbtn:hover{
//     color: #2d2f31;
// }

// .course_detail{
//     border: 1px solid #6a6f73;
//     min-height: 500px;
//     padding: 2%;
// }

// .b_section_para2{
//     margin: 1rem 0 0;
//     max-width: 50rem;
//     font-size: 1rem;
// }

// .ExplorePBtn{
//     color: var(--color-gray-500);
//     background-color: transparent;
//     border: 1px solid #2d2f31;
//     height: 2.5rem;
//     font-family: var(--font-stack-heading);
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -.02rem;
//     font-size: 1rem;
//     padding: 0px 8px;
// }

// .ExplorePBtn:hover{
//     background-color: silver;
//     cursor: pointer;
// }

// .courseInfo{
//     display: flex;
//     justify-content: space-evenly;
//     flex-wrap: wrap;
//     width: 100%;
// }

// .subInfo{
//     width: 20%;
// }

// .subInfoimg{
//     width: 95%;
//     height: 150px;
//     border: 1px solid silver;
// }

// .subInfoH3{
//     font-family: var(--font-stack-heading);
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -.02rem;
//     font-size: 1.1rem;
// }

// .subInfoP{
//     font-size: 13px;
// }

// .rating {
//     unicode-bidi: bidi-override;
//     direction: rtl;
//     font-size: 20px;
//     color: #d3d3d3;
//     float: left;
//   }

//   .star {
//     display: inline-block;
//     margin-right: 5px;
//     /* position: relative; */
//   }

//   .star:before {
//     content: '\2605'; /* Unicode character for a star */
//     /* position: absolute; */
//     color: #f0ad4e; /* Yellow color */
//   }

//   .half:before {
//     content: '\2605'; /* Unicode character for a star */
//     /* position: absolute; */
//     color: #f0ad4e; /* Yellow color */
//     width: 50%;
//     overflow: hidden;
//   }

//   .star-container {
//     display: inline-block;
//   }

//   .rating_length{
//     font-size: 12px;
//     padding-top: 6px;
//     padding-bottom: 5px;
//   }

//   .subInforupee{
//     color: #2d2f31;
//     font-weight: 700;
//   }

//   .subInfooldmrp{
//     font-weight: 100px;
//     display: inline-block;
//     padding-left: 3%;
//   }

//   .bestsellerbtn{
//     background-color: #eceb98;
//     color: #3d3c0a;
//     padding: 0.2rem 0.8rem;
//     border: none;
//     margin-top: 3%;
//   }

//   .goals{
//     margin-top: 3rem;
//     background: #f7f9fa;
//     padding: 40px 0px;
//   }

//   .goals_H1{
//     font-family: 'Udemy Sans',-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -.02rem;
//     font-size: 2.4rem;
//     max-width: 36em;
//   }

//   .goals_items{
//     display: flex;
//     justify-content: space-evenly;
//   }

//   .Gitem_1{
//     min-height: 250px;
//     width: 380px;
//     border: 1px solid silver;
//     padding: 2%;
//     background-color: #fff;
//   }

//   .Gitem_1_img{
//     width: 8%;
//     height: 8%;
//   }

//   .Gitem_font{
//     font-weight: 700;
//   }

//   .goals_bottom{
//     display: flex;
//     align-items: center;
//   }

//   .goals_bottom_content{
//     background: #2d2f31;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     object-fit: cover;
//     color: #fff;
//     width: 2.3rem;
//     height: 2.3rem;
//   }

//   .goals_bottom_H5{
//     padding-left: 5%;
//   }

//   .goals_last{
//     display: flex;
//     cursor: pointer;
//   }

//   .goals_last_img{
//     width: 40px;
//     height: 40px;
//   }

//   .goals_last_font{
//     font-family: 'Udemy Sans',-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -.02rem;
//     font-size: 1.2rem;
//     color: #371783;
//     padding-top: 2%;
// }

// .learners_A{
//     display: flex;
//     justify-content: space-evenly;
// }

// .Top_cat{
//     display: flex;
//     justify-content: space-evenly;
//     flex-wrap: wrap;
//     padding: 15px 0px;
//     gap: 10px;
// }

// .Top_cat1{
//     height: 200px;
//     /* width: 23%; */
//     margin-bottom: 10%;
// }

// .Top_cat_H4{
//     color: #2d2f31;
//     font-weight: 700;
// }

// .Top_cat_img:hover{
//     width: 102%;
//     cursor: pointer;
// }

// .ByCategory{
//     background-color: #f7f9fa;
//     padding: 2% 5%;
// }

// .ByCategory_H2{
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -.02rem;
//     font-size: 1.8rem;
//     max-width: 36em;
// }

// .Category_flex{
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
// }

// .CF1{
//     padding-right: 0.8rem;
// }

// .CF2{
//     padding: 8% 0%;
// }

// .CF2_H3{
//     color: #371783;
//     text-decoration: underline;
//     cursor: pointer;
// }

// .CF2_P{
//    color: #6a6f73;
// }

// .ExploreBTN{
//     border: 1px solid #2d2f31;
//     background-color: transparent;
//     color: #262728;
//     font-weight: 700;
//     padding: 1%;
// }

// .ExploreBTN:hover{
//     background-color: #9da3a7;
//     cursor: pointer;
// }

// .Udemy_business{
//     display: flex;
//     padding: 2% 16%;
//     justify-content: space-between;
// }

// .UB1{
//     padding-right: 13%;
// }

// .UB1_image{
//     width: 15vw;
//     height: 40px;
// }

// .UB1_H3{
//     color: #2d2f31;
//     font-weight: 700;
//     font-size: 2rem;
//     line-height: 1.25;
//     padding-top: 2%;
// }

// .UB2_img{
//     width: 100%;
//     /* height: 350px; */
// }

// .forul{
//     padding-left: 5%;
//     margin-top: 5%;
// }

// .forli{
//     font-size: 20px;
// }

// .Udemy_Business_btn{
//     background-color: #2d2f31;
//     color: #fff;
//     font-size: 16px;
//     padding: 3%;
//     cursor: pointer;
//     margin-right: 3%;
// }

// .Udemy_Business_btn:hover{
//     background-color: #6a6f73;
// }

// .Lern_more{
//     padding: 3%;
//     cursor: pointer;
//     font-size: 16px;
// }

// .story{
//     background-color: #f7f9fa;
//     padding: 5% 20%;
// }

// .storyA{
//     background-color: #fff;
//     padding: 3%;
//     display: flex;
//     justify-content: space-between;
//     border: 1px solid silver;
//     width: 100%;
// }

// .storycontent{
//     padding-right: 2%;
//     width: 50%;
//     line-height: 25px;
// }

// .storyprofile{
//     width: 50%;
//     text-align: center;
// }

// .storyprofile_p{
//     color: #6a6f73;
// }

// .profileimg{
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     margin-top: 5%;
// }

// .forviewmore{
//     text-align: center;
//     padding-top: 5%;
// }

// .forlastsection{
//     padding: 2% 15%;
//     display: flex;
// }

// .forlastsectionA{
//     background-color: #fff;
//     padding: 0% 3%;
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
// }

// .forlastsectionB{
//     padding: 13% 5%;
// }

// .forlastsectionB_p{
//     font-size: 1.2rem;
// }

// .startteachingBTN{
//     padding: 3%;
//     background-color: #2d2f31;
//     color: #fff;
//     font-size: 15px;
// }

// .startteachingBTN:hover{
//     background-color: black;
//     cursor: pointer;
// }




// /* /////////////////////////////////// Media Quary For Phone ///////////////////////////////// */

// @media only screen and (min-width:200px) and (max-width:800px) {
    
//     .Banner{
//         display: none;
//     }

//     .companyH2{
//         font-size: 1.0rem;
//     }

//     .B_section_chold{
//         text-align: center;
//     }

//     .b_section_para{
//         font-size: 1.0rem;
//         text-align: center;
//     }

//     .subInfo{
//         width: 100%;
//         padding-top: 5%;
//     }

//     .subInfoimg{
//         width: 60%;
//         height: 210px;
//         margin-left: 20%;
//     }

//     .goals_items{
//         display: block;
//     }

//     .Gitem_1{
//         width: auto;
//         margin-bottom: 5%;
//     }

//     .learners_A{
//         display: block;
//     }

//     .ByCategory{
//         margin-top: 10%;
//     }

//     .CF1{
//         width: 150px;
//     }

//     .ExploreBTN{
//         width: 100%;
//         height: 50px;
//     }

//     .Udemy_business{
//         flex-direction: column-reverse;
//     }

//     .UB1_image{
//         width: 22vh;
//         height: 48px;
//         padding-left: 20%;
//     }

//     .UB1_H3{
//         padding-left: 7%;
//         text-align: center;
//         padding-top: 0%;
//         font-size: medium;
//     }

//     .forul{
//         padding-left: 10%;
//     }


//     .Udemy_Business_btn{
//         width: 100%;
//     }

//     .Lern_more{
//         width: 100%;
//         margin-top: 5%;
//     }

//     .storycontent{
//         width: 100%;
//     }

//     .storyprofile{
//         width: 100%;
//     }

//     .story{
//         padding: 1% 2%;
//     }

//     .storyA{
//         width: 95%;
//         display: block;
//     }

//     .forlastsection{
//         display: block;
//     }

//     .forlastsectionA{
//         justify-content: center;
//     }

//     .forlastsectionA img{
//         margin-right: 20%;
//     }

//     .forlastsectionB{
//         padding: 0% 0%;
//     }

//     .forlastsectionB h1{
//         font-size: x-large;
//     }

//     .forlastsectionB_p{
//         font-size: 1.0rem;
//     }

//     .startteachingBTN{
//         width: 100%;
//     }

//     .B_section_btn{
//         display: block;
//     }

//     .Top_cat_img{
//         display: none;
//     }

//     .Top_cat1{
//         margin-bottom: 5%;
//         height: auto;
//         width: 45%;
//     }

//     .Top_cat_H4_Btn{
//         min-width: 50px;
//         min-height: 25px;
//         border-radius: 25px;
//         border: 1px solid #262728;
//         padding: 12% 15%;
//         text-align: center;
//     }
//     .Top_cat_H4_Btn:hover{
//         background-color: black;
//         color: #fff;
//     }

// }
// </>