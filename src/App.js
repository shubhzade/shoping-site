import react, { useState,useEffect } from "react";
import "./App.css";
import Header from "./Header";
import "./header.css";
import Home from "./Home";
import "./home.css";
import Checkout from "./Checkout";
import Login from  "./Login"
import Payment from "./Payment"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import {auth }from "./firebase";

import {useStateValue} from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IMAIEKqehFF6E8UFYY1NVgQr9LRxVtuU9hU6Ps5ZY0UcTynAf1xrt1nqux5DR84f09NBpsKuL9j0At9sZ5Fh25N00nklHJQbF"
);


const App = () => {
  const [{},dispatch]=useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          
          <Route path="/checkout">
        <Header />

            <Checkout />
          </Route>


          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
