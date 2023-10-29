import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EmailContainer = () => {
  return (
    <EmailContainerStyled>
      <EmailItem href={'gui.amaral123@outlook.com'} icon={<FaEnvelope />} />
      <WhatsappItem
        number={'+55 51 989515251'}
        message={
          ' Fala, Gui! Dei uma olhada no teu portfólio, vamos bater um papo?!'
        }
        icon={<FaWhatsapp />}
      />
    </EmailContainerStyled>
  );
};

const EmailItem = ({ href, icon }) => {
  return (
    <li>
      <Icons>
        {icon}
        <a href={`mailto:${href}`} title={'Email'}>
          {href}
        </a>
      </Icons>
    </li>
  );
};

const WhatsappItem = ({ number, message, icon }) => {
  return (
    <li>
      <Icons>
        {icon}
        <Link
          to={`https://api.whatsapp.com/send?phone=${number.replaceAll(
            ' ',
            '',
          )}&text=${message.replaceAll(' ', '%20')}`}
          target={'_blank'}
        >
          {number}
        </Link>
      </Icons>
    </li>
  );
};

const Icons = styled('div')`
  color: var(--main-color);
`;

const EmailContainerStyled = styled('ul')`
  list-style: none;
  text-align: left;

  > li a {
    text-decoration: none;
    color: var(--main-text-color);
    padding: 5px;
  }

  > li a:hover {
    color: var(--main-color);
  }
`;

export default EmailContainer;
