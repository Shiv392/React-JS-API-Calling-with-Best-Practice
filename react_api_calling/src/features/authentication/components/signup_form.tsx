import useSignup from "../hooks/useSignup";

const SignUpForm = ()=>{
    const {loading, handle_signup, error} = useSignup();

    const signup = async(name : string, email : string, password : string )=>{
    const data = await handle_signup(name, email, password);
    }

    return(
        <h1>Sign Up Form</h1>
    )
}

export default SignUpForm;