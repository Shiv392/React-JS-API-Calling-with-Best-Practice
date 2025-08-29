import { useState, type FormEvent } from "react";
import useSignup from "../hooks/useSignup";
import "../styles/signup.css";
import { success$, error$ } from "../../shared/services/notification.service";

const SignUpForm = () => {
  const { loading, handle_signup, error } = useSignup();
  const [name, set_name] = useState<string>("");
  const [email, set_email] = useState<string>("");
  const [password, set_password] = useState<string>("");

  const signup = async () => {
    const data = await handle_signup(name, email, password);
    console.log("Signup result:", data);
    if(data.success){
     success$.next({message : data.message});
     set_name('');
     set_email('');
     set_password('');
    }
    else{
     error$.next({message : data.message})
    }
  };

  const form_submit = (event: FormEvent) => {
    event.preventDefault();
    signup();
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={form_submit}>
        <h3 className="form-title">Sign Up</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => set_name(e.target.value)}
          required
        />

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

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
