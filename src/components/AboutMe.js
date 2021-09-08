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
  Link,
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
  about: {},
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
          <Grid className={classes.gridPhoto} item md={6} xs={12}>
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
            <Typography>Sobre Mim</Typography>
            <Typography style={{ marginTop: '1.5rem' }}>
              Programador iniciante, autodidata, interassado em tecnologias de
              programaçao frontend, react next e material UI,
            </Typography>
            <Box>
              {' '}
              <Link
                href="https://www.linkedin.com/in/lincon-fernandes-bb497613b/"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton>
                  <LinkedIn />
                  LinkedIn
                </IconButton>
              </Link>
              <Link
                href="https://github.com/lincon-fernandes"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton>
                  <GitHub />
                  GitHub
                </IconButton>
              </Link>
              <Link href={Resume} rel="noreferrer" target="_blank">
                <IconButton>
                  <InsertDriveFile />
                  Curriculo
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    </Container>
  );
};
export default AboutMe;
