import axios from "axios";
import enviroments from "../constants/enviroments/environment";
import setup_interceptors from "./setup_interceptor";

const axios_instance = axios.create({
    baseURL : enviroments.server_api_link,
    withCredentials : true //for cookies
});

setup_interceptors(axios_instance);

export default axios_instance;