import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "./Context";

import "../css/UserProfile.css";
import { allPosts } from "../utils/api/post";


export default function UserProfile() {

    const navigate = useNavigate();
    const { account, setQuestionData } = useContext(UserContext);
    const [userPosts, setUserPosts] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await allPosts();

                if (response.status === 200) {
                    setQuestionData(response.payload)
                    setUserPosts(response.payload.filter((post) => post.author === account));
                } else {
                    console.error('Failed to fetch data:', response);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [account])

    
    if (!userPosts) {
        return (
            <div>
                fetching data .....please wait
            </div>
        )
    }


    return (
        <div className="user-post">
            <div className="post-header">
                <div>
                    <h2>Your Posts</h2>
                    <h5
                        className="ask-btn"
                        onClick={() => navigate('/askQuestion')}
                    >
                        Ask Question
                    </h5>
                </div>
            </div>

            <div className="profile-body">
                {
                    userPosts.length ?
                        userPosts.map((ele, idx) => {
                            return (
                                <div key={idx} className="profile-item">
                                    <div className="profile-item-left">
                                        <h4
                                            className="profile-item-title"
                                            onClick={() => {
                                                navigate('/post/' + ele.id);
                                            }}
                                        >
                                            {ele.title}
                                        </h4>
                                        <h5 className="profile-item-tags">
                                            {
                                                ele.tags.map((tag, j) => {
                                                    return (
                                                        <span className="profile-item-tag" key={j}>{tag}</span>
                                                    )
                                                })
                                            }
                                        </h5>
                                    </div>

                                    <div className="profile-item-right">
                                        <span className="profile-item-right-span">views: {ele.views}</span>
                                        <span className="profile-item-right-span">answers: {ele.answers.length}</span>
                                        <span className="profile-item-right-span">votes: {ele.votes.totalVotes}</span>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h2>You haven't posted anything yet.</h2>
                }
            </div>
        </div>
    )
}