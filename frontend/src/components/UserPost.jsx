import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import Parser from 'html-react-parser';

import { UserContext } from "./Context";
import Loader from "./Loader";
import { deletePost, viewPost } from "../utils/api/post";
import { createAnswer } from "../utils/api/answer";
import { ansVote, postVote } from "../utils/api/vote";

import "../css/UserPost.css";
import "react-quill/dist/quill.core.css";

const postDeletionContainer = {
	left: 'calc(50% - 200px)',
	top: 'calc(15%)',
	width: '400px',
	margin: 'auto',
	position: 'fixed',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	background: '#f7f7f7',
	borderRadius: '5px',
}

const confirmationDeletion = {
	display: 'flex',
	width: '100%',
	justifyContent: 'space-evenly'
}

const deleteBtn = {
	color: 'white',
	background: '#fd2d2d',
	padding: '5px',
	borderRadius: '2px',
	cursor: 'pointer',
}


function UserPost() {

	const navigate = useNavigate();
	const { account, role, accountID, userToken } = useContext(UserContext);
	const [answer, setAnswer] = useState('');
	const [pageError, setPageError] = useState('');
	const [showDelete, setShowDelete] = useState(false);

	const { postid } = useParams();
	const postId = parseInt(postid);

	const [currentPost, setCurrentPost] = useState(undefined);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await viewPost(postId);
				if (response.status === 200) setCurrentPost(response.payload);
				else {
					alert("Check console for errors.");
					console.log(response);
				}
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	}, []);

	useEffect(() => {
		if (currentPost) initializeVotes();
	}, [currentPost]);


	const initializeVotes = () => {
		const pupbtn = document.getElementsByClassName('post-upvote-btn')[0];
		const pdownbtn = document.getElementsByClassName('post-downvote-btn')[0];

		if (currentPost?.votes?.users[account] === 1) {
			pupbtn.style.opacity = '0.5';
			pupbtn.style.color = '#ffffff';
			pupbtn.style.background = '#000000';
		}
		else if (currentPost?.votes?.users[account] === -1) {
			pdownbtn.style.opacity = '0.5';
			pdownbtn.style.color = '#ffffff';
			pdownbtn.style.background = '#000000';
		}

		const aupbtn = document.getElementsByClassName('answer-upvote-btn');
		const adownbtn = document.getElementsByClassName('answer-downvote-btn');

		for (let i = 0; i < currentPost.answers.length; i++) {
			if (currentPost?.answers[i]?.votes?.users[account] === 1) {
				aupbtn[i].style.opacity = '0.5';
				aupbtn[i].style.color = '#ffffff';
				aupbtn[i].style.background = '#000000';
			}
			else if (currentPost?.answers[i]?.votes?.users[account] === -1) {
				adownbtn[i].style.opacity = '0.5';
				adownbtn[i].style.color = '#ffffff';
				adownbtn[i].style.background = '#000000';
			}
		}
	}


	const postAnswer = async () => {

		if (account === "login") {
			setPageError("you cannot post without sign in.");
			return;
		}

		if (answer.length > 11) {
			try {
				const response = await createAnswer(
					{
						desc: answer,
						user_id: accountID,
						post_id: postId
					},
					userToken
				);

				if (response.status === 200) {
					setAnswer('');
					setCurrentPost(
						{
							...currentPost,
							answers: response.payload
						}
					);
				}
				else {
					console.log({ "error": response });
				}
			} catch (error) {
				console.log(error);
			}
		}
		else {
			setPageError('minimum length 5');
		}
	}

	function deletePopup() {
		setShowDelete(true);
	}

	function cancelDeletePopup() {
		setShowDelete(false);
	}

	async function handleDeleteConfirmation() {
		const response = await deletePost(postId, userToken);

		if (response.status === 200) {
			navigate("/profile")
		}
		else {
			alert("deletion failed! check console for errors.");
			console.log(response);
		}
		navigate("/profile");
	}


	async function votePost(flagUp) {

		if (!currentPost) return;

		if (currentPost.author === account || account === "login") return;

		const upbtn = document.getElementsByClassName('post-upvote-btn')[0];
		const downbtn = document.getElementsByClassName('post-downvote-btn')[0];

		if (flagUp) {
			if (currentPost.votes.users[account] === 1) return;

			try {

				const response = await postVote(
					{
						user_id: accountID,
						post_id: postId,
						value: 1,
					},
					userToken
				);

				if (response?.status === 200) {
					setCurrentPost(response.payload);
					downbtn.style.opacity = '1';
					downbtn.style.background = '#ffffff';
					downbtn.style.color = '#000000';
					upbtn.style.opacity = '0.5';
					upbtn.style.color = '#ffffff';
					upbtn.style.background = '#000000';
				}
				else {
					console.log(response);
				}
			}
			catch (error) {
				console.log(error);
			}
		}
		else {

			if (currentPost.votes.users[account] === -1) return;

			try {
				const response = await postVote(
					{
						user_id: accountID,
						post_id: postId,
						value: -1,
					},
					userToken
				);

				if (response.status === 200) {
					setCurrentPost(response.payload);
					downbtn.style.opacity = '0.5';
					downbtn.style.color = '#ffffff';
					downbtn.style.background = '#000000';
					upbtn.style.opacity = '1';
					upbtn.style.background = '#ffffff';
					upbtn.style.color = '#000000';
				}
				else {
					console.log(response);
				}
			}
			catch (error) {
				console.log(error);
			}

		}

		navigate("/post/" + postId)
	}

	async function voteAnswer(flagUp, idx) {

		if (!currentPost) return;

		if (currentPost.answers[idx].author === account || account === "login") return;

		const upbtn = document.getElementsByClassName('answer-upvote-btn')[idx];
		const downbtn = document.getElementsByClassName('answer-downvote-btn')[idx];

		if (flagUp) {
			if (currentPost.answers[idx].votes.users[account] === 1) return;

			const response = await ansVote(
				{
					user_id: accountID,
					post_id: postId,
					answer_id: currentPost.answers[idx].ans_id,
					value: 1,
				},
				userToken
			);

			if (response.status === 200) {
				setCurrentPost(response.payload);
				downbtn.style.opacity = '1';
				downbtn.style.background = '#ffffff';
				downbtn.style.color = '#000000';
				upbtn.style.opacity = '0.5';
				upbtn.style.color = '#ffffff';
				upbtn.style.background = '#000000';
			}
			else {
				console.log(response);
			}

		}
		else {
			if (currentPost.answers[idx].votes.users[account] === -1) return;
			const response = await ansVote(
				{
					user_id: accountID,
					post_id: postId,
					answer_id: currentPost.answers[idx].ans_id,
					value: -1,
				},
				userToken
			);

			if (response.status === 200) {
				setCurrentPost(response.payload);
				downbtn.style.opacity = '0.5';
				downbtn.style.color = '#ffffff';
				downbtn.style.background = '#000000';
				upbtn.style.opacity = '1';
				upbtn.style.background = '#ffffff';
				upbtn.style.color = '#000000';
			}
			else {
				console.log(response);
			}
		}

		navigate("/post/" + postId);
	}

	if (!currentPost) {
		return <Loader />
	}

	return (
		<div className="user-post">
			{showDelete &&
				<div style={postDeletionContainer}>
					<h5>Are you sure you want to delete this post?</h5>
					<div style={confirmationDeletion}>
						<h6 style={{ ...deleteBtn, background: 'green' }} onClick={cancelDeletePopup}>cancel</h6>
						<h6 style={deleteBtn} onClick={handleDeleteConfirmation}>delete</h6>
					</div>
				</div>
			}

			<div className="post-container">
				<div className="post-header">
					<div>
						<h2>{currentPost.title}</h2>
						<h5
							className="askQuestion-btn"
							onClick={() => navigate('/askQuestion')}
						>
							Ask Question
						</h5>
					</div>

					<span>Viewed: <span>{currentPost.views} times</span></span>
				</div>

				<div className="post-body">
					<div className="post-left">
						<h3
							className="post-upvote-btn"
							onClick={() => votePost(true)}
						>
							&gt;
						</h3>
						<h3>
							{currentPost.votes.totalVotes}
						</h3>
						<h3
							className="post-downvote-btn"
							onClick={() => votePost(false)}
						>
							&lt;
						</h3>
					</div>

					<div className="post-right" >
						<div>
							<div>
								{Parser(currentPost.description + currentPost.outcome)}
							</div>

							<div className="post-tags">
								{
									currentPost.tags.map((tag, i) => {
										return (
											<span key={i + 1}>{tag}</span>
										)
									})
								}
							</div>

							<div className="post-body-footer">
								{(currentPost.author === account || role === 'admin') &&
									<div className="post-permissons">
										<span className="post-edit-btn" onClick={() => navigate("/post/" + postId + "/edit")}>
											edit
										</span>

										<span className="post-delete-btn" onClick={deletePopup}>
											delete
										</span>
									</div>
								}
								<h5 className="post-owner">
									{'~' + currentPost.author}
								</h5>
							</div>
						</div>
					</div>
				</div>

				<div className="post-answers">
					<h3 className="post-answers-title">{currentPost.answers.length} Answers</h3>

					<div className="post-answers-container">
						{
							currentPost.answers.map((ans, idx) => {
								return (
									<div key={idx + 1} className="post-answers-item">
										<div className="post-left">
											<h3
												className="answer-upvote-btn"
												onClick={() => voteAnswer(true, idx)}
											>
												&gt;
											</h3>
											<h3>
												{ans.votes.totalVotes}
											</h3>
											<h3
												className="answer-downvote-btn"
												onClick={() => voteAnswer(false, idx)}
											>
												&lt;
											</h3>
										</div>

										<div className="post-right" >
											<div>
												<div className="post-answers-card">
													{Parser(ans.description)}
												</div>
												<h5 className="post-answers-author">~{ans.author}</h5>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>

				<div className="your-answer">
					<h3>Your Answer</h3>
					<ReactQuill className="react-quill" placeholder="answer should be atleast 5 characters" theme='snow' value={answer} onChange={setAnswer} />
				</div>

				{
					pageError &&
					<div className="error-div padding-10">{pageError}</div>
				}

				<h4 className="answer-btn" onClick={postAnswer}>
					Post Your Answer
				</h4>

			</div>
		</div>
	);
}

export default UserPost;
