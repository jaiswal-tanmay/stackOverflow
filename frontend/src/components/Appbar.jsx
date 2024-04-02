import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserContext } from "./Context";
import { profileMenuClose } from "../utils/LoginPopup";
import { jwtDecode } from "jwt-decode";

import "../css/Appbar.css";

const Appbar = () => {
  const { account, setAccount, role, setRole, setAccountID, setUserToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setAccount(decodedToken.username);
        setRole(decodedToken.role);
        setAccountID(decodedToken.user_id);
        setUserToken(token);
        console.log(`Logged in as: ${decodedToken.username}`);

      } catch (error) {
        console.error('Error decoding JWT token:', error);
      }
    } else {
      console.log('No JWT token found in localStorage');
    }
  }, [setAccount, setRole, setAccountID, navigate, setUserToken]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAccount("login");
    setAccountID(undefined);
    setUserToken("");
    profileMenuClose();
    navigate("/");
  }

  const profilePopup = () => {
    if (account !== "login") {
      let profile_menu = document.getElementsByClassName("profile-menu")[0];
      let visible = profile_menu.style.display;

      if (visible === "block") profile_menu.style.display = "none";
      else profile_menu.style.display = "block";
    }
  }

  return (
    <div>
      <div className="appBarContainer">
        <h2 onClick={() => navigate("/")}>
          stack <span>overflow</span>
        </h2>

        <div className="search-bar">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="search"
          />
        </div>

        <div className="user-actions">
          <Link className="notify" to="/notify">
            <span className="material-symbols-outlined">inbox</span>
            <span>inbox</span>
          </Link>

          <span
            className="user-login"
            onClick={() => {
              if (account === "login") navigate("/login")
              profilePopup();
            }}
          >
            <span className="material-symbols-outlined">account_circle</span>
            <span> {account} </span>
          </span>

          <div className="profile-menu">
            <ul>
              <li onClick={() => profileMenuClose()}>
                <Link to="/profile">My Posts</Link>
              </li>

              {role == 'admin' &&
                <li onClick={() => profileMenuClose()}>
                  <Link to="/manage-users">Manage Users</Link>
                </li>
              }

              <li onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Appbar;