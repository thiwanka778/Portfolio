import React from 'react';
import "../index.css";
import me from "../assets/me.png"

const Home = () => {
  return (
    <div id="#">
         <div className="title">
<p style={{fontSize:"19px",padding:"5px"}}>Hello, I'm</p>
<p style={{fontSize:"24px",letterSpacing:"2px",padding:"5px"}}>Mandira Gamlath</p>
<p style={{fontSize:"13px",padding:"0px",color:"#d7dae0",}}>Fullstack Developer</p>
<div className="btns">
  <button className="download">Download CV</button>
  <button className="talk">Let's Talk</button>
</div>
   </div>


<div className="me">

  <div className="me-div">
  <img src={me} alt="me" style={{width:"300px"}}/>
  </div>
 
</div>
    </div>
  )
}

export default Home