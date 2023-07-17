import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);


  return (
    <div className="flex justify-between shadow-lg ">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img src={LOGO_URL} alt="logo" className="w-16 mt-2 ml-3" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-3 m-3 space-x-8">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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

          <li className="font-bold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
