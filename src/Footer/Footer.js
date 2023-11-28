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
                                <button className="Fbutton"><span className="forfooterBTN"><img className="Fbutton_img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRu5BLsLk4yX2jDU3uzZlXbz-sMsDAGanqzMRHHulNfRweBvMh1" alt="img" />English</span></button>
                            </div>
                        </div>
                    </div><br/><br/><br/>

                    <div className="lastfooter">
                            <div className="LFooter1">
                                 <img className="Lfooter_img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="image" />
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