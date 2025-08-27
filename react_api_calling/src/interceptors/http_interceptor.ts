import type {InternalAxiosRequestConfig } from "axios";

const http_interceptor = (config : InternalAxiosRequestConfig)=>{
    const token : string = localStorage.getItem('token') || '';
    config.headers = config.headers || {};

    if(token){
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}

export default http_interceptor;