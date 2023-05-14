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
import Footer from './Footer';

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
import { Link } from 'react-router-dom';
import '../App.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//import logo from './static_content/Audi.jpg';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      
      <Link color="inherit" href="/">
        SCN Automotives
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
  { heading: 'MG', description: 'Checkout most frequently ordered parts of Morris Garages',logo:mg },
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
    <div >
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
            <div style={{display:"flex",direction:"row",justifyContent:"end",color:"black"}}>
          <Link to='/carts'>
          <Button variant='filled' style={{backgroundColor:"green",marginRight:"150px",marginTop:"10px"}}>CART   <ShoppingCartIcon style={{backgroundColor:"green",marginLeft:"12px"}} variant="filled" color="success" fontSize='large'/></Button> 
          </Link>
          </div>
          <Container maxWidth="sm">
            <Typography
             
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
              style={{"fontFamily":"Noto Sans"}}
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
          <Grid container spacing={4} style={{"borderRadius":"10px"}}>
            {brands.map((item,index) => (
              <Grid item key={item} xs={12} sm={6} md={4} style={{marginBottom:"35px"}}>
                {/*<Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)' }}
                   className="card-container"
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
            </Card>*/}
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)', borderRadius: '10px', overflow: 'hidden' }} className="card-container">
                <CardMedia component="img" style={{ margin: '0px' }} image={item.logo} alt="random" />
              <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
                <Typography style={{ color: '#333', fontWeight: 'bold' }} gutterBottom variant="h5" component="h2">
                  {item.heading}
                </Typography>
              <Typography style={{ color: '#666' }}>
                  {item.description}
              </Typography>
            </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', padding: '16px' }}>
          <Link to={`/products/${item.heading}`} style={{ textDecoration: 'none' }}>
          <Button size="small" variant='contained' sx={{ backgroundColor: '#4CAF50', color: '#FFF', '&:hover': { backgroundColor: '#3E8E41', boxShadow: 'none' } }} on >View</Button>
          </Link>
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
                {/*<Card 
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
            </Card>*/}
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)', borderRadius: '10px', overflow: 'hidden' }} className="card-container">
  <CardMedia component="img" style={{ margin: '0px' }} image={item.logo} alt="random" />
  <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
    <Typography style={{ color: '#333', fontWeight: 'bold' }} gutterBottom variant="h5" component="h2">
      {item.heading}
    </Typography>
    <Typography style={{ color: '#666' }}>
      {item.description}
    </Typography>
  </CardContent>
  <CardActions sx={{ justifyContent: 'flex-end', padding: '16px' }}>
    <Button size="small" variant='contained' sx={{ backgroundColor: '#4CAF50', color: '#FFF', '&:hover': { backgroundColor: '#3E8E41', boxShadow: 'none' } }}>View</Button>
  </CardActions>
</Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} style={{boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)'}} component="footer">
  <Typography variant="h6" align="center" gutterBottom style={{color:"black",marginTop:"0px"}}>
    Contact Us
  </Typography>
  <div style={{display:"flex", flexDirection: "row"}}>
    <div style={{flexGrow: 1}}>
      <Typography variant="subtitle1" color="text.secondary" component="p">
        <div>
          <h3 style={{color:"black"}}>Email</h3>
          <br/>
          <ul>
            <li style={{color:"black"}}><a href='mailto:saiharshapingali@gmail.com' style={{color:"black"}}>saiharshapingali@gmail.com</a></li>
            <li style={{color:"black"}}><a href='mailto:kishorechaitanya068@gmail.com' style={{color:"black"}}>kishorechaitanya068@gmail.com</a></li>
            <li style={{color:"black"}}><a href='mailto:2100031115@kluniversity.in' style={{color:"black"}}>2100031115@kluniversity.in</a></li>
          </ul>
        </div>
      </Typography>
    </div>
    <div style={{flexGrow: 1}}>
    <Typography variant="subtitle1" color="text.secondary" component="p">
        <div>
          <h3 style={{color:"black"}}>Email</h3>
          <br/>
          <ul>
            <li style={{color:"black"}}><a href='mailto:saiharshapingali@gmail.com' style={{color:"black"}}>saiharshapingali@gmail.com</a></li>
            <li style={{color:"black"}}><a href='mailto:kishorechaitanya068@gmail.com' style={{color:"black"}}>kishorechaitanya068@gmail.com</a></li>
            <li style={{color:"black"}}><a href='mailto:2100031115@kluniversity.in' style={{color:"black"}}>2100031115@kluniversity.in</a></li>
          </ul>
        </div>
          </Typography>
    </div>
    <div style={{flexGrow: 1}}>
      <Typography variant="subtitle1" color="text.secondary" component="p">
        <div>
  <h3 style={{color:"black"}}>Contact</h3>
  <br/>
  <ul>
    <li style={{color:"black"}}><a href='mailto:saiharshapingali@gmail.com' style={{color:"black"}}>saiharshapingali@gmail.com</a></li>
   
    
    <li style={{color:"black"}}><a href='https://www.linkedin.com/in/chaitanya-kishore-6aa93a246/' target='_blank' rel='noopener noreferrer' style={{color:"black"}}>LinkedIn</a></li>
  </ul>
</div>

      </Typography>
    </div>
  </div>
</Box>


      {/* End footer */}
      </div>
   
  );
}