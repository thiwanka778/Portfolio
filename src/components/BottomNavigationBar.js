import React from 'react';
import "../index.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SourceIcon from '@mui/icons-material/Source';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { HashLink} from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';



const BottomNavigationBar = () => {
    const location = useLocation();
    const activeHash = location.hash;

  return (
    <div className="bnb">


       <HashLink to="#"   duration={1000} smooth="easeInOutQuart"  className="tooltip-wrapper" style={{padding:"7px"}}>
       <Tooltip title="Home">
      <IconButton >
        <HomeIcon sx={{ color: activeHash === "" ? "#4071ed" : "white" }}  />
      </IconButton>
    </Tooltip>
       </HashLink>


       <HashLink to="#about"   duration={1000}  smooth="easeInOutQuart"  style={{padding:"7px"}}>
       <Tooltip title="About Me">
      <IconButton >
        <PersonIcon  sx={{ color: activeHash === "#about" ? "#4071ed" : "white" }}/>
      </IconButton>
    </Tooltip>
       </HashLink>


       <HashLink to="#skill"  duration={1000}  smooth="easeInOutQuart"  style={{padding:"7px"}}>
       <Tooltip title="Skills">
      <IconButton>
        <Brightness7Icon  sx={{ color: activeHash === "#skill" ? "#4071ed" : "white" }}/>
      </IconButton>
    </Tooltip>
       </HashLink>


       <HashLink to="#projects"   duration={1000} smooth="easeInOutQuart" style={{padding:"7px"}}>
       <Tooltip title="My Projects">
      <IconButton>
        <SourceIcon sx={{ color: activeHash === "#projects" ? "#4071ed" : "white" }} />
      </IconButton>
    </Tooltip>
       </HashLink>


       <HashLink to="#testimonials"   duration={1000} smooth="easeInOutQuart" style={{padding:"7px"}}>
       <Tooltip title="Testimonials">
      <IconButton>
        <LocalFireDepartmentIcon sx={{ color: activeHash === "#testimonials" ? "#4071ed" : "white" }} />
      </IconButton>
    </Tooltip>
       </HashLink>


       <HashLink to="#contact"  duration={1000}  smooth="easeInOutQuart" style={{padding:"7px"}}>
       <Tooltip title="Contact">
      <IconButton>
        <ConnectWithoutContactIcon sx={{ color: activeHash === "#contact" ? "#4071ed" : "white" }}/>
      </IconButton>
    </Tooltip>
       </HashLink>



     

        </div>
  )
}

export default BottomNavigationBar