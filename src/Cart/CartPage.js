import React from "react";
import "../Cart/CartPage.css";

function CartPage() {

    const applyPromo = () => {
        alert("This Coupen Is Not Valid")
    }
    
    return(
        <>
            <div className="Communication">
                <h1>Shopping Cart</h1>

            <div className="scartstart">
                <p className="scartstart_p">0 Courses in Cart</p>
                <div className="shopCart">
                        <div className="shopCart1">
                            <div className="for_Cart_page_start"><hr/><br/>
                                
                                <div className="for_Cart_page">
                                    <div className="forBLast_content_item1">
                                            <img className="forshopcart_Img" src="https://img-c.udemycdn.com/course/240x135/1355610_375a_5.jpg" alt="FinanceAccountingimage" />
                                    </div>

                                        <div className="for_Cart_page2">
                                            <h4>Communication Fundamentals: How To Communicate Better</h4>
                                            <p className="forlastcolor">Life Progression Project, Lorraine Wiseman</p><br/>
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
                                    
                                        <div className="for_Cart_page3 ForCartBTns">
                                            <button className="ForCartBTns55">Remove</button><br/>
                                            <button className="ForCartBTns55">Save for Later</button><br/>
                                            <button className="ForCartBTns55">Move to Wishlist</button><br/>
                                        </div>


                                    <div className="forBLast_content_item3">
                                            <h4>₹ 699</h4>
                                            <p><del>₹ 1999</del></p>
                                    </div>
                                </div><hr/>

                                <div className="for_Cart_page">
                                    <div className="forBLast_content_item1">
                                            <img className="forshopcart_Img" src="https://img-c.udemycdn.com/course/240x135/1355610_375a_5.jpg" alt="FinanceAccountingimage" />
                                    </div>

                                        <div className="for_Cart_page2">
                                            <h4>Communication Fundamentals: How To Communicate Better</h4>
                                            <p className="forlastcolor">Life Progression Project, Lorraine Wiseman</p><br/>
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
                                    
                                        <div className="for_Cart_page3 ForCartBTns">
                                            <button className="ForCartBTns55">Remove</button><br/>
                                            <button className="ForCartBTns55">Save for Later</button><br/>
                                            <button className="ForCartBTns55">Move to Wishlist</button><br/>
                                        </div>


                                    <div className="forBLast_content_item3">
                                            <h4>₹ 699</h4>
                                            <p><del>₹ 1999</del></p>
                                    </div>
                                </div><hr/>

                            </div>    
                        </div>

                        <div className="shopCart2">
                            <p className="shopCart2_p">Total</p>
                            <h1 className="shopCart2_h1">₹6,398</h1>
                            <button className="logoBtn1 checkoutbtn">Checkout</button><br/><hr/><br/>

                            <h3>Promotions</h3><br/>
                            <input className="cartInput" name="coupen" placeholder="Enter Coupen"/>
                            <button className="PromoBtn" onClick={applyPromo}>Apply</button>
                        </div>
                </div>
            </div>

            </div><br/>
        </>
    )
}

export default CartPage;