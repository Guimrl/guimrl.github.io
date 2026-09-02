import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  :root {
    --background: #09090b;
    --surface: #111113;
    --border: #29292e;
    --soft-border: rgba(255, 255, 255, 0.075);
    --text: #fafafa;
    --muted: #a1a1aa;
    --dimmed: #71717a;
    --orange: #ff8a3d;
    --green: #4ade80;
    --container: 1180px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { 
    scroll-behavior: smooth; }
  body { 
    background: var(--background); 
    color: var(--text); font-family: Roboto, Arial, sans-serif; 
    -webkit-font-smoothing: antialiased; 
  }
  a { 
    color: inherit; 
    text-decoration: none; 
  }
  ::selection { 
    background: rgba(255, 138, 61, 0.3); }
`;

export default Styles;
