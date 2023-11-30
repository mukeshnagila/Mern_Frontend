import React from "react";
import Nav from "../Navbar/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Communication from "../Components/BusinessCompo/Communication";
import Footer from "../Footer/Footer";
import Business from "../MainComponent/Business";
import Management from "../Components/BusinessCompo/Management";
import Strategy from "../Components/BusinessCompo/Strategy";
import Operations from "../Components/BusinessCompo/Operations";
import HumanR from "../Components/BusinessCompo/HumanR";
import FinanceAccounting from "../MainComponent/Finance_Accounting";
import DataStore from "../Store/Data";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";

function RouteingFile(){
    return(
        <>
            <Nav />
            <div>
            <DataStore>    
                    <Routes>
                            <Route path="/" element={<Home />} />

                            <Route path="/Business" element={<Business />} />
                            <Route path="/Business/Communication" element={<Communication />} />
                            <Route path="/Business/Managements" element={<Management />} />
                            <Route path="/Business/Business_Strategy" element={<Strategy />} />
                            <Route path="/Business/Operations" element={<Operations />} />
                            <Route path="/Business/Human_Resources" element={<HumanR />} />


                            <Route path="/Finance_Accounting" element={<FinanceAccounting />} />


                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<SignupPage />} />

                    </Routes>
            </DataStore>    
            </div>
            <Footer />
        </>
    )
}

export default RouteingFile;