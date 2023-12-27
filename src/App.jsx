import { React } from "react";
import SearchFilter from "./components/SearchFilter";
import ItemsPerPage from "./components/ItemsPerPage";
import ColorPicker from "./components/ColorPicker";
import Responsive from "./components/Responsive";
import BharatClock from "./components/BhartClock";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocialButtons from "./components/SocialButtons";
import LetterCalculator from "./components/LetterCalculator";
import RandomNumber from "./components/RandomNumber";
import CountryCapital from "./components/CountryCapital";
import DsaPractice from "./DSA/DsaPractice";
import Pexels from "./components/Pexel/Pexels";
import NewYear from "./components/NewYear";
import QRcode from "./components/qr/QRCode";
import Dictionary from "./components/Dictionary/Dictionary";
import InputSubmission from "./components/InputSubmission";
import TicTacToe from "./DSA/TicTacToe/TicTacToe";
import Timer from "./components/Timer";
import SimpleInterestCal from './components/SimpleInterestCal'
import PollComponent from './components/VoteCount'
import Calender from "./components/Cal";

function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-hidden">
      {/* <SearchFilter/> */}
      {/* <ItemsPerPage/> */}
      {/* <ColorPicker/> */}
      {/* <Responsive/> */}
      {/* <BharatClock/> */}
      {/* <SocialButtons/> */}
      {/* <LetterCalculator/> */}
      {/* <RandomNumber/> */}
      {/* <CountryCapital/> */}
   {/* <DsaPractice/> */}
   {/* <Pexels/> */}
   {/* <NewYear/> */}
  {/* <QRcode/> */}
  {/* <Dictionary/> */}
  {/* <InputSubmission/> */}
  {/* <TicTacToe/> */}
  {/* <Timer/> */}
{/* <SimpleInterestCal/> */}
<PollComponent/>
{/* <Calender/> */}
    </div>
  );
}

export default App;
