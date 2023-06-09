import React from 'react';
import MailLetterIcon from './incos/MailLeterIcon';
import DjinniIcon from './incos/DjinniIcon';
import LinkedInIcon from './incos/LinkedInIcon';
import TelegramIcon from './incos/TelegramIcon';
import GitHubIcon from './incos/GitHubIcon';

const ListContainer = () => {
  const handleTelegramClick = () => {
    window.open('tg://resolve?domain=Anvvy', '_blank');
  };
  return (
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
          <a onClick={handleTelegramClick} className="links-list__item-link">
            <TelegramIcon />
          </a>
        </li>
        <li className="links-list__item">
          <a className="links-list__item-link" target="_blanck" href="https://github.com/Anvvy12">
            <GitHubIcon />
          </a>
        </li>
        <li className="links-list__item">
          <a
            className="links-list__item-link"
            target="_blanck"
            href="https://djinni.co/q/4c8217d37b/"
          >
            <DjinniIcon />
          </a>
        </li>
        <li className="links-list__item">
          <a className="links-list__item-link" target="_blanck" href="mailto:romanbs.wo@gmail.com">
            <MailLetterIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ListContainer;
