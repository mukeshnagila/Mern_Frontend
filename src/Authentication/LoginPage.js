import React, { useState } from "react";
import axios from "axios";
import "../Authentication/LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const navi = useNavigate();

    const [responsemsg, setresponsemsg] = useState("");

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const hendleSubmit = (e) => {
        e.preventDefault()

        const {email, password} = data;

        if(!email || !password) {
            alert("Please Fill out all fields....")
            return;
        }

        if(email && password) {
            axios.post("https://mern-udemy-clone-backend.onrender.com/api/login", data)
            // axios.post("http://localhost:8008/api/login", data)
                    .then((res) => {
                        console.log(res.data);
                        setresponsemsg(res.data.message)
                        alert(res.data.message)
                        localStorage.setItem("token", res.data.token)
                        console.log("token" ,res.data.token);
                        localStorage.setItem("userId", res.data.userId)
                        
                        if(res.data.message === "User is not correct. Please enter the correct details"){
                            navi("/login")
                        }else if(res.data.message === "user logged in successfully"){
                            navi("/")
                            window.location.reload(true)
                        }else{
                            navi("/register")
                        }
                    })
                    .catch((err) => console.log(err))
        }else{
            navi("/register");
        }

        setData({
            email: "",
            password: ""
        })
    }

    return(
        <>  
            <div className="forlogin">

                <div>
                    <form>
                        <h2 className="LoginH1">Log in to your Udemy account</h2><br/>

                        <div className="logoBtn"><img className="logoBtnimg" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToU_W1yK_AyRcGd31ID0v9mgFXA3seTjb4KaRvW7q3Is3OcJG4" alt="loginimg" /><span className="spanlogin">Continue with Google</span></div><br/>

                        <div className="logoBtn"><img className="logoBtnimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hmvwyTpUfoOf41nF2jx-Cfg51UPoq_1Xd49-QrzM1mBjuSco" alt="loginimg" /><span className="spanlogin">Continue with Facebook</span></div><br/>

                        <div className="logoBtn"><img className="logoBtnimg" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSU_rPbrFVYKXVAX0yLPtYC--2Ix-dxthKUi1TODKVzl3eQIdow" alt="loginimg" /><span className="spanlogin">Continue with Apple</span></div><br/>

                        <div className="Loginput-container">
                            <label className={`FloatingLabel ${data.email ? "pin" : ""}`}>User Email</label>
                            <input className="Loginput" type="email" name='email' onChange={handleInput} required /><br/>
                        </div>

                        <div className="Loginput-container">
                            <label className={`FloatingLabel ${data.password ? "pin" : ""}`}>User Password</label>
                            <input className="Loginput" type="password" name='password' onChange={handleInput} required /><br />
                        </div>

                        <button className="logoBtn1" onClick={hendleSubmit}>Log in</button>

                        <p>Don't have an account? <Link className="Donthaveacc" to="/register">Sign up</Link></p>

                    </form>
                    <h2>{responsemsg}</h2>
                </div>
            </div>
        </>
    )
}

export default LoginPage;