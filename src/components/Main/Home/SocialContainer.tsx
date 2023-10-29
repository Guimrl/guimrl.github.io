import React from 'react';
import styled from 'styled-components';
import { SocialItem } from '../../global';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialContainer = () => {
  return (
    <SocialContainerStyled>
      <SocialItem
        title={'Github'}
        icon={<FaLinkedin />}
        href={'https://www.linkedin.com/in/guimrl/'}
      />
      <SocialItem
        title={'Linkedin'}
        icon={<FaGithub />}
        href={'https://github.com/Guimrl'}
      />
    </SocialContainerStyled>
  );
};

const SocialContainerStyled = styled('ul')`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 15px;
  margin-bottom: 15px;

  > li {
    flex: 1 1 0;
    max-width: 3.75em;
  }

  > li a {
    justify-content: center;
    color: var(--main-color);
    font-size: 2.5em;
  }
`;

export default SocialContainer;
