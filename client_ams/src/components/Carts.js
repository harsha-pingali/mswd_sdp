import React from 'react'
import { CartState } from './context/Context'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useEffect ,useState} from 'react';
import axios from 'axios';
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';
const Carts = () => {

  const [cartItems, setCartItems] = useState([]);
  const{state:{cart},dispatch}=CartState()
  console.log(cart)

    useEffect(() => {
    async function getData(email) {
      //const response = await axios.get('https://api.github.com/users');
      const response = await axios.post("http://localhost:6061/products",{email:email})
      setCartItems(response.data);
      /*if (response.data.length > 0) {
        setAvatar(response.data[0]);
      }*/
     
    }
    const email=localStorage.getItem("user")
    getData(email);
  },[] );

  console.log(cartItems);
  
  const [total, setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price.slice(1))*curr.qty,0));
 
  },[cart])
  
const handleCheckout = async () => {
  const res = await fetch("http://localhost:6061/pay", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        total,
				cart,
			}),
    })
    const resp = await res.json()
    window.location.href = resp.url
};
  return(
    <div style={{display:"flex",direction:"row",backgroundColor:"#f1faee"}}>
    <div className='cartContainer' style={{display:"flex",direction:"column",width:"50%",marginRight: "50px"}}>
      <div className='cartitems'>
    {cart.map((item)=>{
      return(
              <div class="favourite-place-card-container" style={{display:"flex",direction:"row", boxShadow: '0px 2px 10px rgba(0, 0, 0, 3)', borderRadius: '10px',padding:"15px"}}>
            
            <img
              src={item.logo}
              style={{width:"150px",height:"150px",padding:"10px"}}
            />
            <div>
              <h1 class="favourite-place-card-heading" style={{color:"black",fontFamily:"Noto Sans"}}>{item.heading}</h1>
              <p style={{fontFamily:"Noto Sans",color:"black",marginBottom:"9px"}}>{item.description}</p>
            <form>
          <label htmlFor={`qty-${item.id}`} style={{color:"black",fontFamily:"Noto Sans",fontSize:"20px",marginRight:"10px"}}>QUANTITY:</label>
          <select
            id={`qty-${item.id}`}
            onChange={(e) => dispatch({ type: "CHANGE_CART_QTY", payload: { id: item.id, qty: parseInt(e.target.value) } })}
            defaultValue={item.qty} style={{color:"black",width:"130px",textAlign:"center",borderStyle:"solid",borderWidth:"5px",borderRadius:"9px"}}

          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option style={{color:"black"}} value={num}>{num}</option>
            ))}
          </select>
        </form>
              <Button  variant='filled' color="error" style={{backgroundColor:"red",marginTop:"10px",marginLeft:"10px"}} onClick={()=>{
                        dispatch({
                          type:"REMOVE_FROM_CART",
                          payload:item
                        });
                      }}>Remove from cart <DeleteIcon/></Button>
            </div>
            </div>
      )
    })}
    </div>
   
    
    </div>
      <div style={{ flex: 1, backgroundColor: "#26a69a", marginLeft: "35px" ,width:"40%", minHeight:"100vh",backgroundSize:"cover",borderTopLeftRadius: "17px",}}>
    {/* Container on the right side */}
    <div className='priceContent' style={{ display: 'flex', flexDirection: 'column',paddingTop:"50%" }}>
      <h1 style={{textAlign:"center",fontFamily:"Noto Sans",margin:"10px"}}>Subtotal ({cart.length})  items</h1>
      <h2 style={{fontWeight:"700",fontSize:"28px",fontFamily:"Noto Sans",textAlign:'center'}}>TOTAL : $ {total}</h2>
<<<<<<< HEAD
      <div style={{display:"flex",direction:"row",justifyContent:"center",paddingTop:"25px"}}><Button variant='contained' color="success" onClick={handleCheckout} >Proceed To Checkout</Button></div>
=======
      <div style={{display:"flex",direction:"row",justifyContent:"center",paddingTop:"25px"}}><Button variant='contained' color="success" onClick={handleCheckout}>Proceed To Checkout</Button></div>
>>>>>>> cd931d183f377815715e4bbc18aabc22c5905b22
    </div>
  </div>
    
    </div>
   

  )
}

export default Carts;