import React from 'react';
import Netflix from '../img/netflixPrint.jpg';
import Portfolio from '../img/portfolioPrint.jpg';
import LandingPage from '../img/landingPagePrint.jpg';
import Weather from '../img/weatherApp.jpg';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core/';
import { GitHub, Web } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  projContainer: {
    paddingTop: theme.spacing(3),
  },
  projTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  projCard: {
    maxWidth: '100%',
  },
  projMedia: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
}));
const Projects = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.projContainer}>
      <Typography variant="h4" className={classes.projTitle}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {/* Netflix clone*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea
              href="https://linconnetflix.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <CardMedia
                className={classes.projMedia}
                image={Netflix}
                title="Netflix Clone"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Clone Netflix with React
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecundary"
                  component="h2"
                >
                  Clone Netflix with react js using tmdb
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                href="https://linconnetflix.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>

              <IconButton
                href="https://github.com/lincon-fernandes/clone-netflix-react"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        {/* portifolio*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea
              href="https://portfolio-lincon.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <CardMedia
                className={classes.projMedia}
                image={Portfolio}
                title="Portfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Portifolio with React
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecundary"
                  component="h2"
                >
                  Portifolio pessoal usando React js e Material UI
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                href="https://portfolio-lincon.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>

              <IconButton
                href="https://github.com/lincon-fernandes/portfolio"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        {/* weather app*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea
              href="https://lincon-weather.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <CardMedia
                className={classes.projMedia}
                image={Weather}
                title="Portfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Weather app html, css, js
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecundary"
                  component="h2"
                >
                  weather app
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                href="https://lincon-weather.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>

              <IconButton
                href="https://github.com/lincon-fernandes/weather-app"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        {/* landing page*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea
              href="https://lincon-aaa-fire.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <CardMedia
                className={classes.projMedia}
                image={LandingPage}
                title="Portfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Landing page
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecundary"
                  component="h2"
                >
                  basic landing page using bootstrap
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                href="https://lincon-aaa-fire.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>

              <IconButton
                href="https://github.com/lincon-fernandes/aaa-fire"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
