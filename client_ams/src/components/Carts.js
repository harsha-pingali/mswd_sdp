import axios from "axios";
import exhaust from './static_content/exhaust.jpg';
import clutch from './static_content/clutch.jpg';
import radiator from './static_content/radiator.jpg'
import suspension from './static_content/suspension.jpg'
import carburetor from './static_content/carburetor.jpg'
import { useState ,useEffect} from "react";
import shock from './static_content/shock.jpg'

// should output an array of product IDs associated with the given email
function Cart(){
  const [cartItems, setCartItems] = useState([]);
  //const [avatar, setAvatar] = useState(null);
//const[commonItems,setCommonItems]=useState([])


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
 

//const addedItems=new Set();

const accessories=[
  {id:"1",heading:"Exhaust",logo:exhaust,price:"$120",description:"A high-quality exhaust system can improve the performance of your car by increasing horsepower and torque. This is achieved by optimizing the flow of exhaust gases out of the engine and reducing backpressure."},
  {id:"2",heading:"Clutch Kit",logo:clutch,price:"$120",description:"A high-quality clutch kit can improve the performance of your car by providing better traction and faster acceleration. This is achieved by using high-performance friction materials and a stronger pressure plate."},
  {id:"3",heading:"Radiator",logo:radiator,price:"$120",description:"A malfunctioning radiator can cause your car to overheat and potentially damage the engine, which can be a safety hazard. A high-quality radiator can help prevent these issues and keep you and your passengers safe on the road."},
  {id:"4",heading:"Suspension",logo:suspension,price:"$120",description:"A well-designed suspension system can provide a smooth and comfortable ride by absorbing bumps and vibrations from the road. This can help reduce driver fatigue and make long journeys more enjoyable."},
  {id:"5",heading:"Carburetor",logo:carburetor,price:"$120",description:"It's important to choose a carburetor that is compatible with your car's make and model, as well as the type of engine and driving you do. For example, a performance carburetor may not be suitable for everyday driving, while a fuel-efficient carburetor may be better suited for long-distance driving."},
  {id:"6",heading:"Break System",logo:exhaust,price:"$120",description:"It's important to choose a brake system that is compatible with your car's make and model, as well as the type of driving you do. For example, a high-performance brake system may not be necessary for everyday driving, while a heavy-duty brake system may be necessary for towing or hauling heavy loads."},
  {id:"7",heading:"AirMatic Shock Absorber",logo:shock,price:"$120",description:"shock absorbers provide a smooth and comfortable ride by automatically adjusting the suspension system based on road conditions and driving style. This can help reduce vibrations and noise, making for a more pleasant driving experience."}
]

return (
  <>
    {accessories
      .filter((product) => {
        console.log("product:", product);
        console.log("cartItems:", cartItems);
        return cartItems.some((item) => item.id === product.id);
      })
      .map((product) => (
        <div key={product.id}>
          <h2>{product.heading}</h2>
          <img src={product.logo} alt={product.heading} />
          <p>{product.price}</p>
          <p>{product.description}</p>
          {cartItems.find((item) => item.id === product.id) ? (
            <button style={{ backgroundColor: "green" }}>Added to cart</button>
          ) : (
            <button>Add to cart</button>
          )}
        </div>
      ))}
  </>
);

      }

export default Cart;