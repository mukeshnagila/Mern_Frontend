import React from "react";
import { useLocation } from "react-router-dom";
import AddCardBtn from "../Cart/AddToCart/BtnAddCart";
import "../SearchItem/Search.css";

function SearchProduct() {

    const location = useLocation().state;
    console.log("values:", location.searchData);
    const SearchResult = location.searchData;

    return(
        <>
            <div className="MyLearningPage"><br/>
            <h1>Your Search Products</h1><br/><hr/>
                    <div className="forBLast_content_learning">
                    {SearchResult.map((item, index) => {
                        return (
                        <>
                                <div className="forBLast_content_item" key={index}>
                                    <div className="forBLast_content_item1">
                                            <img className="forBLast_content_item1_Img" src={item.image} alt="FinanceAccountingimage" />
                                    </div>

                                        <div className="forBLast_content_item2">
                                            <h3>{item.name}</h3>
                                            <p>{item.discr}</p><br/>
                                            <p className="forlastcolor">{item.Wname}</p>
                                            <br/>
                                            <p className="forlastcolor">1.5 total hours . 38 lectures . All Levels</p>
                                        </div>

                                    <div className="forBLast_content_item3 learnMy">
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