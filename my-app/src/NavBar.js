/* Navigation Bar */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar (){

    async function home() {
        window.location.href = `/home`;
    }
    async function about() {
        window.location.href = `/about`;
    }
    async function contact() {
        window.location.href = `/contact`;
    }

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar sx={{backgroundColor: "#282c34"}} component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: '30px', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Kevin Yang
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button onClick={() => home()} sx={{ color: '#fff' }}>Home</Button>
            <Button onClick={() => about()} sx={{ color: '#fff' }}>About</Button>
            <Button onClick={() => contact()} sx={{ color: '#fff' }}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}