import React from "react";
import "./index.css"
import { useDispatch } from "react-redux";
import About from "./components/About";
import Skill from "./components/Skill";
import {getScreenWidth} from "./features/mainSlice";
import Home from "./components/Home";
import Coruesel from "./components/Coruesel";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import BottomNavigationBar from "./components/BottomNavigationBar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  const dispatch=useDispatch();
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(()=>{
   dispatch(getScreenWidth(screenWidth))
  },[screenWidth,dispatch])

  console.log(screenWidth)
  return (
    <BrowserRouter>
    <div className="app">
     
      
      <Home/>
<About/>
<Skill/>
<Portfolio/>
<Coruesel/>
<Contact/>
<Footer/>   
      
      



<div className="app-bt">
  <BottomNavigationBar/>
</div>


    </div>
    </BrowserRouter>
  );
}

export default App;
