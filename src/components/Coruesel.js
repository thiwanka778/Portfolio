import React from 'react'
import "../index.css";
import AliceCarousel from 'react-alice-carousel';
import Avatar from '@mui/material/Avatar';
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"
import avatar3 from "../assets/avatar3.jpg"
import avatar4 from "../assets/avatar4.jpg"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector } from 'react-redux';


const Coruesel = () => {
const screen=useSelector((state)=>state.main.screen)
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselRef = React.useRef(null);

   const items=[
    {
      id:1,
      name:"Rachel Green",
      des:`Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. In luctus ultricies lorem, 
      quis feugiat arcu ullamcorper ac. Cras 
      tristique gravida justo quis laoreet. Suspendisse 
      elementum tristique imperdiet. Praesent sodales id.`,
      image:avatar1,
    },
    {
      id:2,
      name:"Smith Williams",
      des:`Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. In luctus ultricies lorem, 
      quis feugiat arcu ullamcorper ac. Cras 
      tristique gravida justo quis laoreet. Suspendisse 
      elementum tristique imperdiet. Praesent sodales id.`,
      image:avatar2,
    },
    {
      id:3,
      name:"Daniel Wilson",
      des:`Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. In luctus ultricies lorem, 
      quis feugiat arcu ullamcorper ac. Cras 
      tristique gravida justo quis laoreet. Suspendisse 
      elementum tristique imperdiet. Praesent sodales id.`,
      image:avatar3,
    },
    {
      id:4,
      name:"Maryam Amina",
      des:`Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. In luctus ultricies lorem, 
      quis feugiat arcu ullamcorper ac. Cras 
      tristique gravida justo quis laoreet. Suspendisse 
      elementum tristique imperdiet. Praesent sodales id.`,
      image:avatar4,
    },
    {
      id:5,
      name:"Amelia Earhart",
      des:`Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. In luctus ultricies lorem, 
      quis feugiat arcu ullamcorper ac. Cras 
      tristique gravida justo quis laoreet. Suspendisse 
      elementum tristique imperdiet. Praesent sodales id.`,
      image:"https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg"
    }
   ]

   const handleOnSlideChange = (event) => {
    setCurrentIndex(event.item);
  };


  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };
     

const displayItems=items.map((item)=>{
  return (
<div className='testimonial' style={{width:screen<787?"75vw":"300px"}} key={item.id}>
      <div className='avatar'>
      <Avatar sx={{ width: 100, height: 100 }} alt="" src={item.image} />
      </div>
      <p style={{fontFamily: "'Ubuntu', sans-serif",marginBottom:"20px",fontSize:"18px"}}>{item.name}</p>
      <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"13px",color:"#d7dae0"}}>{item.des}
        </p>
     </div>
  )
})

const responsive = {
  0: { items: 1 },
  787:{items:2},
  1115:{items:3},
  
};
  

  return (
    <div className='cr' id="testimonials">

<div className='about-ab'>
        <p style={{fontSize:"16px",padding:"1px",color:"#d7dae0"}}>Reviews from clients</p>
        <p style={{fontSize:"22px",padding:"1px",color:"#3d80eb"}}>Testimonials</p>
     </div>

      
   <div className="carousel-container" style={{paddingLeft:screen<787?"20px":"70px"}}>
   {/*<button className="prev-button" onClick={handlePrevClick}><ChevronLeftIcon fontSize="large"/></button>*/}
   <AliceCarousel
  autoPlay
  infinite={true}
  autoPlayInterval={2000}
  animationDuration={1500}
  mouseTracking
  items={displayItems}
  disableButtonsControls
  ref={carouselRef}
  responsive={responsive}
  
/>
{/*<button className="next-button" onClick={handleNextClick} ><ChevronRightIcon fontSize="large"/></button>*/}
   </div>


        </div>
  )
}

export default Coruesel