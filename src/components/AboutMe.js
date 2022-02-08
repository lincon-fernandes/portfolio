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
    padding: '1rem',
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
            <Typography variant="h4">Sobre Mim</Typography>
            <Typography style={{ marginTop: '1.5rem' }}>
              Olá eu me chamo Lincon e sou um programador iniciante, sou
              autodidata, mas também pretendo cursar análise e desenvolvimento
              de sistemas, dentre as tecnologias que mais estudo pode-se
              destacar React.js e Next.js, outras tecnologias que podem ser
              citadas em alguns projetos são: MongoDB, TypeScript, Angular,
              MaterialUI e Tailwind.
            </Typography>
            <Box className={classes.links}>
              <IconButton
                href="https://www.linkedin.com/in/lincon-fernandes-bb497613b/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedIn style={{ marginRight: 5 }} />
                LinkedIn
              </IconButton>

              <IconButton
                href="https://github.com/lincon-fernandes"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub style={{ marginRight: 5 }} />
                GitHub
              </IconButton>

              <IconButton href={Resume} rel="noreferrer" target="_blank">
                <InsertDriveFile style={{ marginRight: 5 }} />
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
