import { useEffect, useState } from "react";

const usePageBottom = () => {
  const [bottom, setBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setBottom(scrollPos === pageHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return bottom;
};
export default function PageBottom() {
  const reachedBottom = usePageBottom();
useEffect(()=>{
    if(reachedBottom){
        alert("reachedBottom", reachedBottom);
    }
},[reachedBottom])
  let arr = [...Array(50).keys()].map((i)=>(i+1).toString());

  return (
    <div className="text-4xl flex  justify-center items-center  flex-col">
      <h1>Welcome to React Challenges</h1>
      {arr.map((num, index) => (
        <h2 key={index + " " + num}>{num}</h2>
      ))}
      <footer>&copy; 2022 React challenges.live</footer>
    </div>
  );
}
