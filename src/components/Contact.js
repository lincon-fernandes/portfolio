import React from 'react';
import {
  Link,
  Container,
  Grid,
  Button,
  Divider,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core';

import { LinkedIn, GitHub, WhatsApp, Mail } from '@material-ui/icons';

const Contact = () => {
  return (
    <Container style={{ marginTop: '3rem' }}>
      <Grid container>
        <Grid item md={8} xs={12}>
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
            <Button style={{ margin: '1rem 2rem' }}>envie sua menssagem</Button>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            dolores cupiditate vitae.
          </Typography>
          <Divider></Divider>
          <Grid container>
            <Grid item sm={12}>
              <IconButton>
                <WhatsApp />
                <Typography>41 987291433</Typography>
              </IconButton>
            </Grid>
            <Grid item sm={12}>
              <IconButton>
                <Mail />
                <Typography>lincon3013@gmail.com</Typography>
              </IconButton>
            </Grid>
            <Divider></Divider>
            <Grid item xs={6}>
              <Link
                href="https://www.linkedin.com/in/lincon-fernandes-bb497613b/"
                rel="noreferrer"
                target="_blank"
              >
                <IconButton>
                  <LinkedIn />
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
                  <GitHub />
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
