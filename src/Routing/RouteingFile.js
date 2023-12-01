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
import DataStore from "../Store/Data";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";
import CartPage from "../Cart/CartPage";
import MyLearning from "../MyLearning/MyLearning";
import SearchProduct from "../SearchItem/SearchProduct";
import AccountingBookkeeping from "../Components/Finance_Accounting/Accounting_Bookkeeping";
import Compliance from "../Components/Finance_Accounting/Compliance";
import Economic from "../Components/Finance_Accounting/Economic";
import Finance from "../Components/Finance_Accounting/Finance";
import Taxes from "../Components/Finance_Accounting/Taxes";
import FinanceAccounting from "../MainComponent/Finance_Accounting";
import Hardware from "../Components/IT_Software/Hardware";
import ITCertification from "../Components/IT_Software/IT_Certification";
import NetworkSecurity from "../Components/IT_Software/Network_Security";
import OperatingSystem from "../Components/IT_Software/Operating_System";
import OtherITSoftware from "../Components/IT_Software/Other_ITSoftware";
import TeachUdemy from "../TeachOnUdemy/TeachUdemy";
import ITSoftware from "../MainComponent/IT_Software";

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
                            <Route path="/Finance_Accounting/Accounting_Bookkeeping" element={<AccountingBookkeeping />} />
                            <Route path="/Finance_Accounting/Compliance" element={<Compliance />} />
                            <Route path="/Finance_Accounting/Economic" element={<Economic />} />
                            <Route path="/Finance_Accounting/Finance" element={<Finance />} />
                            <Route path="/Finance_Accounting/Taxes" element={<Taxes />} />


                            <Route path="/IT_Software" element={<ITSoftware />} />
                            <Route path="/IT_Software/Hardware" element={<Hardware />} />
                            <Route path="/IT_Software/IT_Certification" element={<ITCertification />} />
                            <Route path="/IT_Software/Network_Security" element={<NetworkSecurity />} />
                            <Route path="/IT_Software/Operating_System" element={<OperatingSystem />} />
                            <Route path="/IT_Software/Other_ITSoftware" element={<OtherITSoftware />} />




                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<SignupPage />} />
                            <Route path="/Cart" element={<CartPage />} />
                            <Route path="/Mylearning" element={<MyLearning />} />
                            <Route path="/SearchItem" element={<SearchProduct />} />
                            <Route path="/TeachUdemy" element={<TeachUdemy />} />

                    </Routes>
            </DataStore>    
            </div>
            <Footer />
        </>
    )
}

export default RouteingFile;