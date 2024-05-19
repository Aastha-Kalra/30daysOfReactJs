import { useEffect, useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let calculatedStrength = 0;
    if (passwordStrength >= 6 && passwordStrength <= 32) {
      calculatedStrength += Math.min(6, password.length / 2);
    }
    if (/A-Z/.test(password)) {
      calculatedStrength += 1;
    }
    if (/a-z/.test(password)) {
      calculatedStrength += 1;
    }
    if (/[0-9]/.test(password)) {
      calculatedStrength += 1;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      calculatedStrength += 1;
    }
    setStrength(Math.min(10, calculatedStrength));
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
