import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import nayeem from './static_content/nayeem.png';
import harsha from './static_content/harsha.jpg';

const AboutUs = () => {
  return (
    <div  >
 

<Grid container spacing={4}>
  <Grid item xs={12} md={3} style={{ marginTop: '125px',marginRight:'80px',marginLeft:'80px'}} >
    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)', borderRadius: '10px',padding:"15px" }} className='my-card' >
      <CardMedia
        component="img"
        
        image= {harsha}
        title="Harsha"
        style={{width:"200px",height:"200px"}}
      />
      <Typography style={{ color: 'black', fontFamily: 'Noto Sans', marginBottom: '20px' }} variant="h4">
        Harsha
      </Typography>
      <Typography style={{ color: 'black', fontFamily: 'Noto Sans', marginBottom: '20px' }} variant="body1">
        Hi I am HARSHA 
        i'm a 2nd year CS student at KL University . 
        and i'm interested in FULL STACK WEB DEVLOPMENT , CLOUD COMPUTING AND MACHINE LEARNING
      </Typography>
      
    </Card>
  </Grid>
  <Grid item xs={12} md={3} style={{ marginTop: '125px',marginRight:'140px' }}>
    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)', borderRadius: '10px',padding:"15px" }} className='my-card'>
      <CardMedia
        component="img"
        height="200"
        image={nayeem}
        title="NAYEEM SHAIK"
        style={{width:"200px",height:"225px"}}
      />
      <Typography style={{ color: 'black', fontFamily: 'Noto Sans', marginBottom: '20px' }} variant="h4">
      NAYEEM SHAIK
      </Typography>
      <Typography style={{ color: 'black', fontFamily: 'Noto Sans', marginBottom: '20px' }} variant="body1">
      hi i am nayeem is a highly motivated computer science student. with a passion for coding and problem-solving.
       Currently pursuing a Btech in cse at KL university
      </Typography>
    </Card>
  </Grid>
  <Grid item xs={12} md={3} style={{ marginTop: '125px' }}>
    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)', borderRadius: '10px',padding:"15px" }} className='my-card'>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/id/239/200/300"
        title="Our Values"
        style={{width:"200px",height:"200px"}}
      />
      <Typography style={{ color: 'black', fontFamily: 'Noto Sans', marginBottom: '20px' }} variant="h4">
        CHAITANYA
      </Typography>
      <Typography style={{ color: 'black', fontFamily: 'Noto Sans', marginBottom: '20px' }} variant="body1">
      hi i am Chaitanya is a highly motivated computer science student with a passion for coding and problem-solving.
       Currently pursuing a Btech in cse at KL university
      </Typography>
    </Card>
  </Grid>
</Grid>


    </div>
  );
};

export default AboutUs;
