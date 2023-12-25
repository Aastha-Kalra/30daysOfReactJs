import { useEffect, useState } from 'react';

export default function simpleInterestCal() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(10);
  const [time, setTime] = useState(10);
  const [simpleInterest, setSimpleInterest] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Parse principal as float to ensure correct calculation
    const principalFloat = parseFloat(principal);
    const interest = (principalFloat * rate * time) / 100;
    setSimpleInterest(interest.toFixed(2));
    // Calculate total amount using parsed principal
    setTotal((principalFloat + interest).toFixed(2));
  }, [principal, rate, time]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl mb-4">Simple Interest Calculator</h2>
        
        {/* Principal Input */}
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
          className="border border-gray-300 p-2 rounded w-full"
          min="0"
        />
        
        {/* Rate Input */}
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="border border-gray-300 p-2 rounded w-full"
          step="0.01"
          min="0"
        />
        
        {/* Time Input */}
        <input
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
          className="border border-gray-300 p-2 rounded w-full"
          min="0"
        />
        
        {/* Simple Interest Display */}
        <div id='simpleInterest' className='p-2 bg-gray-200 rounded'>
            Simple Interest : {simpleInterest}
        </div>
        
         {/* Total Amount Display */}
         <div id='totalAmount' className='p-2 bg-gray-200 rounded'>
            Total Amount : {total}
         </div>
      </div>
    </div>
  );
}
