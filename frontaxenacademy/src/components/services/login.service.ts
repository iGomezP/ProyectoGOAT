import axios from "axios";
import ResultObject from "../models/ResultObject";
let axiosConfig = {
    headers: {
        "Content-Type":"application/json",
        "accept":"*",
    },
};
const login = async (request: any) : Promise<ResultObject> => {
    const response = await axios.post<ResultObject>(``,request,axiosConfig);
    return response.data;
};

const loginServices = {
    login,
};
export default loginServices;