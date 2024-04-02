import axios from "axios";

const URL = "http://localhost:4000/api/v1";


export const postVote = async(data, token) => {
    try {
        const response = await axios.post(URL + "/post_votes", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 201) {
            return {payload: response.data, status: 200};
        }
        else return {error: response, status: 500};
    } 
    catch (error) {
        console.log(error);
    }
}

export const ansVote = async(data, token) => {
    try {
        const response = await axios.post(URL + "/ans_votes", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 201) {
            return {payload: response.data, status: 200};
        }
        else return {error: response, status: 500};
    } 
    catch (error) {
        console.log(error);
    }
}