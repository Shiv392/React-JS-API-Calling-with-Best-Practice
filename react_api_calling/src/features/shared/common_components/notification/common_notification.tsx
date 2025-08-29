import { useEffect, useState } from "react";
import {Snackbar, Alert} from '../../shared_module';
import { error$, success$ } from "../../services/notification.service";
import type { AlertColor } from '@mui/material';

const Common_notification = ()=>{
const [open, set_open] = useState<boolean>(false);    
const [message, set_message] = useState<string>('');
const [severity, set_severity] = useState<AlertColor | undefined>(undefined);

useEffect(()=>{
const success_subscription = success$.subscribe((event)=>{
    set_severity('success');
    set_message(event.message);
    set_open(true);
});

const error_subscription = error$.subscribe((event)=>{
    set_severity('error');
    set_message(event.message);
    set_open(true);
});

return ()=>{
    success_subscription.unsubscribe();
    error_subscription.unsubscribe();
    set_open(false);
    set_severity('success');
}
},[]);

const handle_close=()=>{
    set_open(false);
    set_message('');
}

return (
    <Snackbar open={open} 
    autoHideDuration={6000} 
    onClose={handle_close} 
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
    <Alert
      onClose={handle_close}
      severity={severity}
      variant="filled"
      sx={{ width: '100%' }}
    >
     {message}
    </Alert>
  </Snackbar>
)
}
export default Common_notification;