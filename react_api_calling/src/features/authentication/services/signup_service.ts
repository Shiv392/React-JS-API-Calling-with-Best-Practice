import axios_instance from "../../../interceptors/axios_instance"
import type { signupapi_model } from "../types/signup";
import { endpoint_controllers } from "../../../constants/controllers/controller";

const signup_service = async(apibody : {email : string, password : string, name : string}): Promise<signupapi_model> =>{
const res = await axios_instance.post<signupapi_model>(endpoint_controllers.signup, apibody);
return res.data;
}

export default signup_service;