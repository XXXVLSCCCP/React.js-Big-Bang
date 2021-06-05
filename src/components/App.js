import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "./Header";
import Profile from "./Profile";
import Users from "./Users";
import Main from "./Main";
import UserProfile from "./UserProfile";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const [token, setToken] = useState();
  const profile = useSelector((state) => state.root.profile);

  /*   function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          authed === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/signin", state: { from: props.location } }}
            />
          )
        }
      />
    );
  } */

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn setToken={setToken} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/*         <PrivateRoute authed={profile} path="/profile" component={Profile} />  */}
        <Route exact path="/users">
          <Users />
        </Route>
        {/*         <PrivateRoute authed={profile} exact path="/users" component={Users} />
        <PrivateRoute
          authed={profile}
          exact
          path="/users/:usersId"
          component={UserProfile}
        /> */}
        <Route exact path="/users/:usersId">
          <UserProfile />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
