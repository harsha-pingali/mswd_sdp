
import Landingpage from './components/Landingpage.js';
import Login from './components/Login.js';
import './App.css';
import { Container} from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
   <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
    {/*<video autoPlay muted loop height="200px" width="250px" style={{marginTop:"0px"}}>
        <source src={VedioLogo} type="video/mp4"/>
  </video>*/}
   </div>
      
  );
}

export default App;
