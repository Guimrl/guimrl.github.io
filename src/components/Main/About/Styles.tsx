import React from 'react';
import { Link } from 'react-router-dom';
import { Highlight } from 'src/components/global';
import styled from 'styled-components';

export const Decision = () => {
  return (
    <Highlight>
      <Link to="https://decisionsystems.com.br/" target="_blank">
        Decision Systems
      </Link>
    </Highlight>
  );
};

export const Name = styled('div')`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const Title = styled('p')`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
  color: var(--main-color);
`;

export const Description = styled('p')`
  max-width: 120vh;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 2em;
`;
