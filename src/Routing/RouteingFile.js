import React from "react";
import Nav from "../Navbar/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Communication from "../Components/BusinessCompo/Communication";
import Footer from "../Footer/Footer";
import Business from "../MainComponent/Business";

function RouteingFile(){
    return(
        <>
            <Nav />
            <div>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Business" element={<Business />} />
                        <Route path="/Business/Communication" element={<Communication />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default RouteingFile;