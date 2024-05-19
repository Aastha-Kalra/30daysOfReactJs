import { useEffect, useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let calculatedStrength = 0;
    if (password.length >= 6 && password.length <= 32) {
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

  const getStrengthLabel = () => {
    if (strength > 7) return "Strong";
    if (strength > 6) return "Moderate";
    if (strength > 3) return "Week";
    return "Very week";
  };

  const getProgressColor = () => {
    if (strength > 7) return "bg-green-500";
    if (strength > 6) return "bg-yellow-500";
    if (strength > 3) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="text-yellow-500">
      <div className="text-4xl my-4 text-center">Password Validator</div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-slate-300 focus:outline-none p-2 text-lg rounded-lg"
        />
        <div className="w-full h-2 my-3 bg-gray-400 rounded-xl">
          <div
            className={`h-full rounded-xl ${getProgressColor()}`}
            style={{ width: `${strength * 10}%` }}
          ></div>
        </div>
        <p>
          Strength of your password is : {strength}/10 ({getStrengthLabel()})
        </p>
      </div>
      Your Password : {password}
    </div>
  );
};

export default Password;
