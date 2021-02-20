import React, {useState} from "react";
import { NavLink ,useHistory } from "react-router-dom";
import "./login.css";
import {auth }from "./firebase";



function Login() {
    const history =useHistory();
    const [email,setEmail]=useState('');
    const [password,setpassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }



    const register=e=>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // create  new user with email& user 
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))


    }
  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </NavLink>
      <div className="login_conatiner">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password"  value={password} onChange={e=>setpassword(e.target.value)} />
          <button type="submit" onClick={signIn} className="login_signinButton" >Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button type="submit" onClick={register} className="login_registerButton">Create your Acount</button>
      </div>
    </div>
  );
}

export default Login;
