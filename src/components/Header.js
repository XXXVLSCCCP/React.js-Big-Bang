import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LanguageTwoToneIcon from "@material-ui/icons/LanguageTwoTone";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  text: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginLeft: "0.5rem",
  },
}));

export default function MenuAppBar() {
  const profile = useSelector((state) => state.profile.profile);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={`/`} className={classes.link}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <LanguageTwoToneIcon style={{ fontSize: "2rem" }} />
              <span className={classes.text}>BigBang</span>
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            <Link to={`/users`} className={classes.link}>
              Найти собеседника
            </Link>
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {!profile ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to={`/signup`} className={classes.link}>
                  <MenuItem onClick={handleClose}>Sign up</MenuItem>
                </Link>
                <Link to={`/signin`} className={classes.link}>
                  <MenuItem onClick={handleClose}>Sign in</MenuItem>
                </Link>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to={`/profile`} className={classes.link}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to={`/signin`} className={classes.link}>
                  <MenuItem onClick={handleClose}>Log out</MenuItem>
                </Link>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
