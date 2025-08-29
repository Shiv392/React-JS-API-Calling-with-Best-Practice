import type { AxiosError } from "axios";
import { useState } from "react";
import login_service from "../services/login_service";

const useLogin = ()=>{
const [loading, set_loading] = useState<boolean>(false);
const [error, set_error] = useState<string | null>(null);

const handle_login = async(email : string, password : string)=>{
set_loading(true);
set_error(null);

try{
const data = await login_service({email, password});
return data;
}
catch(err){
const axios_error = err as AxiosError<{messasge : string}>;
const error_msg = axios_error.response?.data.messasge;
return Promise.reject(error_msg || 'Login Failed')
}
finally{
    set_loading(false);
}
}

return {loading, error, handle_login}

}
export default useLogin;