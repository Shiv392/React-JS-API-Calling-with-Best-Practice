import { Routes, Route } from "react-router-dom"
import { lazy } from "react";

const Login = lazy(()=> import('./pages/login'));
const Signup = lazy(()=> import('./pages/signup'));

const AuthRoute = ()=>{
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path = '/signup' element = {<Signup />} />
    </Routes>
  )
}

export default AuthRoute;