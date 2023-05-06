import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PaymentFailure() {
  return (
  <Box sx={{ flexGrow: 1 }} style={{position:"relative"}}>
  <div style={{position:"absolute", top:0, left:0, right:0, bottom:0, backgroundColor:"rgba(255, 255, 255, 0.5)", zIndex: -1}} />
  <Grid container spacing={2} style={{display:"flex",direction:"row",justifyContent:"center",paddingTop:"90px"}}>
    <Grid item xs={6} md={8} >
      <Item>
        <div>
          <h1 style={{color:"black",marginBottom:"20px"}} >Payment Failed</h1>
          <CancelIcon  style={{ fontSize: '5rem', color: 'red', backgroundColor:"red",marginBottom:"20px"}}  />
          <Typography variant="h4" style={{color:"black",fontFamily:"Noto Sans",marginBottom:"20px"}} sx={{ mb: 2 }}>Sorry to say but your payment was cancelled</Typography>
          <Typography variant="h5" style={{color:"black",fontFamily:"Noto Sans",marginBottom:"20px"}} sx={{ mb: 2 }}>please try again</Typography>
          <Link to='/home'>
          <Button variant='filled' color="secondary" style={{backgroundColor:"#3f51b5",marginBottom:"20px"}} sx={{ mb: 2 }} >Go Back To Home</Button>
          </Link>
        </div>
      </Item>
    </Grid>
  </Grid>
</Box>

  );
}