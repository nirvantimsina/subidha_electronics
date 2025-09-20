import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Cards from "./components/Cards";
import State from "./components/State";
import Effect from "./components/Effect";
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Product/>
    <Cards cardName={"Hello"} cardDescription={"World"}/>
    <State />
    <Effect />
    <DigitalClock />
    </>
  );
}

export default App;
