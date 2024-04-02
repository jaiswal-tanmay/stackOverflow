import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import PostQuestion from './PostQuestion';
import { UserContext } from './Context';
import { updatePost } from '../utils/api/post';

export default function PostEdit({ currentPost }) {

  const { accountID, userToken } = useContext(UserContext);
  const navigate = useNavigate();

  const { postid } = useParams();
  const postIndex = parseInt(postid);

  const [title, setTitle] = useState(currentPost.title);
  const [desc, setDesc] = useState(currentPost.description);
  const [outcome, setOutcome] = useState(currentPost.outcome);
  const [tags, setTags] = useState(currentPost.tags.join(" "));
  const [updateError, setUpdateError] = useState("");

  const updateQuestion = async () => {

    if (title.length === 0 || desc.length === 0 || outcome.length === 0 || tags.length === 0) {
      setUpdateError('All Fields Required.');
    }
    else {

      const response = await updatePost({
        id: postIndex,
        title,
        description: desc,
        outcome,
        tags,
        user_id: currentPost.author_id
      }, userToken)

      if (response.status === 200) {
        navigate("/post/" + postIndex);
      }
      else {
        alert("error occured while updating. check console for erros.");
        console.log(response);
      }
    }
  }

  const clearQuestion = () => {

    setTitle('');
    setDesc('');
    setOutcome('');
    setTags('');

    navigate('/post/' + postIndex);
  }


  return (
    <div className="askQuestionContainer">
      <PostQuestion
        title={title} setTitle={setTitle}
        desc={desc} setDesc={setDesc}
        outcome={outcome} setOutcome={setOutcome}
        tags={tags} setTags={setTags}
      />

      {
        updateError &&
        <div className="error-div padding-10">{updateError}</div>
      }

      <div className="askQuestion-actions">
        <h5 className="askQuestion-btn askQuestin-post-btn" onClick={updateQuestion}> Update Post </h5>
        <h5 className="askQuestion-btn askQuestion-discard-btn" onClick={clearQuestion}> Discard </h5>
      </div>
    </div>
  )
}
