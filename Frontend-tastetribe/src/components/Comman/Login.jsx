import React, { useState } from "react";
import Header from "../User_Mangement_IT20658236/HeaderBeforeLogin";
import { useHistory } from "react-router-dom";
import UserManagementService from "../../services/UserManagementService";
import Swal from "sweetalert2";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await UserManagementService.loginUser(userName, password);
      const user = response.data;

      if (response.status === 200) {
        history.push(`/User/${user.userId}`);
        console.log("User ID:", user.userId); // Print user ID to console
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully logged in to the system!",
        });
      } else {
        console.log("Invalid login");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please check your username and password.",
        });
      }
    } catch (error) {
      console.log("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please check your username and password.",
      });
    }
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
                              className="form-control form-control-user custom-input"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                              value={userName}
                              onChange={(event) =>
                                setUserName(event.target.value)
                              }
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
                          <a className="small" href="http://localhost:3000/Add-User">
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
