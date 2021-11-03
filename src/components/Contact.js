import React from 'react';
import {
  Link,
  Container,
  Grid,
  Divider,
  IconButton,
  Typography,
  /* TextField,Button, */
} from '@material-ui/core';

import { LinkedIn, GitHub, WhatsApp, Mail } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  cttButton: {
    marginRight: '0.3rem',
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <Container id="contact" style={{ marginTop: '3rem' }}>
      <Grid container>
        {/* <Grid item md={8} xs={12}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <TextField required id="standard-required" label="Nome" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField required id="standard-required" label="Email" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                required
                type="number"
                id="standard-required"
                label="Telefone"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField required id="standard-required" label="Menssagem" />
            </Grid>
            <Button style={{ margin: '1rem 2rem' }}>envie sua mensagem</Button>
          </Grid>
        </Grid> */}
        <Grid item md={4} xs={12}>
          <Typography>Entre em contato:</Typography>
          <Divider></Divider>
          <Grid container>
            <Grid item sm={12}>
              <IconButton
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5541987291433"
                target="_blank"
              >
                <WhatsApp className={classes.cttButton} />
                <Typography>41 987291433</Typography>
              </IconButton>
            </Grid>
            <Grid item sm={12}>
              {' '}
              <Link href="mailto:lincon3013@gmail.com">
                <IconButton>
                  <Mail className={classes.cttButton} />
                  <Typography>lincon3013@gmail.com</Typography>
                </IconButton>
              </Link>
            </Grid>
            <Divider></Divider>
            <Grid item xs={6}>
              <Link
                href="https://www.linkedin.com/in/lincon-fernandes-bb497613b/"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton>
                  <LinkedIn className={classes.cttButton} />
                  <Typography>Linkedin</Typography>
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link
                href="https://github.com/lincon-fernandes"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton>
                  <GitHub className={classes.cttButton} />
                  <Typography>GitHub</Typography>
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
