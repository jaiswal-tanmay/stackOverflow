import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserContext } from "./components/Context.jsx";
import Home from "./components/Home.jsx";
import Appbar from "./components/Appbar.jsx";
import AskQuestion from "./components/AskQuestion.jsx";
import UserPost from "./components/UserPost.jsx";
import UserProfile from "./components/UserProfile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import LoginSignup from "./components/LoginSignup.jsx";
import Notify from "./components/Notify.jsx";
import ManageUsers from "./components/ManageUsers.jsx";
import PostEdit from "./components/PostEdit.jsx";

import "./App.css";

const App = () => {
  // const [account, setAccount] = useState({id: undefined, username:"login", role:"user"});
  const [account, setAccount] = useState("login");
  const [reqURL, setReqURL] = useState("/");
  const [role, setRole] = useState('user');
  const [accountID, setAccountID] = useState(undefined);
  const [userToken, setUserToken] = useState("");
  const [questionData, setQuestionData] = useState([]);

  return (
    <Router>
      <UserContext.Provider value={{ userToken, setUserToken, account, setAccount, reqURL, setReqURL, role, setRole, questionData, setQuestionData, accountID, setAccountID }}>
        <Appbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/post/:postid" element={<UserPost />} />
          <Route exact path="/notify" element={<Notify />} />
          <Route exact path="/askQuestion" element={<PrivateRoute Component={AskQuestion} />} />
          <Route exact path="/profile" element={<PrivateRoute Component={UserProfile} />} />
          <Route exact path="/post/:postid/edit" element={<PrivateRoute Component={PostEdit} />} />
          <Route exact path="/manage-users" element={<PrivateRoute Component={ManageUsers} />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
