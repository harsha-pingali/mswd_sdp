import * as React from 'react';
import '../index.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import toast,{Toaster} from 'react-hot-toast'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import { useState} from 'react';
import Home from './Home';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit" href="https://klu-scnautomotives.netlify.app/">
        S C N Automotives
      </Link>{}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const  [status,setStatus]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[result,setResult]= useState(null);
  const[user_id,setUserid]=useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate('/home'); // replace this with your desired destination
    };

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => {

      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);
  <Toaster position='top-center'></Toaster>
 	async function handleSubmit(event) {
		event.preventDefault();
    
		const response = await fetch('https://scn-automotives.onrender.com/authenticate', {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
        email,
				password,
			}),
		})
    
		const data = await response.json()
    console.log(data)
    console.log(data.user)
		if (data.user) {
			localStorage.setItem('token', data.user)
      localStorage.setItem('user',email)
      console.log(localStorage.getItem('user'))
      toast.success("Form submitted")
			// alert('Login successful')
      //alert(data.user.name)
			//window.location.href = '/home'
      //window.history.pushState(null,null,'/home')
     
      //window.history.forward();
      //window.location.href='/home'

       
       if(email=='2100031411@kluniversity.in')
          navigate('/admin');
       else
        navigate('/home');
      
		} 
    else {
			alert('Please check your username and password');
    }
    }
	


    /*function handleSubmit(Event){
    alert("form submitted");
    Event.preventDefault();
    const data=new FormData(Event.currentTarget);
     setUserid(data.get("user-id"));
    const passwd=data.get("passwd");
    console.log(user_id);
    axios.get('http://localhost:6061/authenticate',{params:{
      un: data.get("user-id"),
      pw: data.get("passwd")
    }}).then((response)=>{ 
      console.log(response.data)
      setResult(response.data)
      console.log(result)//setResult renders the page first and then it assigns the value
    })
    console.log(passwd);}*/
if(status==false){
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={false}
          md={7}
          lg={6}
          sx={{
            backgroundImage: 'url(https://res.cloudinary.com/dpkdi73b4/image/upload/v1680325311/loginimg_wxclrl.jpg)',
            backgroundRepeat: 'no-repeat',
            
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={12} md={5} lg={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5" style={{ fontFamily: 'Noto Sans',color:"black",fontWeight:"bold"}}>
              Sign in
            </Typography>
         
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
             
              <center>
              <Button
                type="submit"
                fullWidth
                href=''
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{borderRadius:"20px",backgroundColor:"black",width:"250px"}}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              </center>
             
              <Grid container>
                <Grid item>
                  <Link href="/signup/" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
          <Copyright sx={{ mt: 5 }} />
            </Box>
            


          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );}

  else{
    return <Navigate to='/home/' />
  }
}