import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <Box mt="80px" bgColor="#fff3f4"
      borderRadius="30px"
      boxShadow=" 0px -17px 6px -13px rgba(0,0,0,0.1);"
      mb={3}>
      <Stack gap="40px" alignItems="center"
        px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5">
          Made with ❤️ by
          <a
            href='https://github.com/AmirmahdiSattari'
            target="_blank"
            style={linkStyle}
          >
            {' '} Amirmahdi Sattari {' '}
          </a>
        </Typography>
      </Stack>
    </Box>
  )

}

export default Footer