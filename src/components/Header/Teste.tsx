import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-scroll';

const SideBar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open: boolean) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => {
    const links = ['Inicio', 'Sobre', 'Projetos'];

    return (
      <Box
        sx={{ width: 259 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {links.map(link => (
            <ListItem key={link} disablePadding>
              <ListItemButton>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  title={`Pular para ${link}`}
                >
                  {link}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          {<MenuRoundedIcon fontSize="large" />}
        </Button>
        <Drawer anchor={'left'} open={openDrawer} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideBar;
