
import React, { useEffect, useState } from "react";
import "../MyLearning/MyLearning.css";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

function MyLearning() {
    const [userOrders, setUserOrders] = useState([]);
    const purchasedCourses = useSelector((state) => state.cart.purchasedCourses || []);
    const accessToken = localStorage.getItem("token");

    useEffect(() => {
        const fetchUserOrders = async () => {
            try {
                // Decode the token to get user email
                const tokenPayload = jwtDecode(accessToken);
                const userEmail = tokenPayload.email;

                // Fetch user orders from the server
                const response = await fetch(`https://mern-udemy-clone-backend.onrender.com/api/findOrder?userEmail=${userEmail}`, {
                // const response = await fetch(`http://localhost:8008/api/findOrder?userEmail=${userEmail}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    const orders = await response.json();
                    const filteredOrders = orders.filter((order) => order.userEmail === userEmail);

                    setUserOrders(filteredOrders);
                } else {
                    console.error("Error fetching user orders:", response.status, response.statusText);
                    // Handle error fetching user orders
                }
            } catch (error) {
                console.error("Error fetching user orders:", error);
                // Handle error fetching user orders
            }
        };

        fetchUserOrders();
    }, [accessToken]);

    return (
        <>
            <div className="MyLearningPage">
                <br />
                <h1>My Learning</h1>
                <br />
                <hr />

                {purchasedCourses.length < 1 ? (
                    <>
                        <div className="EmptyCartImg">
                            <h2>Your Learning Section Is Empty....</h2>
                            <p>.........Buy To Learn........</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="forBLast_content_learning">
                            {userOrders.map((order) => (
                                <>
                                    <div className="forBLast_content_item" key={order.id}>
                                        <div className="forBLast_content_item1">
                                            <img
                                                className="forBLast_content_item1_Img"
                                                src={`${order.products[0].image}`} // Assuming the first product in the order represents the course
                                                alt="FinanceAccountingimage"
                                            />
                                        </div>


                                    <div className="forsearchprod">
                                        <div className="forBLast_content_item2 formmimg">
                                            <h3>{order.products[0].name}</h3>
                                            <p>{order.products[0].discr}</p>
                                            <p className="forlastcolor">{order.products[0].Wname}</p>
                                            
                                            <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
                                        </div>
                                    </div>


                                        <div className="forBLast_content_item2 blockserchp">
                                            <h3>{order.products[0].name}</h3>
                                            <p>{order.products[0].discr}</p>
                                            <p className="forlastcolor">{order.products[0].Wname}</p>
                                            
                                            <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
                                        </div>

                                        <div className="forBLast_content_item3 learnMy">
                                            <h4>Read</h4>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <br />
        </>
    );
}

export default MyLearning;








// import React from "react";
// import "../MyLearning/MyLearning.css";
// import { useSelector } from "react-redux";

// function MyLearning() {

//     const purchasedCourses = useSelector((state) => state.cart.purchasedCourses || []);

//     return(
//         <>
//             <div className="MyLearningPage"><br/>
//             <h1>My Learning</h1><br/><hr/>

//             {purchasedCourses.length < 1 ? ( 
//                             <>       
//                                 <div className="EmptyCartImg">
//                                         <h2>Your Learning Section Is Empty....</h2>
//                                         <p>.........Buy To Learn........</p>
//                                 </div>
//                             </>
//                         ) : ( 
//                             <>
//                     <div className="forBLast_content_learning">
//                     {purchasedCourses.map((course) => (
//                         <>
//                                 <div className="forBLast_content_item" key={course.id}>
//                                     <div className="forBLast_content_item1">
//                                             <img className="forBLast_content_item1_Img" src={course.image} alt="FinanceAccountingimage" />
//                                     </div>

//                                         <div className="forBLast_content_item2">
//                                             <h3>{course.name}</h3>
//                                             <p>{course.discr}</p><br/>
//                                             <p className="forlastcolor">{course.Wname}</p>
//                                             <br/>
//                                             <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
//                                         </div>

//                                     <div className="forBLast_content_item3 learnMy">
//                                             <h4>Read</h4>
//                                     </div>
//                                 </div><hr/>
//                                 </>
//                         ))}        


//                     </div>
//                     </>
//                 )}

//             </div><br/>
//         </>
//     )
// }

// export default MyLearning;


