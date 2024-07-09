import { useState } from "react";
import { REALESTATE_backend } from "declarations/REALESTATE_backend";
import LoginForm from "./assets/LoginSignup/LoginForm";

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    REALESTATE_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <div>
      <div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="container">
            <div className="header">
              <div className="text"> Sign Up</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <img src="/src/assets/user icon.jpeg" alt="" />
                <input type="text" placeholder="Username"></input>
              </div>

              <div className="input">
                <img src="/src/assets/email icon.jpeg" alt="" />
                <input type="email" placeholder="Email"></input>
              </div>

              <div className="input">
                <img src="/src/assets/password icon.png" alt="" />
                <input type="password" placeholder="Password"></input>
              </div>
            </div>

            <div className="forgot-password">
              Forgot password? <span>click here</span>
              <div className="submit-container">
                <div className="submit">Sign up</div>
                <div className="submit">Login</div>
              </div>
            </div>
          </div>
        </form>
        <section id="greeting">{greeting}</section>
      </div>
      <LoginForm />
    </div>
  );
}

export default App;
