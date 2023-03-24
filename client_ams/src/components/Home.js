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
import bmw from  './static_content/bmwlogo.jpg';
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
  { heading: 'Audi', description: 'Description for Audi' ,logo:audi},
  { heading: 'Mercedes-Benz', description: 'Description for Mercedes-Benz',logo:benz },
  { heading: 'Bugati', description: 'Description for Bugati',logo:audi},
  { heading: 'Morris Garages', description: 'Description for Morris Garages',logo:audi },
  { heading: 'BMW', description: 'Description for BMW',logo:bmw },
  { heading: 'Volvo', description: 'Description for Volvo',logo:audi },
];
const accessories=[
  {heading:"Exhaust"},
  {heading:"Amplifier"},
  {heading:"Clutch Kit"},
  {heading:"Air Filters"},
  {heading:"wind Shield"},
  {heading:"Break System"}
]


export default function Home() {
  return (
    <div>
      <CssBaseline />

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
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
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
                    <Button size="small">Edit</Button>
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
                    
                    //image={logo}
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