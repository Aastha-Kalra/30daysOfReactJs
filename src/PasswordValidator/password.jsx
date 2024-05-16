import { useEffect, useState } from "react";

const Password = () => {
    const [password,setPassword] = useState('')
    const [strength,setStrength] = useState(0)

    useEffect(()=>{
        if(password.length >=3){
            setPassword(password)
        }
    },[password])
  return (
    <div className="text-yellow-500">
    <div>Password Validator</div>
    <div>
        <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        <p>Strength of your password (out of 10) is : {strength} </p>
    </div>
    {password}
    </div>
  )
};

export default Password;
