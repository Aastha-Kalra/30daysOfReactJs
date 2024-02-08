import React, { useCallback, useState } from "react";
import Button from "./Button";

const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const callback1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const callback2 = useCallback(() => setCount2(count2 + 1), [count2]);
  return (
    <>
      <div>UseCallback</div>
      A JavaScript callback is a function which is to be executed after another
      function has finished execution. A more formal definition would be - Any
      function that is passed as an argument to another function so that it can
      be executed in that other function is called as a callback function.
      <br />
      Here the problem is, We are getting un-neccessary rendering of an
      component even if they are not calling. Like button one is rendering if i
      click on button two and vice versa. To stop this we can use usecallback
      function.It takes the callback function to update the state and a
      dependency array to render the component when change. And pass the
      reference of a function to excute only when called.
      <br />
      We will also wrap the child component in memo to memoised the button value
      and render accordingly. React. memo() is a Higher Order Component (HOC)
      that memoizes the passed in component along with the value of its props.
      Doing so helps in optimizing its performance by preventing unnecessary
      re-renders due to changes it does not depend on, e.g. the unrelated state
      changes in ancestor components.
      <br />
      <br />
      This can be useful when a component's rendering is expensive, and you want
      to avoid unnecessary re-renders. Memo can be imported from 'react' and
      wrapped around a functional component. useMemo() is a hook that lets you
      cache the result of a calculation between re-renders.
      <br />
      Count 1 : {count1} <br /> Count 2 : {count2}
      {/* <Button text={"Button One "} onclick={() => setCount1(count1 + 1)} />
      <Button text={"Button Two "} onclick={() => setCount2(count2 + 1)} /> */}
      <Button onClick={callback1} text={"Button 1 "} />
      <Button onClick={callback2} text={"Button 2 "} />
    </>
  );
};

export default UseCallback;
