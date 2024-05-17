import { useEffect, useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const passwordStrength = password.length;
  useEffect(() => {
    if (passwordStrength >= 3 && passwordStrength <= 10) {
      setStrength(passwordStrength);
    }
  }, [password]);
  return (
    <div className="text-yellow-500">
      <div>Password Validator</div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={passwordStrength >= 10}
        />
        <p>Strength of your password (out of 10) is: {strength}</p>
      </div>
      {password}
    </div>
  );
};

export default Password;
