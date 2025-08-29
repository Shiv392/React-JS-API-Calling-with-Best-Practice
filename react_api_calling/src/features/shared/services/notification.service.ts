import { Subject } from "rxjs";

type notification_payload ={
    message : string
    placement? : 'topLeft'
}

export const success$ = new Subject<notification_payload>();
export const error$ = new Subject<notification_payload>();

export const notifiy_success = (message : string)=>{
    success$.next({message : message});
}

export const notify_error = (message : string)=>{
    error$.next({message : message})
}