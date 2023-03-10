import React from 'react';
import "../index.css";
import chart from "../assets/chart.PNG";
import movie from "../assets/movie.PNG";
import food from "../assets/food.PNG";
import crypto from "../assets/crypto.PNG";
import hs from "../assets/hs.PNG";
import chart1 from "../assets/chart1.PNG";
import { useSelector } from 'react-redux';

const Portfolio = () => {
const screen=useSelector((state)=>state.main.screen)
    const items=[
        {
            id:1,
            name:"Crypto Currency Tracker With Charts (Dark Mode is available)",
            image:chart1,
            git:"https://github.com/thiwanka778/Crypto-Tracker-with-Chart",
            web:"https://sprightly-meringue-358be8.netlify.app/",
        },
        {
            id:2,
            name:"Movies and Tv series Tracker Using TMDB API",
            image:movie,
            git:"https://github.com/thiwanka778/movie-tv-series-tracker",
            web:"https://shiny-moxie-e41ae8.netlify.app/",
        },
        {
            id:3,
            name:"E-Commerce Web App for Restaurants",
            image:food,
            git:"https://github.com/thiwanka778/e-commerce",
            web:"https://comfy-hamster-163193.netlify.app/",
        },
        {
            id:4,
            name:"Crypto Currency Tracker With News",
            image:crypto,
            git:"https://github.com/thiwanka778/crypto-tracker",
            web:"https://spiffy-raindrop-a2c5f4.netlify.app/",
        },
        {
            id:5,
            name:"Hospital Storage Management System With MongoDB",
            image:hs,
            git:"https://github.com/thiwanka778/hospital-storage-management-system",
            web:"",
        }
    ]

    const itemDisplay=items.map((item)=>{

        return (
            <div className='one-work' key={item.id}>
<img style={{borderRadius:"20px",width:"280px",marginBottom:"5px"}} src={item.image}  alt=""/>
<p style={{width:"280px",fontSize:"13px"}}>{item.name}</p>
<div className='port-btns'>
<a href={item.git} target="_blank" className='github'>Github</a>
{item.web!=="" && <a href={item.web} target="_blank" className='demo'>Live Demo</a>}
</div>
</div>
        )
    })

  return (
    <div className='port' id="projects">
           <div className='about-a'>
        <p style={{fontSize:"16px",padding:"1px",color:"#d7dae0"}}>My Recent Works</p>
        <p style={{fontSize:"22px",padding:"1px",color:"#3d80eb"}}>Portfolio</p>
     </div>

<div className='my-work' style={{padding:screen<835?"5px":"0 5vw 0 5vw"}}>

{itemDisplay}


</div>

    </div>
  )
}

export default Portfolio