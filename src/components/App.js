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
  const profile = useSelector((state) => state.profile.profile);

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
        <Route exact path="/users">
          <Users />
        </Route>
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
