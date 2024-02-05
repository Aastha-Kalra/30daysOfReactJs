import React, { useContext } from "react";
import {GlobalContext} from './context/index'
const Login = () => {
  const {theme}=useContext(GlobalContext);

  return (
    <div>
      <div>Login</div>
      <button  className={`${theme==="dark" ? 'bg-yellow-500 text-green-800':'bg-blue-200 text-teal-900'} px-4 py-2 my-3 `}>Login</button>
    </div>
  );
};

export default Login;
