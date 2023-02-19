import '../index.css';
import React from 'react';
import logo from'./static_content/scn_logo.mp4';
function Login()
{
    return(

        <div className='login'>
            <video autoPlay muted loop className='logo_bg'>
                <source src={logo}/>
            </video>
        </div>
    );
}
export default Login;