import image from "../../image.png"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus === true ? '✅' : '🔴'}
          </li>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <Link to="/grocery"><li>Grocery</li></Link>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;