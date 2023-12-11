import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import AddCardBtn from "../Cart/AddToCart/BtnAddCart";
import "../SearchItem/Search.css";
import { store } from "../Store/Data";

function SearchProduct() {

    const [Sdata] = useContext(store);
    
    const location = useLocation();
    const searchData = location.state ? location.state.searchData : [];
    // console.log("values:", searchData);
    
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
            <div className="MyLearningPage"><br/>
            <h1>Your Search Products</h1><br/><hr/>
                    <div className="forBLast_content_learning">
                    {searchData.map((item, index) => {
                        return (
                        <>
                                <div className="forBLast_content_item dropdown" key={index} onMouseEnter={() => handleHoverDropdownToggle(index)} onMouseLeave={() => handleHoverDropdownToggle(index)}>

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
                                            <img className="forBLast_content_item1_Img" src={item.image} alt="FinanceAccountingimage" />
                                    </div>
                                    
                                    <div className="forsearchprod">
                                        <div className="forBLast_content_item2 formmimg">
                                            <h3>{item.name}</h3>
                                            <p>{item.discr}</p>
                                            <p className="forlastcolor">{item.Wname}</p>
                                            
                                            <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
                                        </div>

                                        <div className="forBLast_content_item3_for_search learnMy">
                                                <h4>₹ {item.price}</h4>
                                                <p><del>₹ {item.oldprice}</del></p>
                                        </div>
                                    </div>


                                        <div className="forBLast_content_item2 blockserchp">
                                            <h3>{item.name}</h3>
                                            <p>{item.discr}</p>
                                            <p className="forlastcolor">{item.Wname}</p>
                                            
                                            <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
                                        </div>

                                        <div className="forBLast_content_item3_for_search learnMy blockserchp">
                                                <h4>₹ {item.price}</h4>
                                                <p><del>₹ {item.oldprice}</del></p>
                                        </div>

                                    <div className="serchproductaddBTn">
                                            <AddCardBtn product={item}/>
                                    </div>
                                </div><hr/>
                                </>
                        )
                        })}        


                    </div>

            </div><br/>
        </>
    )
}

export default SearchProduct;