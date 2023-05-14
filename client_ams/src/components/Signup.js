import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {styled} from '@mui/material/styles';
import axios from 'axios';
import '../index.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from'./Login.js';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      ,
      <Link color="inherit" href="http://localhost:3000" style={{fontFamily:'Noto Sans'}}>
        S C N Automotives
      </Link>
    </Typography>
  );
}


const CssTextField=styled(TextField)({
    '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },

  },
  
})


export default function SignUp() {
  const navigate=useNavigate();
  const[resp,setResponse]=useState(null)
  let user='';
  const handleSubmit = (event) => {
    event.preventDefault();
   
     const data = new FormData(event.currentTarget);
    const checkEmailValidity=(value)=>{
      const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
          alert("email should not contain Whitespaces.")
          return false
        }
        const isContainsAt = /^[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        if(isContainsAt.test(value)){
          return true;
        }
        else{
          alert("email must have @")
        }

    }

    const checkPasswordValidity = (value) => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
          alert("Password must not contain Whitespaces.")
          return false
        }
      
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
          alert("Password must have at least one Uppercase Character.")
          return false
        }
      
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
          alert("Password must have at least one Lowercase Character.")
          
          return false
        }
      
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
          alert("Password must contain at least one Digit.");
      
          return false
        }
      
        const isContainsSymbol =
          /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(value)) {
          alert("Password must contain at least one Special Symbol.");
          return false
        }
      
        const isValidLength = /^.{10,16}$/;
        if (!isValidLength.test(value)) {
          alert("Password must be 10-16 Characters Long.");
          return false
        }
        return true;
      }

      

      

      if(checkPasswordValidity(data.get('password')) && checkEmailValidity(data.get('email'))){
        axios.post("http://localhost:6061/reg",{
        
          email: data.get('email'),
          password: data.get('password'),
          fname: data.get('fname'),
          lname: data.get('lname'),
          mobile:data.get('mobile'),
          DOB :data.get('dob')
  
      }).then((response)=> {
        alert("success")
        navigate('/login')
      }).catch(e=>alert("user already exists"));
      }

      else{
        console.log("Hi")
      }
    
  };
if(resp==null){
  return (
    <div className='wrap-sigup'>
      <Container component="main" maxWidth='xs' style={{height:'100%'}} >
       
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:0,
            
           
          }}
        >
          
          <Typography component="h1" variant="h5" color='black' style={{fontFamily:'Noto Sans',marginBottom:"30px",marginTop:"15px",fontWeight:"bolder",fontSize:"30px"}}>
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CssTextField
              required
              margin="normal"
              isRequired="true"
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="firstName"
              

            />
            
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="lname"
              label="last name"
              type="text"
              id="lname"
              
            />
           
            <CssTextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email - id"
                id="email"
                autoComplete='email'
                autoFocus
              
            />
            <CssTextField
                margin="normal"
                required
                fullWidth
                name="mobile"
                label="mobile"
                id="mobile"
                autoFocus
               
              
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="re_entered_password"
              label="confirm Password"
              type="password"
              id="re_entered_password"
              
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="dob"
              
              type="date"
              id="dob"
            />
            
            <Button
              type="submit"
              fullWidth
              href=''
              variant="contained"
              color='primary'
              sx={{ mt: 6 }}
              style={{borderRadius:"15px"}}
            >
             <Typography  style={{fontFamily:'Noto Sans'}}>Register</Typography> 
            </Button>
        
          </Box>
        </Box>
        <Copyright sx={{ mt: 8 }} />
      </Container>
    </div>
  );}
  else
          navigate('/login')
}