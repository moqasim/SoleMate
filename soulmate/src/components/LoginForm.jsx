import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  return (
    <div className="entireForm">
      <h1 className="solemateLogin">solemate</h1>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2 className="form-group"> login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(event) =>
                setDetails({ ...details, name: event.target.value })
              }
              value={details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(event) =>
                setDetails({ ...details, email: event.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) =>
                setDetails({ ...details, password: event.target.value })
              }
              value={details.password}
            />
          </div>
          <Link className="home" to="/home">
            <input className="form-submit" type="submit" value="LOGIN" />{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
