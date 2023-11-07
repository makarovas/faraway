import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import React from 'react';
import logo from '../metamask.svg';

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Box
          sx={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', typography: 'h3',
            '& > :not(style) + :not(style)': {
              ml: 2,
            },
          }}>
          <Link href="/demo" underline="none" sx={{ color: '#FFF' }}>
            NFT Demo
          </Link>
        </Box>
      </header>
    </div>
  );
}
