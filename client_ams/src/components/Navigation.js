import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { makeStyles } from '@mui/material';
import { Theme } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
const pages = ['home', 'login', 'signup'];
const settings = ['Profile',  'Logout'];





function ResponsiveAppBar() {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
     setAnchorElNav(null);
      

  };
  function handleSettings(event){
    setAnchorElNav(null);
     const setting=event.currentTarget.innerText;
     //const setting=document.getElementById("set").textContent;
     alert(setting)
     if(setting=="Logout"){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      window.location.href='/login'
     }

  }
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              
              color: 'inherit',
              textDecoration: 'none',
            }}
            style={{fontFamily:'Noto Sans'}}
          >
            SCN Automotives
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
                 PaperProps={{
        style: {
          backgroundColor: 'black', // replace with your desired color
        },
      }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} id="nav" onClick={handleCloseNavMenu} data-arg1={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
           
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
             
              color: 'inherit',
              textDecoration: 'none',
            }}
            style={{fontFamily:'Noto Sans'}}
          >
            SCN Automotives
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                data-arg1={page}
                id="nav"
                href={"/"+page.toString()}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open cart">
    <IconButton  style={{marginRight:"20px "}} href='/cart'>
      <ShoppingCartSharpIcon/>
    </IconButton>
  </Tooltip>
  {/* Add your cart menu code here */}
</Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={localStorage.getItem('user')} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
        style: {
          backgroundColor: 'black', // replace with your desired color
        },
      }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleSettings} id="set">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;