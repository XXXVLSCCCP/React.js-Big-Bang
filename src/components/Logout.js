import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/profile/profileSlice";
import { Redirect } from "react-router-dom";

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
}));

const theme = createMuiTheme({
  backgroundColor: "#3f51b5",
});

const Logout = () => {
  const classes = useStyles();

  /*   const { profile } = useSelector((state) => state.profile.profile); */

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={(e) => handleLogout(e)}
        >
          <Redirect to="/signin" />
          Log out
        </Button>
      </ThemeProvider>
    </>
  );
};

export default Logout;
