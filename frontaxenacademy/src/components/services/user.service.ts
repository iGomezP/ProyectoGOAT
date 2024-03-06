import axios from "axios";
import ResultObject from "../models/ResultObject";
import User from "../models/User";
import UserRegistration from "../models/UserRegistration";
import { API_URL, Enviroment } from "../../enviroment/enviroment";
let axiosConfig = {
    headers: {
        "Content-Type":"application/json",
        "accept":"*",
    },
};
const login = async (request: User) : Promise<ResultObject> => {
    console.log(`${API_URL}/${Enviroment.apiUsers}/login`,request,axiosConfig)
    const response = await axios.post<ResultObject>
    (`${API_URL}/${Enviroment.apiUsers}/login`,request,axiosConfig);
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