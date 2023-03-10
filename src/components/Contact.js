import React from 'react';
import "../index.css";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Contact = () => {
    const screen=useSelector((state)=>state.main.screen);
    const [loading,setLoading]=React.useState(false);
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
    const [open, setOpen] = React.useState(false);
    const [working,setWorking]=React.useState(false);
    const [sopen, setsOpen] = React.useState(false);
    const [eopen, seteOpen] = React.useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };


      const handleSubmit = async () => {
        
      setLoading(true);
      
      if(formData.name!=="" && formData.email!=="" && formData.message!==""){
        try {
            setWorking(true);
            const result = await emailjs.send('service_kp4v2to', 'template_63omtbl', formData,`${process.env.REACT_APP_API_KEY}`);
            setWorking(false);
            setsOpen(true);
           
          } catch (error) {
             seteOpen(true);
          }
      }else{
        setOpen(true)
      }
       
      
        // reset form values
        setFormData({ name: '', email: '', message: '' });
        setLoading(false)
      }



const handleCloseSuccess = () => {
    setsOpen(false);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseError = () => {
    seteOpen(false);
  };


  return (
    <>
    <div className='contact' id="contact">
         <div className='about-a'>
        <p style={{fontSize:"16px",padding:"1px",color:"#d7dae0"}}>Get in Touch</p>
        <p style={{fontSize:"22px",padding:"1px",color:"#3d80eb"}}>Contact Me</p>
     </div>  

     <div className='ca' style={{flexDirection:screen<=861?"column":"row"}}>


        <div className='ca1' style={{justifyContent:"center"}}>

<div style={{display:"flex",flexDirection:"column"}}>

    <div className='contact-box' style={{borderRadius:"10px",display:"flex",flexDirection:"column",
alignItems:"center",justifyContent:"center",padding:"10px",width:"280px",marginBottom:"20px",border:"1px solid #4071ed"}}>
        <div style={{color:"white"}}><EmailIcon /></div>
        <p style={{fontFamily:"'Ubuntu', sans-serif",fontSize:"17px"}}>Email</p>
        <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"13px"}}>udumullaofficial@gmail.com</p>
        <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:"#d7dae0",cursor:"pointer"}}>send a message</p>
    </div>

    <div className='contact-box' style={{borderRadius:"10px",display:"flex",flexDirection:"column",
alignItems:"center",justifyContent:"center",padding:"10px",width:"280px",marginBottom:"20px",border:"1px solid #4071ed"}}>
        <div style={{color:"white"}}><WhatsAppIcon /></div>
        <p style={{fontFamily:"'Ubuntu', sans-serif",fontSize:"17px"}}>WhatsApp</p>
        <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"13px"}}>+94775085369</p>
        <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:"#d7dae0",cursor:"pointer"}}>send a message</p>
    </div>

    <div className='contact-box' style={{borderRadius:"10px",display:"flex",flexDirection:"column",
alignItems:"center",justifyContent:"center",padding:"10px",width:"280px",marginBottom:"20px",border:"1px solid #4071ed"}}>
        <div style={{color:"white"}}><SmsIcon /></div>
        <p style={{fontFamily:"'Ubuntu', sans-serif",fontSize:"17px"}}>SMS</p>
        <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"13px"}}>+94758220799</p>
        <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:"#d7dae0",cursor:"pointer"}}>send a message</p>
    </div>


</div>
        </div>

        <div className='ca2' style={{justifyContent:screen<=861?"center":""}}>

            <div style={{display:"flex",flexDirection:"column",width:"90%"}}>

            <input type="text"  placeholder="Your Name"
             name="name" value={formData.name} onChange={handleChange}/>

            <input type="text"  placeholder="Your Email"
             name="email" value={formData.email} onChange={handleChange}/>

            <textarea  rows="10" cols="50" placeholder="Your Message" 
            name="message" value={formData.message} onChange={handleChange}/>

           {loading===false &&  <button className="talk" onClick={handleSubmit }>Send</button>}
           {loading===true &&  <button className="talk-fake" >Send</button>}
            </div>

        </div>

      
        </div>   


        </div>





        <div>
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          It's required to fill all fields !
        </Alert>
      </Snackbar>
        </div>

        <div>
        <Backdrop
        sx={{ color: '#4071ed'  }}
        open={working}
        
      >
        <CircularProgress color="inherit" sx={{ width: '200px', height: '200px' }} />
      </Backdrop>
        </div>



        <div>
        <Snackbar open={sopen} autoHideDuration={2500} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          The message has been sent successfully !
        </Alert>
      </Snackbar>
        </div>


        <div>
        <Snackbar open={eopen} autoHideDuration={2500} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          Error : The message hasn't been sent !
        </Alert>
      </Snackbar>
        </div>
        </>
  )
}

export default Contact