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
import exhaust from './static_content/exhaust.jpg';
import clutch from './static_content/clutch.jpg';
import radiator from './static_content/radiator.jpg'
import suspension from './static_content/suspension.jpg'
import carburetor from './static_content/carburetor.jpg'
import shock from './static_content/shock.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { CartState } from './context/Context';

const accessories=[
  {id:"1",heading:"Exhaust",logo:exhaust,price:"$120",description:"A high-quality exhaust system can improve the performance of your car by increasing horsepower and torque. This is achieved by optimizing the flow of exhaust gases out of the engine and reducing backpressure."},
  {id:"2",heading:"Clutch Kit",logo:clutch,price:"$120",description:"A high-quality clutch kit can improve the performance of your car by providing better traction and faster acceleration. This is achieved by using high-performance friction materials and a stronger pressure plate."},
  {id:"3",heading:"Radiator",logo:radiator,price:"$120",description:"A malfunctioning radiator can cause your car to overheat and potentially damage the engine, which can be a safety hazard. A high-quality radiator can help prevent these issues and keep you and your passengers safe on the road."},
  {id:"4",heading:"Suspension",logo:suspension,price:"$120",description:"A well-designed suspension system can provide a smooth and comfortable ride by absorbing bumps and vibrations from the road. This can help reduce driver fatigue and make long journeys more enjoyable."},
  {id:"5",heading:"Carburetor",logo:carburetor,price:"$120",description:"It's important to choose a carburetor that is compatible with your car's make and model, as well as the type of engine and driving you do. For example, a performance carburetor may not be suitable for everyday driving, while a fuel-efficient carburetor may be better suited for long-distance driving."},
  {id:"6",heading:"Break System",logo:exhaust,price:"$120",description:"It's important to choose a brake system that is compatible with your car's make and model, as well as the type of driving you do. For example, a high-performance brake system may not be necessary for everyday driving, while a heavy-duty brake system may be necessary for towing or hauling heavy loads."},
  {id:"7",heading:"AirMatic Shock Absorber",logo:shock,price:"$120",description:"shock absorbers provide a smooth and comfortable ride by automatically adjusting the suspension system based on road conditions and driving style. This can help reduce vibrations and noise, making for a more pleasant driving experience."}
]
function Bugati()
{
    const navigate=useNavigate();
     const [showDescription, setShowDescription] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
  const handleMouseOver = () => {
    setShowDescription(true);
  };
function handlePayment(){
  window.location.href='/payment'
}
  const handleMouseOut = () => {
    setShowDescription(false);
  };
  let addedItems = [];
  const {state:{accessories}}=CartState();
  console.log(accessories)

  const {state:{cart},dispatch}=CartState();
  console.log(cart)
 async  function handleCart(id) {
    

    if (!addedItems.includes(id)) {
        const mail=localStorage.getItem('user')
      await axios.post("http://localhost:6061/cart", { product_id: id,email:mail }).then((res) => {
       addedItems.push(id);
        setAddedToCart(true);
        alert(id+"Item added to cart");
      });
    }
  }
    return(
        <div>
          <div style={{display:"flex",direction:"row",justifyContent:"end",color:"black"}}>
          <Link to='/carts'>
          <Button variant='filled' style={{backgroundColor:"green",marginRight:"150px",marginTop:"10px"}}>CART   <ShoppingCartIcon style={{backgroundColor:"green",marginLeft:"12px"}} variant="filled" color="success" fontSize='large'/></Button> 
          </Link>
          </div>
                    <Container  sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          
          <Grid container spacing={4}>
            {accessories.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4} style={{marginBottom:"35px"}} >
        
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)', borderRadius: '10px', overflow: 'hidden',transition: 'transform 0.3s ease',    '&:hover': {
      transform: 'scale(1.05)',
},}} className="card-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
                <CardMedia component="img" style={{ margin: '0px' }} image={item.logo} alt="random" />
                <CardContent sx={{ flexGrow: 1, padding: '16px' }} style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",height: "100%"}}>
                    <Typography style={{ color: '#333', fontWeight: 'bold' }} gutterBottom variant="h5" component="h2">
                    {item.heading}
                    </Typography>
                    <Typography style={{ color: '#666' ,fontWeight:"bold"}} gutterBottom variant="h5" component="h1">
                     Price : {item.price}
                    </Typography>
                    {showDescription && (
                    <Typography style={{ color: '#666' }}>
                        {item.description}
                    </Typography>
                    )}
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', padding: '16px' }}>
                  {
                    cart.some(p=>p.id===item.id)?(
                      <Button size="small" variant='contained' color='error' onClick={()=>{
                        dispatch({
                          type:"REMOVE_FROM_CART",
                          payload:item
                        });
                      }}>Remove from cart</Button>
                    ):(
                      <Button size="small" variant='contained' sx={{ backgroundColor: '#87CEEB', color: '#FFF', '&:hover': { backgroundColor: '#4CAF50', boxShadow: 'none' } }}  onClick={() => {
                        handleCart(item.id);
                        dispatch({
                          type:"ADD_TO_CART",
                          payload:item
                        });
                      }}  ><ShoppingCartIcon/>Add To cart</Button>
                    )
                  }
                    
                    <Button size="small" variant='contained' sx={{ backgroundColor: '#4CAF50', color: '#FFF', '&:hover': { backgroundColor: '#3E8E41', boxShadow: 'none' } }} onClick={() => handlePayment()}><PaymentIcon/>BUY NOW</Button>
                </CardActions>
          </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
    )
}
export default Bugati;