import axios from 'axios';
import { loginModel } from "../models/loginModel";
import ResultObject from '../models/ResultObject';
let axiosConfig = {
    headers: {
        "Content-Type":"application/json;",
        "accept":"*"
    }
}
export const login = async (request: loginModel): Promise<ResultObject> => {
    //axios.post
    const response = await axios.post<ResultObject>
    ('https://bulkuploadstests.azurewebsites.net/api/users/login',
    request, axiosConfig);
    return response;
};