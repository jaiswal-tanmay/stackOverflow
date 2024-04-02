import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "./Context";
import PostQuestion from "./PostQuestion";
import { createPost } from "../utils/api/post";

import "../css/AskQuestion.css";
import "react-quill/dist/quill.snow.css";


const AskQuestion = () => {
    const navigate = useNavigate();
    const { accountID, userToken } = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [outcome, setOutcome] = useState("");
    const [tags, setTags] = useState("");
    const [postError, setPostError] = useState("");

    const submitQuestion = async () => {

        if (title.length === 0 || desc.length === 0 || outcome.length === 0 || tags.length === 0) {
            setPostError("All Fields Required.");
        } else {
            const response = await createPost({
                title: title,
                description: desc,
                outcome: outcome,
                tags: tags,
                user_id: accountID,
            }, userToken);

            if (response.status === 200) {
                navigate("/post/" + response.payload.id);
            }
            else {
                alert("check console for errors.");
                console.log(response);
            }
        }
    };

    const clearQuestion = () => {
        setTitle("");
        setDesc("");
        setOutcome("");

        navigate("/profile");
    };

    return (
        <div className={"askQuestionContainer"}>
            <PostQuestion
                title={title} setTitle={setTitle}
                desc={desc} setDesc={setDesc}
                outcome={outcome} setOutcome={setOutcome}
                tags={tags} setTags={setTags}
            />

            {
                postError &&
                <div className="error-div padding-10">
                    {postError}
                </div>
            }

            <div className="askQuestion-actions">
                <h5 className="askQuestion-post-btn askQuestion-btn" onClick={submitQuestion}>
                    Post
                </h5>
                <h5 className="askQuestion-discard-btn askQuestion-btn" onClick={clearQuestion}>
                    Discard
                </h5>
            </div>
        </div>
    );
};

export default AskQuestion;
