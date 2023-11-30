import React from "react";
import "../MyLearning/MyLearning.css";
import { useSelector } from "react-redux";

function MyLearning() {

    const purchasedCourses = useSelector((state) => state.cart.purchasedCourses || []);

    return(
        <>
            <div className="MyLearningPage"><br/>
            <h1>My Learning</h1><br/><hr/>

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
                    {purchasedCourses.map((course) => (
                        <>
                                <div className="forBLast_content_item" key={course.id}>
                                    <div className="forBLast_content_item1">
                                            <img className="forBLast_content_item1_Img" src={course.image} alt="FinanceAccountingimage" />
                                    </div>

                                        <div className="forBLast_content_item2">
                                            <h3>{course.name}</h3>
                                            <p>{course.discr}</p><br/>
                                            <p className="forlastcolor">{course.Wname}</p>
                                            <br/>
                                            <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
                                        </div>

                                    <div className="forBLast_content_item3 learnMy">
                                            <h4>Read</h4>
                                    </div>
                                </div><hr/>
                                </>
                        ))}        


                    </div>
                    </>
                )}

            </div><br/>
        </>
    )
}

export default MyLearning;