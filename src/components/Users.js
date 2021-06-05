import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { API } from "../utils/constants";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Users() {
  const classes = useStyles();
  /*   const dispatch = useDispatch();
   */
  const [users, setUsers] = useState([]);

  /*   const users = useSelector((state) => state.users);
  console.log(users);

  const requestUsers = () => {
    dispatch(getUsers());
  };*/

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((receivedUsers) => setUsers(receivedUsers));
  };

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {users.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.avatar_url}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.login}
                  </Typography>
                  <Typography>{card.html_url}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link
                      to={{
                        pathname: `/users/:id${card.id}`,
                        userName: `${card.id}`,
                      }}
                      className={classes.link}
                    >
                      More
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
