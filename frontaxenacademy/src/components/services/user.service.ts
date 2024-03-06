import axios from "axios";
import { ResultObject, ResultError } from "../models/ResultObject";
import User from "../models/User";
import UserRegistration from "../models/UserRegistration";
import { API_URL, Enviroment } from "../../enviroment/enviroment";
const axiosConfig = {
    headers: {
        "Content-Type": "application/json",
        "accept": "*",
    },
};
const login = async (request: User): Promise<ResultObject | ResultError> => {
    console.log(`${API_URL}/${Enviroment.apiUsers}/login`, request, axiosConfig)
    try {
        const response = await axios.post<ResultObject>
            (`${API_URL}/${Enviroment.apiUsers}/login`, request, axiosConfig);
        return response.data;
    } catch (error: any) {
        const responseError = error.response.data.error;
        return {
            error: {
                errorCode: responseError.errorCode,
                message: responseError.message,
                target: responseError.target
            }
        }
    }
};

const register = async (request: UserRegistration): Promise<ResultObject> => {
    const response = await axios.post<ResultObject>(``, request, axiosConfig);
    return response.data;
};

const userServices = {
    login,
    register,
};
export default userServices;