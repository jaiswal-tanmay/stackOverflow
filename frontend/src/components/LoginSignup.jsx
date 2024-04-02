import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

import { UserContext } from "./Context";

import "../css/LoginSignup.css";


const LoginSignup = () => {

  const navigate = useNavigate();
  const { setRole, setAccount, setAccountID, setUserToken } = useContext(UserContext);

  const [userid, setUserid] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userConfirmPwd, setUserConfirmPwd] = useState('');
  const [showLogin, setShowLogin] = useState('login');
  const [error, setError] = useState('');


  const clearLoginFields = () => {
    setUserid('');
    setUserPwd('');
    setUserConfirmPwd('');
    document.getElementsByName('username')[0].value = '';
    document.getElementsByName('password')[0].value = '';
    if (showLogin === "signUp") {
      document.getElementsByName('confirm-password')[0].value = '';
    }
  };

  const handleLoginSignup = async () => {
    if ((showLogin==="signUp" && (userid.length === 0 || userPwd.length === 0 || userConfirmPwd === 0))
        || (showLogin==="login" && (userid.length === 0 || userPwd.length === 0))) {
      setError('All fields required.');
      return;
    }

    if (showLogin==="signUp" && userPwd !== userConfirmPwd) {
      setError("Passwords do not match.")
      return;
    }

    if (showLogin === "login") {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/sessions', { username: userid, password: userPwd });
        const token = response.data.token;

        localStorage.setItem('token', token);

        const decodedToken = jwtDecode(token);
        const { user_id: decodedID, username: decodedUsername, role: decodedRole } = decodedToken;

        setError('');
        clearLoginFields();
        setAccountID(decodedID);
        setAccount(decodedUsername);
        setRole(decodedRole);
        setUserToken(token);
        navigate("/");
      }
      catch (error) {
        setError('Invalid username or password');
      }
    }
    else {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/users', { username: userid, password: userPwd });
        if (response.status !== 201) {
          setError("Check console for erros.");
          console.log(response.data);
          return;
        }

        const token = response.data.token;
        localStorage.setItem('token', token);

        const decodedToken = jwtDecode(token);
        const { user_id: decodedID, username: decodedUsername, role: decodedRole } = decodedToken;

        setError('');
        clearLoginFields();
        setAccountID(decodedID);
        setAccount(decodedUsername);
        setRole(decodedRole);
        setUserToken(token);
        navigate("/");
      }
      catch (error) {
        setError('Signup failed. Please try again.');
      }
    }
  };


  return (
    <div className="login-signup-container">
      <div className="login-signup-form" onClick={ e => e.stopPropagation() }>
        <h3> Welcome </h3>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          autoComplete="off"
          onChange={(e) => setUserid(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="login-pwd"
          placeholder="Enter password"
          onChange={(e) => setUserPwd(e.target.value)}
        />

        { showLogin === "signUp" &&
          <input
            type="password"
            name="confirm-password"
            id="signup-confirm-pwd"
            placeholder="Re-enter password"
            onChange={(e) => setUserConfirmPwd(e.target.value)}
          />
        }

        <>
          <Link className="login-signup-btn" onClick={handleLoginSignup}>
            {showLogin}
          </Link>

          { error && <div className="error-div">{error}</div> }

          <span className="login-signup-footer">
            {showLogin === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <span
              onClick={(e) => {
                setShowLogin(showLogin === "login" ? "signUp" : "login");
                setError('');
                clearLoginFields();
              }}
            >
              {showLogin !== "login" ? " Login" : " Sign up"}
            </span>
          </span>
        </>
      </div>
    </div>

  );
};

export default LoginSignup;
