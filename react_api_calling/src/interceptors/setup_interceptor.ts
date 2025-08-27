import http_interceptor from "./http_interceptor";
import error_interceptor from "./error_interceptor";
import type { AxiosInstance } from "axios";

const setup_interceptors = (axios_instance : AxiosInstance)=>{
axios_instance.interceptors.request.use(http_interceptor, error=> Promise.reject(error));
axios_instance.interceptors.response.use(response=> response, error_interceptor);
}

export default setup_interceptors;