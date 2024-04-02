import React from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "../css/PostQuestion.css";


export default function PostQuestion({ title, setTitle, desc, setDesc, outcome, setOutcome, tags, setTags }) {

    return (
        <>
            <div className="post-question-header">
                <h2>
                    Ask a public question
                </h2>
                
                <img
                    width={"50%"}
                    height={"120px"}
                    src="https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf"
                    alt="bg-img"
                />
            </div>

            <div className="post-input-container">
                <h2>Title</h2>
                <h5>
                    Be specific and imagine you’re asking a question to another
                    person
                </h5>
                <input
                    className="text-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="write your question title here."
                />
            </div>

            <div className="post-input-container">
                <h2>What are the details of your problem?</h2>
                <h5>
                    Introduce the problem and expand on what you put in the
                    title. Minimum 20 characters.
                </h5>
                <ReactQuill
                    className="react-quill"
                    theme="snow"
                    value={desc}
                    onChange={setDesc}
                    placeholder="describe the problem"
                />
            </div>

            <div className="post-input-container">
                <h2>What did you try and what were you expecting?</h2>
                <h5>
                    Describe what you tried, what you expected to happen, and
                    what actually resulted. Minimum 20 characters.
                </h5>
                <ReactQuill
                    className="react-quill"
                    theme="snow"
                    value={outcome}
                    onChange={setOutcome}
                    placeholder="describe the problem"
                />
            </div>

            <div className="post-input-container">
                <h2>Tags</h2>
                <h5>
                    Add up to 5 tags to describe what your question is about.
                    Start typing to see suggestions.
                </h5>
                <input
                    className="text-input"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="e.g. (angularjs regex ruby-on-rails)"
                />
            </div>
        </>
    );
};

