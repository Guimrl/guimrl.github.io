import { Box, Container } from '@mui/material';
import styled from 'styled-components';

export const Page = styled(Box)`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
  background-size: 58px 58px;

  &::before {
    content: '';
    position: absolute;
    width: 540px;
    height: 540px;
    right: -220px;
    top: -290px;
    border-radius: 50%;
    background: rgba(255, 138, 61, 0.12);
    filter: blur(120px);
    pointer-events: none;
  }
`;

export const PageContainer = styled(Container)`
  && {
    position: relative;
    z-index: 1;
  }
`;
