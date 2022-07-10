import React, { useState } from "react";
// import jwt_decode from "jwt-decode";

const LoginNew = () => {
  const [user, setuser] = useState("");
  const [pwd, setpwd] = useState("");

  const login = async () => {
    // console.log("bef");
    let token = await fetch("http://127.0.0.1:8000/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pwd
      }),
    });
    console.log({user},{pwd})
    console.log("token next");
    let theToken = await token.json();
    console.log(theToken.refresh);
    localStorage.setItem("token", JSON.stringify(theToken));
    localStorage.setItem("tokenr", JSON.stringify(theToken.refresh));
  };

  return (
    <div>
      <h1>login page</h1> <hr />
      <h5>hello new friend! lets login</h5> <hr />
      username:
      <input
        className="input"
        value={user}
        onChange={(e) => setuser(e.target.value)}
      />
      <br />
      Password:
      <h1>{pwd}</h1>
      <input value={pwd} onChange={(e) => setpwd(e.target.value)} />
      <br />
      <hr />
      <button 
      className="btn btn-success" 
      onClick={() => login()}>
        Login
      </button>


      <hr />
      <hr />
      <hr />
      {/* <h1>Login page</h1> */}
      {/* <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default LoginNew;
