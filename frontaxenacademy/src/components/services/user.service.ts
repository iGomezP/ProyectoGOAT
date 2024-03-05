import axios from "axios";
import ResultObject from "../models/ResultObject";
import User from "../models/User";
import UserRegistration from "../models/UserRegistration";
let axiosConfig = {
    headers: {
        "Content-Type":"application/json",
        "accept":"*",
    },
};
const login = async (request: User) : Promise<ResultObject> => {
    const response = await axios.post<ResultObject>(``,request,axiosConfig);
    return response.data;
};
const register = async (request: UserRegistration) : Promise<ResultObject> => {
    const response = await axios.post<ResultObject>(``,request,axiosConfig);
    return response.data;
};

const userServices = {
    login,
    register,
};
export default userServices;