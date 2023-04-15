import React from 'react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LinkedInIcon from './incos/LinkedInIcon';
import TelegramIcon from './incos/TelegramIcon';
import GitHubIcon from './incos/GitHubIcon';
import Typography from '@mui/material/Typography';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <VideogameAssetIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />

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
      <div className="links-container">
        <ul className="links-list">
          <li className="links-list__item">
            <a
              className="links-list__item-link"
              target="_blanck"
              href="https://www.linkedin.com/in/bogdan-roman-b498b924b/"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li className="links-list__item">
            <a
              className="links-list__item-link"
              target="_blanck"
              href="https://t.me/@Anvvy?start=unique-id"
            >
              <TelegramIcon />
            </a>
          </li>
          <li className="links-list__item">
            <a className="links-list__item-link">
              <GitHubIcon />
            </a>
          </li>
          <li className="links-list__item">
            <a
              className="links-list__item-link"
              target="_blanck"
              href="https://djinni.co/q/4c8217d37b/"
            >
              Dj.
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
