import React from "react";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import Users from "./Users";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    background: "url(../img/italy.jpeg) center center/cover no-repeat",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Изучай язык вместе с BigBang
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Общайся с носителями языка и заводи друзей из других стран
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link to={`/users`} className={classes.link}>
                      Найти собеседника
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Users />
      </main>
      <Footer />
    </React.Fragment>
  );
}
