import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute',
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                eneable: true,
                value_area: 900,
              },
            },
            size: {
              random: true,
            },
          },
        }}
      />
      <Header></Header>
    </>
  );
};

export default Home;
