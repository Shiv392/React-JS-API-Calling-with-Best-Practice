import type { AxiosError } from "axios";
import { error$ } from "../features/shared/services/notification.service";

type ErrorResponseType = {
  success: boolean;
  message: string;
  error : string
};

const error_interceptor = (error : AxiosError<ErrorResponseType>)=>{
    console.log('error------>', error);
    const status : number = error.response?.status || 502; //get the status code the response's error;
    const error_message = error.response?.data.error;
    console.log('error message-------->', error_message)
    if(status==401){
    error$.next({message : error_message || 'Error'})
    }

    return Promise.reject(error); 
}

export default error_interceptor;