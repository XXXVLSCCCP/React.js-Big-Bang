import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const theme = createMuiTheme({
  backgroundColor: "#3f51b5",
});

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Logout />
        <Button variant="contained" color="primary" className={classes.margin}>
          <Link to={`/users`} className={classes.link}>
            Найти собеседника
          </Link>
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Profile;
