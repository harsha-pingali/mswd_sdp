import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import axios from 'axios';
const styles = {
  root: {
    flexGrow: 1,
    margin: '16px',
  },
  paper: {
    padding: '16px',
  },
  avatar: {
    width: '96px',
    height: '96px',
    margin: '8px',
    fontSize:"65px"
  },
  button: {
    margin: '8px',
  },
};

function Profile() {
    const [userData, setUserData] = useState("c");

const user=localStorage.getItem('user');
useEffect(()=>{
    handle()
},[])
 const handle = ()=>{
    console.log("call")
    axios.post("http://localhost:6061/fetchprofile",{
        email:user
    }).then((response)=>{
        setUserData(response.data)
        console.log(response.data)
    })

 }
  return (
    <div style={styles.root}>
      <Paper style={styles.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Avatar style={styles.avatar} alt={user} src="/static/images/avatar/2.jpg" ></Avatar>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom style={{color:"black"}}>
              {userData.fname}  {userData.lname}
            </Typography>
            <Typography variant="h6" gutterBottom style={{color:"black"}}>
              Email: {userData.email}
            </Typography>
            <Typography variant="h6" gutterBottom style={{color:"black"}}>
              Phone: {userData.mobile}
            </Typography>
            <Typography variant="h6" gutterBottom style={{color:"black"}}>
              DOB: {userData.DOB}
            </Typography>
          </Grid>
        </Grid>
       {/* <Button
          style={styles.button}
          variant="contained"
          color="primary"
        >
          Edit Profile
  </Button>*/}
      </Paper>
    </div>
  );
}

export default Profile;






