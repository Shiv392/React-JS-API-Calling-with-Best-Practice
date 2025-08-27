import { useState } from "react";
import useLogin from "../hooks/useLogin";

const LoginForm = ()=>{
const {loading, handle_login, error} = useLogin();
const [email, set_email] = useState<string>('');
const [password, set_password] = useState<string>('');

const login_submit = async()=>{
    const result = await handle_login(email, password);
    console.log('result-------->', result);
}

return(
    <h1>Login Form</h1>
)
}

export default LoginForm;