import React from 'react';
import "../index.css";
import about from "../assets/about.jpg";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleIcon from '@mui/icons-material/People';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import { useSelector } from 'react-redux';


const About = () => {
const screen=useSelector((state)=>state.main.screen)

  return (
    <div className='about' id="about">
        {/* sub title start*/}

     <div className='about-a'>
        <p style={{fontSize:"16px",padding:"1px",color:"#d7dae0"}}>Get To Know</p>
        <p style={{fontSize:"22px",padding:"1px",color:"#3d80eb"}}>About Me</p>
     </div>
        {/* sub title end*/}

{/*image and other stuff start*/}

<div className='about-b' style={{flexDirection:screen<=824?"column":"row"
}}>

    <div className='image-parent'>
    <div  className="image-me" style={{display:"flex",alignItems:screen<=824?"center":"",justifyContent:screen<=824?"center":"",marginBottom:screen<=824?"30px":"",width:screen<=824?"80vw":"280px",marginLeft:screen<=824?"0px":"0%"}}>
<img className='about-image' style={{width:screen<=824?"80vw":"280px"}}  src={about} alt="about-me"/>
</div>
    </div>





<div className='about-c' style={{alignItems:screen<=824?"center":"",marginTop:screen<=824?"20px":"0px"}}>

<section className='box-3'>

<div className='box'>
 <div style={{color:"#30b8f2"}}><WorkspacePremiumIcon/></div>
 <p style={{fontSize:"15px"}}>Experience</p>
 <p style={{fontSize:"12px",color:"#d7dae0"}}>3+ Years Working</p>
</div>
<div className='box'>
 <div style={{color:"#30b8f2"}}><PeopleIcon/></div>
 <p style={{fontSize:"15px"}}>Clients</p>
 <p style={{fontSize:"12px",color:"#d7dae0"}}>200+ Worldwide</p>
</div>
<div className='box'>
 <div style={{color:"#30b8f2"}}><SnippetFolderIcon/></div>
 <p style={{fontSize:"15px"}}>Projects</p>
 <p style={{fontSize:"12px",color:"#d7dae0"}}>80+ Completed</p>
</div>



</section>

<p className='para' style={{width:screen<=824?"80vw":"320px"}}>
I'm a React full stack developer skilled in front-end, back-end,
 and database design. I specialize in creating dynamic
 and interactive user interfaces using 
 cutting-edge technologies and stay up-to-date with industry trends.
</p>

<div>
<button className="talk">Let's Talk</button>
</div>



</div>


</div>

{/*image and other stuff start*/}
        </div>
  )
}

export default About