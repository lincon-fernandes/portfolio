import React from 'react';
import Netflix from '../img/netflixPrint.jpg';
import Portfolio from '../img/portfolioPrint.jpg';
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
  Link,
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
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea>
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
              <IconButton>
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>
              <Link
                href="https://github.com/lincon-fernandes/clone-netflix-react"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton>
                  <GitHub />
                  <Typography>Git Hub Proj</Typography>
                </IconButton>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea>
              <CardMedia
                className={classes.projMedia}
                image={Portfolio}
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
                  Portifolio pessoal usando React js e Material UI
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton>
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>
              <IconButton>
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea>
              <CardMedia
                className={classes.projMedia}
                image="https://www.thewolfrock.co.uk/wp-content/uploads/2016/05/placeholder-banner-1024x485.jpg"
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
              <IconButton>
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>
              <IconButton>
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea>
              <CardMedia
                className={classes.projMedia}
                image="https://www.thewolfrock.co.uk/wp-content/uploads/2016/05/placeholder-banner-1024x485.jpg"
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
              <IconButton>
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>
              <IconButton>
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
