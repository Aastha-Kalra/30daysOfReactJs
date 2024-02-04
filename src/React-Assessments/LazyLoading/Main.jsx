import React, { Suspense, lazy, useState } from "react";
const LazyLayout = lazy(() => import("./FetchHook"));
const Main = () => {
  const [index, setIndex] = useState(11003);
  const handleIndex = () => {
    setIndex((i) => i + 1);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <h1>Cocktail</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyLayout index={index} />
      </Suspense>
      <button onClick={handleIndex} className="bg-yellow-200 px-4 py-2">
        Next
      </button>
    </div>
  );
};

export default Main;
