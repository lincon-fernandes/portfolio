import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Box,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../img/avatar.jpg';

//CSS useStyles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuSliderContainer: {
    width: 250,
    background: '#2B8CAB',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  title: {
    flexGrow: 1,
  },
}));
const menuItems = [
  {
    itemIcon: <Home />,
    itemText: 'Home',
    itemPath: '#',
  },
  {
    itemIcon: <Apps />,
    itemText: 'Apps',
    itemPath: '#apps',
  },
  {
    itemIcon: <ContactMail />,
    itemText: 'Contact',
    itemPath: '/contact',
  },
];
const Navbar = () => {
  const classes = useStyles();
  //useState
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider('right', false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Lincon Fernandes" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.itemPath}>
            <ListItemIcon>{lsItem.itemIcon}</ListItemIcon>
            <ListItemText primary={lsItem.itemText}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar
          className={classes.root}
          position="static"
          style={{
            background: 'linear-gradient(to right, #b65aff, #2B8CAB)',
          }}
        >
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h5"
              style={{ color: '#222' }}
            >
              Lincon Fernandes
            </Typography>

            <IconButton
              className={classes.button}
              onClick={toggleSlider('right', true)}
            >
              <MenuIcon style={{ color: '#222' }} />
            </IconButton>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider('right', false)}
            >
              {sideList('right')}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;