import React from 'react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ListContainer from './ListContainer';
import Typography from '@mui/material/Typography';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <VideogameAssetIcon
          sx={{
            display: {
              '@media (max-width: 899px)': {
                fontSize: '50px',
                width: '50px',
                md: 'flex',
              },
              mr: 1,
              color: 'white',
              marginRight: '8px',
            },
          }}
        />

        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            whiteSpace: 'wrap',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Anvvy-Game
        </Typography>
      </div>
      <ListContainer />
    </footer>
  );
};

export default Footer;
