import { useState, type FormEvent } from "react";
import useLogin from "../hooks/useLogin";
import '../styles/login.css';
import { error$, success$ } from "../../shared/services/notification.service";
import { message } from "antd";

const LoginForm = () => {
  const { loading, handle_login, error } = useLogin();
  const [email, set_email] = useState<string>("");
  const [password, set_password] = useState<string>("");

  const login_submit = async () => {
    const result = await handle_login(email, password);
    console.log("result-------->", result);
    if(result?.success){
      success$.next({message : result.message});
    }
    else{
      console.log('shiv')
      error$.next({message : result?.message || ''});
    }
  };

  const form_submit = (event: FormEvent) => {
    event.preventDefault();
    login_submit();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={form_submit}>
        <h3 className="form-title">Login</h3>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => set_email(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => set_password(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
