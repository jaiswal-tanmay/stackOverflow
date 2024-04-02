import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "./Context";
import Restricted from "./Restricted";
import Loader from "./Loader";
import { userDeletion, userUpdation, usersList } from "../utils/api/user";

import "../css/ManageUsers.css";

const disableTag = {
	pointerEvents: "none"
}

const postDeletionContainer = {
	left: 'calc(50% - 200px)',
	top: 'calc(12%)',
	width: '400px',
	margin: 'auto',
	position: 'fixed',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	background: '#f7f7f7',
	borderRadius: '5px',
	zIndex: '10',
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



export default function ManageUsers() {
	const navigate = useNavigate();
	const { role, account, userToken, setRole } = useContext(UserContext);
	const [allUsers, setAllUsers] = useState("");
	const [loader, setLoader] = useState(true);
	const [roleError, setRoleError] = useState("");
	const [showDelete, setShowDelete] = useState(false);

	const [targeted, setTarget] = useState('');

	let usersLen = 0;

	useEffect(() => {
		if (role === "admin") {
			fetchUsers();
		}
	}, [])

	async function fetchUsers() {
		try {
			const response = await usersList(userToken);
			if (response.status === 200) {
				setAllUsers(response.payload);
			}
			else {
				setRoleError("check console for error");
			}

		}
		catch (error) {
			console.log(error);
		}
		finally {
			setLoader(false);
		}
	}

	function updateUserRole(e) {
		const userIdx = e.target.classList[1];
		const myselect = document.getElementsByClassName("manage-users-role")[userIdx];

		document.getElementsByClassName("manage-users-action " + userIdx)[0].style.pointerEvents = "none";
		document.getElementsByClassName("manage-users-action " + userIdx)[1].style.pointerEvents = "auto";
		myselect.removeAttribute("disabled");
	}

	async function saveUserRole(e) {
		const userIdx = e.target.classList[1];
		const myselect = document.getElementsByClassName("manage-users-role")[userIdx];

		try {
			const response = await userUpdation(
				userToken,
				allUsers[userIdx].id,
				{
					role: myselect.value
				}
			);

			if (response.status === 200) {
				setRoleError(`Role Updated.`);
			}
			else {
				console.log(response.error);
			}
		}
		catch (error) {
			console.log(error);
		}

		document.getElementsByClassName("manage-users-action " + userIdx)[1].style.pointerEvents = "none";
		document.getElementsByClassName("manage-users-action " + userIdx)[0].style.pointerEvents = "auto";
		myselect.setAttribute("disabled", "disabled");
	}

	function deletePopup(e) {
		setShowDelete(true);
		setTarget(e);
	}

	function cancelDeletePopup() {
		setShowDelete(false);
		setTarget('');
	}

	async function handleUserDelete() {
		const userIdx = targeted.target.classList[1];

		try {
			const response = await userDeletion(userToken, allUsers[userIdx].id);
			if (response?.status === 200) {
				setAllUsers(response.payload);
				setRoleError("account deleted successfully.");
			}
		}
		catch (error) {
			console.log(error);
		}
		finally {
			setShowDelete(false);
		}
	}


	if (role !== "admin") {
		return <Restricted />
	}
	else if (loader) {
		return <Loader />
	}
	else {
		return (
			<div className="manage-users-container">
				{
					roleError &&
					<div className="error-div margin-bottom-10">
						{roleError}
					</div>
				}

				{showDelete &&
					<div style={postDeletionContainer}>
						<h5>Are you sure you want to delete this user account?</h5>
						<div style={confirmationDeletion}>
							<h6 style={{ ...deleteBtn, background: 'green' }} onClick={cancelDeletePopup}>cancel</h6>
							<h6 style={deleteBtn} onClick={handleUserDelete}>delete</h6>
						</div>
					</div>
				}

				<div className="manage-users-header">
					<span className="manage-users-col">Users</span>
					<span className="manage-users-col">Role</span>
					<span className="manage-users-col">Action</span>
				</div>

				<div className="manage-users-body">
					{allUsers?.map((data, idx) => {
						usersLen++;

						return (
							<div
								key={idx + 1}
								className={"manage-users-row " + idx}
							>
								<span className="manage-users-col">
									{data.username}
								</span>
								<select
									disabled
									defaultValue={data.role}
									className="manage-users-role manage-users-col"
								>
									<option value="user">User</option>
									<option value="super_user">Super User</option>
									<option value="admin">Admin</option>
								</select>

								{ data.username === account &&
								<div className="manage-users-col" style={disableTag}>
								
									<span
										className={"manage-users-action " + idx}
										onClick={updateUserRole}
									>
										update
									</span>
									<span
										style={disableTag}
										className={"manage-users-action " + idx}
										onClick={saveUserRole}
									>
										save
									</span>
									<span
										className={
											"manage-users-action " + idx
										}
										onClick={deletePopup}
									>
										delete
									</span>
								</div>
								}
	
								{ data.username !== account &&
								<div className="manage-users-col">
								
									<span
										className={"manage-users-action " + idx}
										onClick={updateUserRole}
									>
										update
									</span>
									<span
										style={disableTag}
										className={"manage-users-action " + idx}
										onClick={saveUserRole}
									>
										save
									</span>
									<span
										className={
											"manage-users-action " + idx
										}
										onClick={deletePopup}
									>
										delete
									</span>
								</div>
								}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
