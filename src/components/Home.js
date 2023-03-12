import React from 'react';
import "../index.css";
import me from "../assets/me.png"
import { HashLink} from 'react-router-hash-link';

const Home = () => {
  return (
    <div id="#">
         <div className="title">
<p style={{fontSize:"19px",padding:"5px"}}>Hello, I'm</p>
<p style={{fontSize:"24px",letterSpacing:"2px",padding:"5px"}}>Thiwanka Udumulla</p>
<p style={{fontSize:"13px",padding:"0px",color:"#d7dae0",}}>Fullstack Developer</p>
<div className="btns">
  <a href="https://drive.google.com/u/0/uc?id=1A9JiU-_EFi1TRKL_TlawkftgR8RZX7H1&export=download" target="_blank" className="download">Download CV</a>
  <HashLink to="#contact" smooth duration={1000} className="talk">Let's Talk</HashLink>
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