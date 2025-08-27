import type { AxiosError } from "axios";

const error_interceptor = (error : AxiosError)=>{
    const status : number = error.response?.status || 502; //get the status code the response's error
    if(status==401){
    console.log('unauthorized errro -------->')
    }

    return Promise.reject(error); //return to the catch block of the try catch 
}

export default error_interceptor;