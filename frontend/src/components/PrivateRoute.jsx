import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

import { UserContext } from "./Context.jsx";
import { viewPost } from "../utils/api/post";
import Loader from "./Loader.jsx";

const PrivateRoute = ({ Component }) => {
  const { account, setReqURL, role } = useContext(UserContext);
  const location = useLocation();
  const { postid } = useParams();
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = localStorage.getItem(account) == null ? false : true;

  useEffect(() => {
    setReqURL(location.pathname);

    async function postFetch() {
      try {
        const response = await viewPost(postid);
        
        if (response.status === 200) {
          setCurrentPost(response.payload);
        } else {
          console.log(response.error);
        }
      } catch (error) {
        console.error('Error fetching data (source: privateRoute.jsx):', error);
      } finally {
        setLoading(false);
      }
    }

    if (postid) postFetch();
    else setLoading(false);

  }, []);

  
  if (loading) {
    return <Loader />
  }

  return (
    (account && account !== "login") || auth ? (
      postid ?
        ((currentPost?.author === account) || (account === "admin") || (role === 'super_user') ?
          <Component currentPost={currentPost} />
          :
          <Navigate to={"/"} />
        )
        :
        <Component />
    )
      :
      <Navigate to={"/login"} />
  );
};

export default PrivateRoute;
