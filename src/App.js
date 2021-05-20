/* import { useState } from "react"; */
import "./App.css";
import SignUp from "./SignUp";

const App = () => {
  /*  const [logInData, setLogInData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(logInData);
  };
 */
  return (
    <div className="App">
      {/*    <form onSubmit={handleSubmit}>
        <label>
          Enter your nickname
          <input
            value={logInData.nickname}
            onChange={(e) =>
              setLogInData({ ...logInData, nickname: e.target.value })
            }
          />
        </label>
        <label>
          Enter your email
          <input
            type="email"
            value={logInData.email}
            onChange={(e) =>
              setLogInData({ ...logInData, email: e.target.value })
            }
          />
        </label>
        <label>
          Enter your password
          <input
            type="password"
            value={logInData.password}
            onChange={(e) =>
              setLogInData({ ...logInData, password: e.target.value })
            }
          />
        </label>
        <button>Submit</button>
      </form> */}
      <SignUp />
    </div>
  );
};

export default App;
