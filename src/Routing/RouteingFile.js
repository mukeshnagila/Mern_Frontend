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
import Design from "../MainComponent/Design";
import Marketing from "../MainComponent/Marketing";
import LifeStyle from "../MainComponent/LifeStyle";
import Photography from "../MainComponent/Photography";
import Music from "../MainComponent/Music";
import Health from "../MainComponent/Health";
import Academic from "../MainComponent/Academic";
import WebD from "../Components/Desine/WebD";
import GameD from "../Components/Desine/GameD";
import AnimationD from "../Components/Desine/AnimationD";
import FashionD from "../Components/Desine/FashionD";
import OtherD from "../Components/Desine/OtherD";
import DigitalM from "../Components/Marketing/DigitalM";
import MediaM from "../Components/Marketing/MediaM";
import PublicM from "../Components/Marketing/PublicM";
import ContectM from "../Components/Marketing/ContentM";
import ProductM from "../Components/Marketing/ProductM";
import ArtsS from "../Components/Life_Style/ArtsS";
import BeautyS from "../Components/Life_Style/BeautyS";
import FoodS from "../Components/Life_Style/FoodS";
import PetS from "../Components/Life_Style/PetS";
import TravelS from "../Components/Life_Style/TravelS";
import DigitalP from "../Components/Photography/DigitalP";
import PhotoP from "../Components/Photography/PhotoP";
import VideoP from "../Components/Photography/VideoP";
import CommercialP from "../Components/Photography/CommercialP";
import PtoolP from "../Components/Photography/PtoolP";
import Instrument from "../Components/Music/InstrumentA";
import MusicA from "../Components/Music/MusicA";
import VocalA from "../Components/Music/VocalA";
import Msoftware from "../Components/Music/Msoftware";
import Mtecn from "../Components/Music/Mtecn";
import FitnessH from "../Components/Health/FitnessH";
import SportH from "../Components/Health/SportH";
import YogaH from "../Components/Health/YogaH";
import MHealthH from "../Components/Health/MHealthH";
import DanceH from "../Components/Health/DanceH";
import Engineering from "../Components/Academic/Engineering";
import TraningT from "../Components/Academic/TraningT";
import SScienceT from "../Components/Academic/SScienceT";
import ScienceT from "../Components/Academic/ScienceT";
import MathsT from "../Components/Academic/MathsT";
import PageNotFound from "../Components/PageNotFound";

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


                            <Route path="/Design" element={<Design />} />
                            <Route path="/Desine/web_D" element={<WebD />} />
                            <Route path="/Desine/game_D" element={<GameD />} />
                            <Route path="/Desine/animation_D" element={<AnimationD />} />
                            <Route path="/Desine/fashion_D" element={<FashionD />} />
                            <Route path="/Desine/other_D" element={<OtherD />} />


                            <Route path="/Marketing" element={<Marketing />} />
                            <Route path="/Marketing/Digital_M" element={<DigitalM />} />
                            <Route path="/Marketing/Media_M" element={<MediaM />} />
                            <Route path="/Marketing/Public_M" element={<PublicM />} />
                            <Route path="/Marketing/Content_M" element={<ContectM />} />
                            <Route path="/Marketing/Product_M" element={<ProductM />} />


                            <Route path="/LifeStyle" element={<LifeStyle />} />
                            <Route path="/LifeStyle/Arts_S" element={<ArtsS />} />
                            <Route path="/LifeStyle/Beauty_S" element={<BeautyS />} />
                            <Route path="/LifeStyle/Food_S" element={<FoodS />} />
                            <Route path="/LifeStyle/Pet_S" element={<PetS />} />
                            <Route path="/LifeStyle/Travel_S" element={<TravelS />} />


                            <Route path="/Photography" element={<Photography />} />
                            <Route path="/Photography/Digital_p" element={<DigitalP />} />
                            <Route path="/Photography/Photo_p" element={<PhotoP />} />
                            <Route path="/Photography/Video_p" element={<VideoP />} />
                            <Route path="/Photography/Commercial_p" element={<CommercialP />} />
                            <Route path="/Photography/Ptool_p" element={<PtoolP />} />


                            <Route path="/Music" element={<Music />} />
                            <Route path="/Music/Instruments_m" element={<Instrument />} />
                            <Route path="/Music/Music_m" element={<MusicA />} />
                            <Route path="/Music/Vocal_m" element={<VocalA />} />
                            <Route path="/Music/Msoftware_m" element={<Msoftware />} />
                            <Route path="/Music/Mtechniqe_m" element={<Mtecn />} />


                            <Route path="/Health" element={<Health />} />
                            <Route path="/Health/Fitness_h" element={<FitnessH />} />
                            <Route path="/Health/Sport_h" element={<SportH />} />
                            <Route path="/Health/Yoga_h" element={<YogaH />} />
                            <Route path="/Health/Mhealth_h" element={<MHealthH />} />
                            <Route path="/Health/Dance_h" element={<DanceH />} />


                            <Route path="/Academic" element={<Academic />} />
                            <Route path="/Academic/Engineering_T" element={<Engineering />} />
                            <Route path="/Academic/Math_T" element={<MathsT />} />
                            <Route path="/Academic/Science_T" element={<ScienceT />} />
                            <Route path="/Academic/SScience_T" element={<SScienceT />} />
                            <Route path="/Academic/Training_T" element={<TraningT />} />



                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<SignupPage />} />
                            <Route path="/Cart" element={<CartPage />} />
                            <Route path="/Mylearning" element={<MyLearning />} />
                            <Route path="/SearchItem" element={<SearchProduct />} />
                            <Route path="/TeachUdemy" element={<TeachUdemy />} />
                            <Route path="*" element={<PageNotFound />} />

                    </Routes>
            </DataStore>    
            </div>
            <Footer />
        </>
    )
}

export default RouteingFile;