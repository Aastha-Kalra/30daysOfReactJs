import { React } from "react";
import SearchFilter from "./components/SearchFilter";
import ItemsPerPage from "./components/ItemsPerPage";
import ColorPicker from "./components/ColorPicker";
import Responsive from "./components/Responsive";
import BharatClock from "./components/BhartClock";
import Meal from "./components/Meal/Meal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeInfo from "./components/Meal/RecipeInfo";
import SocialButtons from "./components/SocialButtons";
import LetterCalculator from "./components/LetterCalculator";
import RandomNumber from "./components/RandomNumber";
import CountryCapital from "./components/CountryCapital";
import DsaPractice from "./DSA/DsaPractice";
import Pexels from "./components/Pexel/Pexels";
import NewYear from "./components/NewYear";
import QRcode from "./components/qr/QRCode";

function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-hidden">
      {/* <SearchFilter/> */}
      {/* <ItemsPerPage/> */}
      {/* <ColorPicker/> */}
      {/* <Responsive/> */}
      {/* <BharatClock/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/:MealId" element={<RecipeInfo />} />
        </Routes>
      </BrowserRouter> */}
      {/* <SocialButtons/> */}
      {/* <LetterCalculator/> */}
      {/* <RandomNumber/> */}
      {/* <CountryCapital/> */}
   {/* <DsaPractice/> */}
   {/* <Pexels/> */}
   <NewYear/>
  <QRcode/>
    </div>
  );
}

export default App;
