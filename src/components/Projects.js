import React from 'react';
import Netflix from '../img/netflixPrint.jpg';
import Portfolio from '../img/portfolioPrint.jpg';
import WhatsApp from '../img/WhatsAppPrint.jpg';
import Tiktok from '../img/tiktokPrint.jpg';
import spotify from '../img/spotify_thumb.jpg';
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
            <CardActionArea href="https://portfolio-lincon.netlify.app/">
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
              <IconButton href="https://portfolio-lincon.netlify.app/">
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
        {/* tiktok clone*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea
              href="https://zealous-feynman-567fa8.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <CardMedia
                className={classes.projMedia}
                image={Tiktok}
                title="Netflix Clone"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Clone tiktok
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecundary"
                  component="h2"
                >
                  Clone tiktok com Next js e styled components
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                href="https://zealous-feynman-567fa8.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>
              <IconButton
                href="https://github.com/lincon-fernandes/clone-tiktok-nextjs"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        {/* placeholder*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea>
              <CardMedia
                className={classes.projMedia}
                image={WhatsApp}
                title="placeholder"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  WhatsApp clone
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecundary"
                  component="h2"
                >
                  Clone do whatsApp utilizando autentificaçao com firebase e
                  react js
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton disabled>
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>
              <IconButton
                href="https://github.com/lincon-fernandes/whatsappclone"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                <Typography>Git Hub Proj</Typography>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.projCard}>
            <CardActionArea
              href="https://eager-goodall-bf7b41.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <CardMedia
                className={classes.projMedia}
                image={spotify}
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
              <IconButton href="/" disable rel="noreferrer" target="_blank">
                <Web />
                <Typography>Live Demo</Typography>
              </IconButton>

              <IconButton
                href="https://github.com/lincon-fernandes/lincon-fernandes-spotify-next-cloneUI"
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
