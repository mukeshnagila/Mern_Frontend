import React, { useEffect, useMemo, useState } from "react";
import "../Cart/CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { addPurchasedCourses, placeOrderAction, removeItemFromCart } from "./AddToCart/cartActions";

function CartPage() {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const accessToken = localStorage.getItem("token");
    console.log("TOKEN", accessToken);

    const decodedToken = accessToken ? jwtDecode(accessToken) : null;

    // Log the entire decoded token
    console.log("DECODED TOKEN", decodedToken);

    // Access the userId if the token is decoded successfully
    const userId = decodedToken ? decodedToken.userId : null;
    console.log("USER ID", userId);

    // Wrap the initialization of "cartItems" in its own useMemo() Hook
    //next line is the simple warning ignore this 
    const memoizedCartItems = useMemo(() => cartItems, [cartItems]);// eslint-disable-next-line 
    const [totalAmount, setTotalAmount] = useState(0);
    const [isPaypalButtonVisible, setIsPaypalButtonVisible] = useState(true);

    useEffect(() => {
        const calculatedTotalAmount = memoizedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalAmount(calculatedTotalAmount);
    }, [memoizedCartItems]);

    // const increaseQuantity = (item) => {
    //     dispatch(addToCart(item));
    // }

    const decreaseQuantity = (item) => {
        dispatch(removeItemFromCart(item.id));
    }

    const goTOHome = () => {
        nav("/");
    };


    const applyPromo = () => {
        alert("This Coupen Is Not Valid")
    }



    // const handlePaypalButton = async () => {
    //     try {
    //         const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    //         console.log(totalItems);

    //         const paypalButtonContainer = document.getElementById("paypal-button-container");
    //         setIsPaypalButtonVisible(false);
    //         window.paypal.Buttons({
    //             createOrder: (data, actions) => {
    //                 return actions.order.create({
    //                     purchase_units: [
    //                         {
    //                             description: "Your order description here",
    //                             amount: {
    //                                 currency_code: "USD",
    //                                 value: totalAmount.toFixed(2),
    //                             },
    //                         },
    //                     ],
    //                 });
    //             },
    //             onApprove: (data, actions) => {
    //                 return actions.order.capture().then((details) => {
    //                     dispatch(placeOrderAction());

    //                     const purchasedCourses = cartItems; // Assuming cartItems represent the courses
    //                     dispatch(addPurchasedCourses(purchasedCourses));

    //                     nav('/mylearning');
    //                     alert("Your Order Is Placed. Thank You For Shopping!");
    //                 });
    //             },
    //             onError: (err) => {
    //                 console.error("PayPal error:", err);
    //                 alert("Payment Failed. Please try again.");
    //             },
    //         }).render(paypalButtonContainer);
    //     } catch (error) {
    //         console.error("Error initiating payment:", error);
    //         alert("Payment Failed. Please try again.");
    //     }
    // };

    const handlePaypalButton = async () => {
        try {
            const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
            console.log(totalItems);

            const paypalButtonContainer = document.getElementById("paypal-button-container");
            setIsPaypalButtonVisible(false);
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: "Your order description here",
                                amount: {
                                    currency_code: "USD",
                                    value: totalAmount.toFixed(2),
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    try {
                        const details = await actions.order.capture();
                        dispatch(placeOrderAction());
                        console.log(details);

                        const purchasedCourses = cartItems;
                        dispatch(addPurchasedCourses(purchasedCourses));

                        nav('/mylearning');
                        alert("Your Order Is Placed. Thank You For Shopping!");
                        
                        const tokenPayload = jwtDecode(accessToken);
                        const userEmail = tokenPayload.email;

                        const orderDetails = {
                            userEmail: userEmail,
                            products: cartItems.map(item => ({
                                ...item,
                                image: item.image, // include the image URL
                                discr: item.discr,
                                Wname: item.Wname,
                            })),
                            totalAmount: totalAmount.toFixed(2),
                        };

                        // Send order details to the server
                        const response = await fetch("https://mern-udemy-clone-backend.onrender.com/api/addOrder", {
                        // const response = await fetch("http://localhost:8008/api/addOrder", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${accessToken}`,
                            },
                            body: JSON.stringify(orderDetails),
                        });

                        // Handle the response
                        if (response.ok) {
                            const result = await response.json();
                            console.log("Order details sent successfully:", result);
                        } else {
                            console.error("Error sending order details:", response.status, response.statusText);
                            alert("Error sending order details. Please try again.");
                        }
                    } catch (error) {
                        console.error("Error capturing payment:", error);
                        alert("Payment Failed. Please try again.");
                    }
                },
                onError: (err) => {
                    console.error("PayPal error:", err);
                    alert("Payment Failed. Please try again.");
                },
            }).render(paypalButtonContainer);
        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("Payment Failed. Please try again.");
        }
    };



    return(
        <>
            <div className="Communication">
                <h1 className="Communication_cart_h1">Shopping Cart</h1>

            <div className="scartstart">
                <p className="scartstart_p">{cartItems.length} Courses in Cart</p>
                <div className="shopCart">
                        <div className="shopCart1">
                        {cartItems.length < 1 ? ( 
                            <>       
                                <div className="EmptyCartImg">
                                        <h2>Your Cart Is Empty....</h2>
                                </div>
                            </>
                        ) : ( 
                            <>
                                <div className="for_Cart_page_start"><hr/><br/>
                                {cartItems.map((item) => (  
                                    <>      
                                        <div className="for_Cart_page" key={item.id}>
                                            <div className="forBLast_content_item1">
                                                    <img className="forshopcart_Img" src={item.image} alt="FinanceAccountingimage" />
                                            </div>

                                                <div className="for_Cart_page2">
                                                    <h4>{item.name}</h4>
                                                    <p className="forlastcolor">{item.Wname}</p><br/>
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
                                                    <button className="ForCartBTns55" onClick={() => decreaseQuantity(item)}>Remove</button><br/>
                                                    <button className="ForCartBTns55">Save for Later</button><br/>
                                                    <button className="ForCartBTns55">Move to Wishlist</button><br/>
                                                </div>


                                            <div className="forBLast_content_item3">
                                                    <h4>₹ {item.price}</h4>
                                                    <p><del>₹ {item.oldprice}</del></p><br/>

                                                    {/* <h5 className="forQnt1">Item Quant -</h5>
                                                    <h5 className="forQnt forQntSpan"> {item.quantity} </h5> */}
                                            </div>
                                        </div><hr/>
                                    </>
                                    ))}

                                </div>
                            </>)
                            }       
                        </div>

                        {cartItems.length > 0 ? (
                            <>
                            {isPaypalButtonVisible && (
                                <div className="shopCart2">
                                    <p className="shopCart2_p">Total</p>
                                    <h1 className="shopCart2_h1">₹{totalAmount}</h1>
                                    <button className="logoBtn1 checkoutbtn" onClick={handlePaypalButton}>Checkout</button><br/><hr/><br/>

                                    <h3>Promotions</h3><br/>
                                    <input className="cartInput" name="coupen" placeholder="Enter Coupen"/>
                                    <button className="PromoBtn" onClick={applyPromo}>Apply</button>
                                </div>
                            )}
                                <div id="paypal-button-container"></div>
                            </>
                        ) : (
                            <>  
                                <button className="logoBtn1" onClick={goTOHome}>Learn More ....</button>
                            </>
                        )}        
                </div>
            </div>

            </div><br/>
        </>
    )
}

export default CartPage;