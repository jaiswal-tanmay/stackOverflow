import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "./Context";
import { allPosts } from "../utils/api/post";

import "../css/Home.css";


export default function Home() {

	const navigate = useNavigate();
	const { questionData, setQuestionData } = useContext(UserContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await allPosts();
				if (response.status === 200) {
					setQuestionData(response.payload);
				} else {
					console.error('Failed to fetch data:', response);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [])

	return (
		<div className="bodyContainer">
			<div className="bodyHeader">
				<h1>
					Top Questions
				</h1>
				<h5
					className="askQuestion-btn"
					onClick={() => navigate('/askQuestion')}
				>
					Ask Question
				</h5>
			</div>

			<div className="questionContainer">
				{questionData?.map((eachQuestion, idx) => {
					return (
						<div className="question-item" key={idx}>
							<div className="question-item-left">
								<h6>
									{eachQuestion.votes.totalVotes} votes
								</h6>
								<h6>
									{eachQuestion.answers.length} answers
								</h6>
								<h6>
									{eachQuestion.views} views
								</h6>
							</div>

							<div className="question-item-right">
								<h3 to="/" onClick={() => navigate('/post/' + eachQuestion.id)}>
									{eachQuestion.title}
								</h3>

								<div>
									<ul className="listStyle">
										{eachQuestion.tags.map((tag, i) => {
											return (
												<li key={i}>
													{tag}
												</li>
											);
										})}
									</ul>
									<div className="question-item-author">
										<h6>{eachQuestion.author}</h6>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
