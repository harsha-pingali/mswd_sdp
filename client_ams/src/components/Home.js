import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../index.css';
import audi from './static_content/Audi.jpg';
import benz from './static_content/benzlogo.jpg';
import exhaust from './static_content/exhaust.jpg';
import clutch from './static_content/clutch.jpg';
import radiator from './static_content/radiator.jpg'
import suspension from './static_content/suspension.jpg'
import carburetor from './static_content/carburetor.jpg'
import bugati from './static_content/bugati.jpg'
import volvo from './static_content/volvo.jpg'
import mg from './static_content/mg.jpg'
import bmw from './static_content/bmw.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import logo from './static_content/Audi.jpg';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const brands = [
  { heading: 'Audi', description: 'Checkout most frequently ordered parts of Audi' ,logo:audi},
  { heading: 'Mercedes-Benz', description: 'Checkout most frequently ordered parts of Mercedes-Benz',logo:benz },
  { heading: 'Bugati', description: 'Checkout most frequently ordered parts of Bugati',logo:bugati},
  { heading: 'Morris Garages', description: 'Checkout most frequently ordered parts of Morris Garages',logo:mg },
  { heading: 'BMW', description: 'Checkout most frequently ordered parts of BMW',logo:bmw },
  { heading: 'Volvo', description: 'Checkout most frequently ordered parts of Volvo',logo:volvo },
];
const accessories=[
  {heading:"Exhaust",logo:exhaust},
  {heading:"Clutch Kit",logo:clutch},
  {heading:"Radiator",logo:radiator},
  {heading:"Suspension",logo:suspension},
  {heading:"Carburetor",logo:carburetor},
  {heading:"Break System",logo:exhaust}
]


export default function Home() {
  const navigate=useNavigate();
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

  return (
    <div>
      <CssBaseline />
        {console.log(localStorage.getItem("token"))}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              POPULAR BRANDS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/*<Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>*/}
            </Stack>
          </Container>
        </Box>
        <Container  sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {brands.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4} style={{marginBottom:"35px"}}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    style={{margin:'0px'}}
                    image={item.logo}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography  style={{color:'black' }} gutterBottom variant="h5" component="h2">
                    {item.heading}
                    </Typography>
                    <Typography style={{color:'black'}}>
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant='contained'>View</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      <Typography style={{color:'black',fontFamily:'Noto Sans'}} gutterBottom variant='h3' align="center">
                    Popular Accessories
      </Typography>

        <Container  sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {accessories.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4} style={{marginBottom:"35px"}}>
                <Card 
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                  
                >
                  <CardMedia
                    component="img"
                    
                    image={item.logo}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography  style={{color:'black' }} gutterBottom variant="h5" component="h2">
                      {item.heading}
                    </Typography>
                    <Typography style={{color:'black' }}>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant='contained'>View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      </div>
   
  );
}