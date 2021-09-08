import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../img/avatar.jpg';
import ReactTyped from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  title: {
    color: '#fff',
  },
  subtitle: {
    color: '#fff',
    paddingBottom: '5rem',
  },
  typedContainer: {
    paddingTop: '5rem',

    height: '30vw',
    textAlign: 'center',
    zIndex: -1,
    backgroundImage:
      'url(https://images.freeimages.com/images/large-previews/443/php-code-1242330.jpg)',
    background: 'cover no-repeat',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Lincon Fernandes"
        ></Avatar>
      </Grid>

      <Typography className={classes.title} variant="h4">
        <ReactTyped strings={['Lincon Fernandes']} typedSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <ReactTyped
          strings={[
            'React js',
            'HTML, CSS JavaScript',
            'Styled Components',
            'material UI',
          ]}
          typedSpeed={40}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
