// AvailablePastas.js
import React from 'react';
import { Box, Typography, Button, Container, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';

const pastaData = [
  { id: 1, name: 'Pasta 1', imageUrl: 'https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Pasta 2', imageUrl: 'https://images.unsplash.com/photo-1608334481162-bba440193a20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Pasta 3', imageUrl: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Pasta 4', imageUrl: 'https://images.unsplash.com/photo-1571777663262-fcc9e6076644?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Pasta 5', imageUrl: 'https://images.unsplash.com/photo-1552056776-9b5657118ca4?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Pasta 6', imageUrl: 'https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, name: 'Pasta 7', imageUrl: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, name: 'Pasta 8', imageUrl: 'https://images.unsplash.com/photo-1603662953679-1a32f2155b34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, name: 'Pasta 9', imageUrl: 'https://images.unsplash.com/photo-1560788784-66eda82b5eb7?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const AvailablePastas = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedPasta, setSelectedPasta] = React.useState(null);
  
    const handleOpenModal = (pasta) => {
      setSelectedPasta(pasta);
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setSelectedPasta(null);
      setOpenModal(false);
    };
  
    return (
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="flex-start"
          mt={4}
        >
          {pastaData.map((pasta) => (
            <PastaItem key={pasta.id} pasta={pasta} onOrderClick={() => handleOpenModal(pasta)} />
          ))}
        </Box>
  
        <OrderModal open={openModal} pasta={selectedPasta} onClose={handleCloseModal} />
      </Container>
    );
  };
  
  const PastaItem = ({ pasta, onOrderClick }) => {
    const [hovered, setHovered] = React.useState(false);
  
    return (
      <Box
        position="relative"
        width={200}
        height={300}
        overflow="hidden"
        borderRadius={5}
        boxShadow={3}
        mb={2}  
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={pasta.imageUrl}
          alt={pasta.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        {hovered && (
          <Box
            position="absolute"
            bottom={0}
            width="100%"
            textAlign="center"
            p={2}
            backgroundColor="rgba(0, 0, 0, 0.7)"
          >
            <Typography variant="h6" color="white">
              {pasta.name}
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#ff5733' }} mt={1} onClick={onOrderClick}>
              Order Now
            </Button>
          </Box>
        )}
      </Box>
    );
  };
  
  const OrderModal = ({ open, pasta, onClose }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Order {pasta?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Enter your details si bzz:</Typography>
          <TextField label="Detail 1" fullWidth margin="normal" />
          <TextField label="Detail 2" fullWidth margin="normal" />
          <TextField label="Detail 3" fullWidth margin="normal" />
          <Button variant="contained" color="primary" style={{ backgroundColor: '#ff5733' }} onClick={onClose} mt={2}>
            Submit Order
          </Button>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default AvailablePastas;
  