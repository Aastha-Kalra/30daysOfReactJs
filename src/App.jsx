import { React } from "react";
// import SearchFilter from "./components/SearchFilter";
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
import SimpleInterestCal from "./components/SimpleInterestCal";
import PollComponent from "./components/VoteCount";
import Calender from "./components/Cal";
import Today from "./components/today";
import CharacterCount from "./components/CharacterCount";
import Rating from "./components/Rating";
import Tip from "./components/TipCalculator";
import DistanceConverter from "./components/DistanceConverter";
// import Tabs from "./components/Tab";
import Table from "./components/Table";
import RandomPalette from "./components/RandomPalette";
import Recursion from "./DSA/Recursion/Recursion";
import Calculator from "./components/Calculator";
import DaysUntilElement from "./components/DaysUntilElement";
import Local from "./components/LocalStorage";
import Sorting from "./DSA/Sorting";
// import updateTemplateLiteral from './components/TemplateLiterals';
import Question1 from "./React-Assessments/Question1/Question1";
import Question2 from "./React-Assessments/Question2/Question2";
import Question3 from "./React-Assessments/Question3/Question3";
// import Counter from "./components/ReactCounterBug";
// import Toggle from './components/Toggle'
// import TemperatureConverter from "./components/TemperatureCon";
// import MessageFeed from "./components/SubmitMessages";
// import SignUpForm from "./components/ValidateSignUp";
// import CVCreator from "./components/CVCreator";
import SearchFilter from "./React-Assessments/Question4/SearchFilter";
import ImageSlider from "./React-Assessments/Question5/ImageSlider";
import EmojiSearch from "./React-Assessments/Emoji/EmojiSearch";
import Joke from "./React-Assessments/Joke/Joke";
import TextEditorApp from "./React-Assessments/TextEditorApp/TextEditorApp";
import MaxCount from "./React-Assessments/MaxCount/MaxCount";
import RemoveSpecificButton from "./React-Assessments/Debugging/RemoveSpecificButton";
import UnnecessaryFunctionCall from "./React-Assessments/Debugging/FunctionCall";
import CalculateFactorial from "./React-Assessments/Debugging/ReRender";
import CountInputChanges from "./React-Assessments/Debugging/InfiniteRendering";
import Theme from "./React-Assessments/Debugging/ThemeContext";
import PageBottom from "./React-Assessments/CustomHooks/UsePageBottom";
import UseWindowDimensions from "./React-Assessments/CustomHooks/UseWindowDimensions";
import UseFetch from "./React-Assessments/CustomHooks/UseFetch";
import Main from "./React-Assessments/LazyLoading/Main";
import ProgressBar from "./React-Assessments/ProgressBar/ProgressBar";
import Hook from "./React-Assessments/UseContextHook.jsx/Hook";
import Register from "./React-Assessments/UseContextHook.jsx/Register";
import Login from "./React-Assessments/UseContextHook.jsx/Login";
import UseReducer from "./React-Assessments/UseReducerHook.jsx/UseReducer";
import UseLayout from "./React-Assessments/UseLayout";
import UseMemo from "./React-Assessments/UseMemo";
import UseCallback from "./React-Assessments/UseCallback/UseCallback";
import ResumeBuild from "./React-Assessments/ResumeBuilder/ResumeBuild";
import React19 from "./React19/React19";
import DotAnimation from "./MovingDotAnimation/DotAnimation";
import RoomBooking from "./RoomReservation/RoomBooking";
import MainProgress from "./MultipleAnimation/MainProgress";
import TimerProgress from "./TimerProgress/TimerProgress";
import Input from "./OTP/Input";
import CopyToClipboard from "./Copy/CopyToClipboard";
import UsePrevious from "./UsePrevious/UsePrevious";
import AgeValidator from "./AgeValidator/AgeValidator";
import LargestString from "./Javascript/LongestWord";
import HashTag from "./Javascript/GenerateHash";
import CountOccu from "./Javascript/CountOccu";
import TriangleType from "./Javascript/TriangleType";
import Sort from "./Javascript/Sort";
import Palindrome from "./Javascript/Palindrome";
import FindMax from "./Javascript/FindMax";
// import Factorial from "./Javascript/Factorial";
import Average from "./Javascript/Average";
import ArrayEqual from "./Javascript/ArrayEqual";
import SumOfNum from "./Javascript/SumOfNum";
import All from "./Javascript/All";
import Duplicate from "./Javascript/Duplicate";
import Vowel from "./Javascript/Vowel";
import PowerOfTwo from "./Javascript/PowerOfTwo";
import SumOfSquare from "./Javascript/SumOfSquare";
import FindMin from "./Javascript/FindMin";
import StringConversion from "./Javascript/StringConversion";
import CharCase from "./Javascript/CharCase";
import Substring from "./Javascript/Substring";
import Reverse from "./Javascript/Reverse";
import CalculatedMean from "./Javascript/CalculatedMean";
import Median from "./Javascript/Median";
import Occurence from "./Javascript/Occurence";
import Mode from "./Javascript/Mode";
import Factorial from "./Recursion/Factorial";
import Fibonaaci from "./Recursion/Fibonaaci";
import RepeatString from "./Recursion/RepeatString";
import TruncateString from "./Recursion/TruncateString";
import ConsecutiveArrayNumbers from "./Recursion/ConsecutiveArrayNumbers";
import NumberRange from "./Recursion/NumberRange";
import PasswordValidator from "./Recursion/PasswordValidator";
import TextConvertor from "./TextConvertor";
import RandomHexColor from "./RandomHexColor";
import BusinessNameGen from "./BusinessNameGen";
import RandomBg from "./RandomBg";
import NewNodeInsertion from "./NewNodeInsertion";
import TextToAudio from "./TextToAudio/TextToAudio";
import AutoCollapse from "./AutoCollapse/AutoCollapse";
import Password from "./PasswordValidator/password";
import Expense from "./components/ExpenseTracker/Expense";
import MemoryGame from "./Game/MemoryGame";
import LoderAnimation from "./Loader/LoderAnimation";
function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-hidden  flex justify-center items-center">
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
      {/* <PollComponent/> */}
      {/* <Calender/> */}
      {/* <Today/> */}
      {/* <CharacterCount/> */}
      {/* <Rating/> */}
      {/* <Tip/> */}
      {/* <DistanceConverter/> */}
      {/* <Tabs/> */}
      {/* <Table/> */}
      {/* <RandomPalette/> */}
      {/* <Calculator/>
<DaysUntilElement/> */}
      {/* <Local/> */}
      {/* <Recursion/> */}
      {/* <updateTemplateLiteral/> */}
      {/* <Sorting/> */}
      {/* <Question1/> */}
      {/* <Question2/> */}
      {/* <Question3/> */}
      {/* <Counter/> */}
      {/* <Toggle/> */}
      {/* <TemperatureConverter/> */}
      {/* <MessageFeed/> */}
      {/* <SignUpForm/> */}
      {/* <CVCreator/> */}
      {/* <SearchFilter/> */}
      {/* <ImageSlider/> */}
      {/* <EmojiSearch/> */}
      {/* <Joke/> */}
      {/* <TextEditorApp/> */}
      {/* <MaxCount/> */}
      {/* <RemoveSpecificButton/> */}
      {/* <UnnecessaryFunctionCall/> */}
      {/* <CalculateFactorial/> */}
      {/* <CountInputChanges/> */}
      {/* <Theme/> */}
      {/* <PageBottom/> */}
      {/* <UseWindowDimensions/> */}
      {/* <UseFetch/> */}
      {/* <Main/> */}
      {/* <ProgressBar/> */}

      {/* <div className="flex flex-col justify-center items-center text-3xl gap-3">
        <Hook />
        <div className="flex justify-center gap-4">
          <Register />
          <Login />
        </div>
      </div> */}

      {/* <UseReducer/> */}
      {/* <UseLayout/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <ResumeBuild/> */}
      {/* <React19/> */}
      {/* <DotAnimation/> */}
      {/* <RoomBooking/> */}
      {/* <MainProgress/> */}
      {/* <TimerProgress/> */}
      {/* <Input /> */}
      {/* <CopyToClipboard/> */}
      {/* <UsePrevious/> */}
      {/* <AgeValidator/> */}
      {/* <LargestString/> */}
      {/* <HashTag/> */}
      {/* <CountOccu/> */}
      {/* <TriangleType/> */}
      {/* <Sort/> */}
      {/* <Palindrome/> */}
      {/* <FindMax/> */}
      {/* <Factorial/> */}
      {/* <Average/> */}
      {/* <ArrayEqual/> */}
      {/* <SumOfNum/> */}
      {/* <All/> */}
     {/* <Duplicate/> */}
      {/* <Vowel/> */}
      {/* <PowerOfTwo/> */}
      {/* <SumOfSquare/> */}
      {/* <FindMin/> */}
      {/* <StringConversion/> */}
      {/* <CharCase/> */}
      {/* <Substring/> */}
      {/* <Reverse/> */}
      {/* <CalculatedMean/> */}
      {/* <Median/> */}
      {/* <Occurence/> */}
      {/* <Mode/> */}
     {/* <Factorial/> */}
     {/* <Fibonaaci/> */}
    {/* <Fibonaaci/> */}
    {/* <RepeatString/> */}
   {/* <TruncateString/> */}
    {/* <ConsecutiveArrayNumbers/> */}
    {/* <NumberRange/> */}
    {/* <PasswordValidator/> */}
    {/* <TextConvertor/> */}
    {/* <RandomHexColor/> */}
    {/* <BusinessNameGen/> */}
    {/* <RandomBg/> */}
    {/* <NewNodeInsertion/> */}
{/* <TextToAudio/> */}
{/* <AutoCollapse/> */}
{/* <Password/> */}
{/* <Expense/> */}
{/* <MemoryGame/> */}
<LoderAnimation/>
    </div>
  );
}

export default App;
