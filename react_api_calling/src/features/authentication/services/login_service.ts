import axios_instance from "../../../interceptors/axios_instance";
import type { loginapi_model } from "../types/login";

const login_service = async(apibody : {email : string, password : string}) : Promise<loginapi_model> =>{
const res = await axios_instance.post<loginapi_model>('/login', apibody);
return res.data;
}

export default login_service;