import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import Home from "./Pages/Home"
import Hollywood from "./Pages/Hollywood"
import Bollywood from "./Pages/Bollywood"
import Technology from "./Pages/Technology"
import Fitness from "./Pages/Fitness"
import Food from "./Pages/Food"
import SinglePage from "./Pages/SinglePage";
import './Style.css'
import Detail from "./Pages/Detail";

function App() {
  return (
    <div className="App">
      <Detail>
      <Header />
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/bollywood" element = {<Bollywood />} />
        <Route path="/hollywood" element = {<Hollywood />} />
        <Route path="/technology" element = {<Technology />} />
        <Route path="/fitness" element = {<Fitness />} />
        <Route path="/food" element = {<Food />} />
        <Route path=":category/:articleid" element = {<SinglePage/>}/>
      </Routes>
      </BrowserRouter>
      </Detail>


    </div>
  );
}

export default App;