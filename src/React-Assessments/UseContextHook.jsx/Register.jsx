import React,{useContext}from "react";
import {GlobalContext} from './context/index'

const Register = () => {
  const {theme}=useContext(GlobalContext);
  return (
    <div>
      <div>Register</div>
      <button  className={`${theme==="dark" ? 'bg-orange-500 text-green-800':'bg-green-200 text-teal-900'} px-4 py-2 my-3 `}>Register</button>
    </div>
  );
};

export default Register;
