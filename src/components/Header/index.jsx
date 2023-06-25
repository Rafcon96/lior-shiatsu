import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import LanguageBtn from '../LanguageBtn'
import { useLang } from '../../context/language.context';
import { Link } from 'react-router-dom';

const pages = [
    {name:['בית','home'], link:"/lior-shiatsu"},
    {name:["על הטיפול","about"], link:"lior-shiatsu/about"},
    {name:['טיפולים',"treatments"], link:"lior-shiatsu/treatments"},
    {name:['מחירון',"prices"], link:"lior-shiatsu/prices"},
    
    // {name:["זמינות","availability"], link:"/availability"},
    // {name:['המלצות',"recommendations"], link:"/recommendations"},
    ]
   

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {language} = useLang()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ 
        background:"rgba(268,293,333,1)",
        height: 80
      }}>
      <Container maxWidth="xl">
        <Toolbar   >
        <img src={`${process.env.PUBLIC_URL}/liorLogo2.png`} alt="liorLogo" style={{ width: 100, height: 80}}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize='large' style={{color:'rgb(69,96,69)'}}/>
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >   
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link to={page.link} style={{textDecoration:"none",color:"rgb(199, 158, 22)",fontSize:"25px"}}>
                    {page.name[Number(language)]}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'},justifyContent:"space-evenly" }}>
            {pages.reverse().map((page, index) => (
                  <Link key={index} style={{color:"rgb(199, 158, 22)",fontSize:"25px",textDecoration:"none",marginRight:20}} to={page.link} >
                    {page.name[Number(language)]}
                  </Link>
            ))}
          </Box>
          <Box sx={{width:120}}>
      <LanguageBtn />
      052-8356836
        </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;