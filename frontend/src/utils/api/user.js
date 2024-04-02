import axios from "axios";

const URL = "http://localhost:4000/api/v1";


export async function usersList(token) {
    try {
        const response = await axios.get(`${URL}/users`, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            return { payload: response.data, status: 200 };
        }
        else {
            return { error: response, status: 200 };
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function userUpdation(token, user_id, data) {
    try {
        const response = await axios.put(`${URL}/users/${user_id}`, 
            data, 
            {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (response.status === 200) {
            return { payload: response.data, status: 200 };
        }
        else {
            return { error: response, status: 200 };
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function userDeletion(token, id) {
    try {
        const response = await axios.delete(`${URL}/users/${id}`, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            return { payload: response.data.users, status: 200 };
        }
        else {
            return { error: response, status: 200 };
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function manageUsers(token) {
    try {
        const response = await axios.get(`${URL}/manage-users`, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            return { payload: response.data, status: 200 };
        }
        else {
            return { error: response, status: 200 };
        }
    }
    catch (error) {
        console.log(error);
    }
}