import axios from "axios";

const url = "http://localhost:4000/api/v1";

export const allPosts = async () => {
	try {
		const response = await axios.get(url + "/posts");

		if (response.status === 200) {
			return { payload: response.data, status: 200 };
		} else return { error: response, status: 500 };
	} catch (error) {
		console.log(error);
	}
};

export const searchPosts = async (searchData) => {
	try {

		const response = await (searchData.length > 0 ? 
			axios.get(`${url}/posts?search=${searchData}`)
			:
			axios.get(`${url}/posts`)
		);

		if (response.status === 200) {
			return { payload: response.data, status: 200 };
		} 
		else return { error: response, status: 500 };
	} 
	catch (error) {
		console.log(error);
	}
};

export const viewPost = async (id, token) => {
	try {
		const response = await axios.get(url + "/posts/" + id);

		if (response.status === 200) {
			return { payload: response.data, status: 200 };
		} else return { error: response, status: 500 };
	} catch (error) {
		console.log(error);
	}
};

export const createPost = async (postData, token) => {
	try {
		const response = await axios.post(url + "/posts", postData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status === 201) {
			return { payload: response.data, status: 200 };
		} else return { error: response, status: 500 };
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = async (postData, token) => {
	console.log(postData);
	try {
		const response = await axios.put(
			url + "/posts/" + postData.id,
			postData,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (response.status === 200) {
			return { payload: response.data, status: 200 };
		} else {
			return { error: response, status: 500 };
		}
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = async (id, token) => {
	try {
		const response = await axios.delete(url + "/posts/" + id, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.status === 200) {
			return { payload: response.data, status: 200 };
		} else {
			return {
				error: response,
				status: 500,
			};
		}
	} catch (error) {
		console.log(error);
	}
};
