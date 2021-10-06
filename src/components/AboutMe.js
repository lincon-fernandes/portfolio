import React from 'react';
import Photo from '../img/aboutImage.jpg';
import Resume from '../docs/curriculo.pdf';
import {
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
  Box,
  CardMedia,
} from '@material-ui/core/';
/* import { makeStyles } from '@material-ui/core/styles'; */
import { LinkedIn, GitHub, InsertDriveFile } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  gridPhoto: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  media: {
    height: 100,
    width: '90%',
    margin: 'auto',
    paddingTop: '56.25%', // 16:9
  },
  links: {
    display: 'inline-block',
    justifyContent: 'space-between',
    margin: '30px 15px 5px',
  },
  about: {
    paddingTop: '1rem',
  },
}));
const AboutMe = () => {
  const classes = useStyles();
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Box
        className={classes.container}
        component="div"
        style={{ background: '#fff' }}
      >
        <Grid
          style={{ paddingBotton: '2rem' }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className={classes.gridPhoto} md={6} xs={12}>
            <CardMedia
              className={classes.media}
              image={Photo}
              title="Paella dish"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            className={classes.about}
            style={{ marginTop: '0.5rem' }}
          >
            <Typography className={classes.about}>Sobre Mim</Typography>
            <Typography style={{ marginTop: '1.5rem' }}>
              Ola, eu me chamo Lincon sou um programador front-end, estou
              buscando novas oportunidades de ampliar meu conhecimento,
              atualmente meus estudos são focados em React e Next-js
            </Typography>
            <Box className={classes.links}>
              <IconButton
                href="https://www.linkedin.com/in/lincon-fernandes-bb497613b/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedIn />
                LinkedIn
              </IconButton>

              <IconButton
                href="https://github.com/lincon-fernandes"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                GitHub
              </IconButton>

              <IconButton href={Resume} rel="noreferrer" target="_blank">
                <InsertDriveFile />
                Curriculo
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    </Container>
  );
};
export default AboutMe;
