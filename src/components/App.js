import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "./Header";
import Profile from "./Profile";
import Users from "./Users";
import Main from "./Main";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
