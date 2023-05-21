import React, { useState } from "react";
import Header from "../User_Mangement_IT20658236/HeaderBeforeLogin";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    // add your logic here to authenticate the user and redirect to the dashboard
    // for example, you can use the following code to redirect to the dashboard:
    history.push("/dashboard");
  };

  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="addUserbody">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Welcome Back!
                          </h1>
                        </div>
                        <form onSubmit={handleSubmit} className="user">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user custom-input"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user custom-input"
                              id="exampleInputPassword"
                              placeholder="Password"
                              value={password}
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                          <hr />
                          <a
                            href="#"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw"></i> Login with
                            Google
                          </a>
                          <a
                            href="#"
                            className="btn btn-facebook btn-user btn-block"
                          >
                            <i className="fab fa-facebook-f fa-fw"></i> Login
                            with Facebook
                          </a>
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="#">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="#">
                            Create an Account!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;