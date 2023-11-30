import axios from 'axios';
import React from "react";
import "../Authentication/LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {

    const navi = useNavigate();
    let empty = [];
    const userdetail = {
        name: "",
        email: "",
        password: "",
    }

    const submithendle = (e) => {
        e.preventDefault(e);
        empty.push(userdetail)
        console.log(userdetail);

        axios.post("https://mern-udemy-clone-backend.onrender.com/api/register", userdetail)
        // axios.post("http://localhost:8008/api/register", userdetail)
                .then((res) => {alert(res.data.message)
                return navi("/login")})
                .catch((err) => console.log(err))
    }

    const onChangehandle = (e) =>{
        e.preventDefault(e);
        userdetail[e.target.name] = e.target.value;
    }

    return(
        <>  
            <div className="forSignup">

                <div>
                    <form>
                        <h2 className="LoginH1">Sign up and start learning</h2><br/>

                        <input className="Loginput" type="name" placeholder="Name"  name='name' onChange={onChangehandle} required /><br />

                        <input className="Loginput" type="email" placeholder="User Email" name='email' onChange={onChangehandle} required /><br/>

                        <input className="Loginput" type="password" placeholder="Password"  name='password' onChange={onChangehandle} required /><br />

                        <button className="logoBtn1" onClick={submithendle}>Sign in</button>

                        <p>Already have an account? <Link className="Donthaveacc" to="/login">Log in</Link></p>

                    </form>
                </div>
                </div>
        </>
    )
}

export default SignupPage;