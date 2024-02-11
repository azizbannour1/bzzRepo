 import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';

const Home = () => {
  return (
    <Container
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1597692493647-25bd4240a3f2?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        filter: 'brightness(90%)',  
        width: '100%', 
        padding: 0,  
        margin: 0,  
        maxWidth: '100%',  
        '@media (min-width: 1200px)': {
          maxWidth: '100%',  
        },
      }}
      disableGutters
    >
       <Box
        sx={{
          textAlign: 'center',
          marginBottom: '20%', 
        }}
      >
        <Typography variant="h3">Delicious Pasta Creations</Typography>
        <Typography variant="body1" sx={{marginBottom:'2%%'}}>
          Explore our pasta dishes crafted with love and passion.
        </Typography>
        <Typography variant="body1" sx={{marginBottom:'2%%'}}>
          Explore our pasta dishes crafted with love and passion.
        </Typography>
        <Typography variant="body1" sx={{marginBottom:'5%'}}>
          Explore our pasta dishes crafted with love and passion.
        </Typography>
        <Button
          sx={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: '#ff5733',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#d94c27',
            },
          }}
          variant="contained"
        >
          Order Now
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
