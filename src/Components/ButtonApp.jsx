import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ButtonApp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        sx={{backgroundColor: "#FF8E53"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PhotoLibraryIcon />

          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color={'black'} 
          className='txt-shadow'>
            Fun Creations
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <a href='https://github.com/KalaivaniBaskar' 
            target='_blank' 
            rel="noopener noreferrer"><AccountCircleIcon/></a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
