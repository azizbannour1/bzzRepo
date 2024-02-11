import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import pastagram from "../assets/pastagram.png";

const pages = ['Home', 'Menu', 'About Us'];
const settings = [];

function Topbar() {
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#7E1214', top: 0, boxShadow: 'none', m: 0 }}>
      <Toolbar disableGutters>
         <Box sx={{ flexGrow: 0 }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* <img src={pastagram} alt="Pastagram Logo" style={{ height: '30px' }} />  7oot logo leena  */}
          </Typography>
        </Box>

         <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {pages.map((page) => (
            <Button key={page} sx={{ mx: 2, color: 'white' }}>
              {page}
            </Button>
          ))}
        </Box>

         <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
            <ShoppingCartIcon />
          </IconButton>
           <Button
            sx={{
              borderRadius: '12px',
              backgroundColor: '#7E1214',
              color: 'white',
              my: 2,
              mx: 2,
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
