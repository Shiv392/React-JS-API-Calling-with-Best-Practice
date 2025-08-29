import { useState } from "react";
import signup_service from "../services/signup_service";
import type { AxiosError } from "axios";

const useSignup = ()=>{
const [loading, set_loading] = useState<boolean>(false);
const [error, set_error] = useState<string | null>(null);

const handle_signup = async(name : string, email : string, password : string)=>{
set_loading(true);
set_error(null);
try{
const data = await signup_service({name, email, password});
return data;
}
catch(err){
const axios_error = err as AxiosError<{error : string}>;
const error_message = axios_error.response?.data?.error;
return Promise.reject(error_message || 'Signup Failed');
}
finally{
    set_loading(false);
}
}

return {loading, error, handle_signup}
}

export default useSignup;