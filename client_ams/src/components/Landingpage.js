import React from 'react';
import '../index.css';
import './Landingpage.css'
import Background from './static_content/background.mp4';
import Button from'@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
function Landingpage(){
  const[goToLogin,login]=React.useState(false)
  if(goToLogin){
    if(localStorage.getItem('user'===null))
      return <Navigate to='/login'/>;
    return <Navigate to='/home'/>;
  }
return(
    <div className='landingpage'>
      <video autoPlay muted  className='vedio-bg' >
        <source src={Background} type="video/mp4"/>
        
        </video>
        <div className='bg'></div>
      <div className='content'>
          <h1 style={{color:"#FF0800",fontSize:"45px",fontFamily:"revert",fontWeight:"bold",padding:"10px"}}>SCN Automotives</h1>
          
</div>
        <div className='body'>
          <Typography component='h1' variant='h5' color='White' style={{fontFamily:'Noto Sans',fontWeight:'bolder'}}>
            The perfect marketplace for all automotive accessories
          </Typography>

          <div style={{marginTop:"50px"}}><Button variant="contained" color='error' size='large' onClick={()=>{login(true);}} >EXPLORE</Button></div>
        </div>
        </div>
    
)
}
export default Landingpage;