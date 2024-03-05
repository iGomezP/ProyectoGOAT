import axios from "axios";
import ResultObject from "../models/ResultObject";
import User from "../models/User";
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

const loginServices = {
    login,
};
export default loginServices;