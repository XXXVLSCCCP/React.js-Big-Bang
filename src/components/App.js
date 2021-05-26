import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "./Header";
import Profile from "./Profile";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div>
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
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
/*     <div className="App">
      <SignUp />
    </div> */
function Home() {
  return (
    <>
      <h2>Home</h2>
      <button>
        <Link to={`/users`}>Найти собеседника</Link>
      </button>
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
