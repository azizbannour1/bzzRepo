import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      bgcolor="#7E1214"
      color="white"
      padding={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box marginRight={2}>
        <IconButton
          aria-label="Facebook"
          style={{ color: 'white' }}
          onClick={() => window.open('https://www.facebook.com/PastagramPastaBAR', '_blank')}
        >
          <FacebookIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton
          aria-label="Instagram"
          style={{ color: 'white' }}
          onClick={() => window.open('https://www.instagram.com/', '_blank')}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
