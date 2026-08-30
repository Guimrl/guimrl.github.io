import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Button, Typography } from '@guimrl/ui';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
    --bg: #0f172a;
    --panel: #111827;
    --text: #e2e8f0;
    --primary: #7c3aed;
    --muted: #94a3b8;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Inter, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #020817 0%, #111827 100%);
    color: var(--text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
`;

const Card = styled.section`
  width: min(720px, 100%);
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  padding: 3rem 2rem;
`;

const Subtitle = styled(Typography)`
  margin: 0;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export default function App(): React.ReactNode {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Card>
          <Subtitle>
            Portfólio em manutenção. Enquanto isso, você pode me encontrar no
            GitHub e no LinkedIn.
          </Subtitle>
          <Actions>
            <Button href="https://github.com/Guimrl" rel="noreferrer">
              GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/guimrl/" rel="noreferrer">
              LinkedIn
            </Button>
          </Actions>
        </Card>
      </Page>
    </>
  );
}
