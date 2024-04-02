import axios from "axios";

const URL = "http://localhost:4000/api/v1";

export const createAnswer = async (answerData, token) => {
    try {
        const response = await axios.post(URL + "/answers", answerData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 201) {
            return { payload: response.data, status: 200 };
        } else {
            return { error: response, status: 500 };
        }
    } catch (error) {
        console.log(error);
    }
}

export const destroyAnswer = async (answerData, token) => {
    try {
        const response = await axios.delete(URL + `/answers/${answerData.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response) {
            return { payload: response.data, status: 200 };
        } else {
            return { error: response, status: 500 };
        }
    } catch (error) {
        console.log(error);
    }
}
