
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
