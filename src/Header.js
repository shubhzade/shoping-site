import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";



function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }



  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </NavLink>
      <div className="header_search" >
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
      <NavLink to={!user && '/login'}>
        <div  onClick={handleAuthenticaton} className="header_option">
        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>

        </div>
        </NavLink>

        <div className="header_option">
          <span className="header_optionLineOn">return </span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOn">your </span>
          <span className="header_optionLineTwo"> Prime</span>
        </div>

        <NavLink to="checkout">
          <div className="header_optionaBascket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
