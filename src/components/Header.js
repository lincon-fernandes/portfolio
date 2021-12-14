import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../img/avatar.jpg';
import ReactTyped from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
//CSS STYLES

const useStyles = makeStyles((theme) => ({
  '@keyframes animate': {
    '0%': {
      filter: 'hue-rotate(0deg)',
    },
    '100%': {
      filter: 'hue-rotate(360deg)',
    },
  },

  avatarBox: {
    position: 'absolute',
    top: '45vh',
    right: 'calc(50% - 200px)',
    zIndex: 10000,
    width: '400px',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  title: {
    color: '#fff',
  },
  subtitle: {
    color: '#fff',
  },
  container: {
    position: 'relative',
    height: '90vh',
    overflow: 'hidden',
    animation: '$animate 4s linear infinite',
    background: '#000',
  },

  row: {
    display: 'inline-flex',
    marginTop: '-32px',
    marginLeft: '-50px',
    '&:nth-child(even)': {
      marginLeft: '1px',
    },
  },
  hexagon: {
    position: 'relative',
    width: '100px',
    height: '110px',
    background: '#111',
    margin: '1px',
    clipPath: 'polygon(50% 0%, 100% 25%,100% 75%,50% 100%,0% 75%, 0% 25%)',
    transition: '2s',
    '&:hover': {
      transition: '0s',
      background: '#0f0',
    },
    '&:after': {
      content: '',
      position: 'absolute',
      top: '4px',
      bottom: '4px',
      left: '4px',
      right: '4px',
      background: '#111',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%,50% 100%, 0% 75%, 0% 25%)',
      zIndex: 1,
    },
    '&:before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      pointerEvents: 'nome',
      background: 'rgba(255,255,255,0.02',
      zIndex: 1000,
    },
  },
  typedContainer: {
    display: 'flex',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '1rem',
    marginBottom: '1rem',
    height: '400px',
  },
  reactTyped: {
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.typedContainer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
          <div className={classes.hexagon}></div>
        </div>
      </div>
      <Box className={classes.infoContainer}>
        <Grid
          container
          className={classes.avatarBox}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar
              className={classes.avatar}
              src={avatar}
              alt="Lincon Fernandes"
            ></Avatar>
          </Grid>
          <Grid item justifyContent="center">
            <Typography className={classes.title} variant="h4">
              <ReactTyped strings={['Lincon Fernandes']} typedSpeed={40} />
            </Typography>
            <br />
            <Typography
              alignItems="center"
              className={classes.subtitle}
              variant="h5"
            >
              <ReactTyped
                strings={[
                  'React js',
                  'HTML, CSS JavaScript',
                  'Styled Components',
                  'material UI',
                ]}
                typedSpeed={40}
                loop
                className={classes.reactTyped}
              />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
