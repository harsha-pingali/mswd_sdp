
import Landingpage from './components/Landingpage.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import './App.css';
import { Container} from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ResponsiveAppBar from './components/Navigation.js';
import Home from './components/Home.js';
import PrivateRoutes from './components/utils/PrivateRoutes.js';
import Admin from './components/Admin.js';
import AudiProducts from './components/AudiProducts.js';
import Benz from './components/BenzProducts.js';
import Bugati from './components/Bugati.js';
import MG from './components/MG.js';
import Bmw from './components/Bmw.js';
import Volvo from './components/Volvo.js';
import Cart from './components/Carts.js';
import Carts from './components/Carts.js';
import PaymentFailure from './components/PaymentFailure.js';
import PaymentSuccess from './components/PaymentSuccess.js';
function App() {
  return (
   <div className='App'>
    
    <ResponsiveAppBar />
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route element={<PrivateRoutes/>}>
        <Route path='/home'   element={<Home/>}/>
        <Route path='/admin'  element={<Admin/>} />
        <Route path='/products/Audi' element={<AudiProducts/>} />
        <Route path='/products/Mercedes-Benz' element={<Benz/>}/>
        <Route path='/products/Bugati'  element={<Bugati/>}/>
        <Route path='/products/products/MG'  element={<MG/>}/>
        <Route path='products/BMW'  element={<Bmw/>}/>
        <Route path='/products/Volvo'  element={<Volvo/>}/>
        <Route path='/carts' element={<Carts/>}/>
        <Route path='/success' element={<PaymentSuccess/>}/>
        <Route path='/failure' element={<PaymentFailure/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    {/*<video autoPlay muted loop height="200px" width="250px" style={{marginTop:"0px"}}>
        <source src={VedioLogo} type="video/mp4"/>
  </video>*/}
   </div>
      
  );
}

export default App;
