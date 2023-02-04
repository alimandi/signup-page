import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    axios.post("http://localhost:8000/signup", {
        username: username,
        email: email,
        password: password,
      })  
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.message)
      });
  };
  return (
    <div className="App">
      <h1>sign up</h1>
      <h3>{error}</h3>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          required
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p>Email</p>
        <input
          required
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>Password</p>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
