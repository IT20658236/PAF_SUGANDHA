import React, { Component } from "react";
import UserManagementService from "../../services/UserManagementService";
import Header from "../User_Mangement_IT20658236/HeaderBeforeLogin";
import Swal from "sweetalert2";

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      role: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      profilePic: "",
      errors: {},
      errorMessage: ""
    };
  }

  validateForm = () => {
    const {
      userName,
      password,
      role,
      firstName,
      lastName,
      email,
      phoneNumber
    } = this.state;
    let errors = {};
    let isValid = true;

    if (userName.trim() === "") {
      errors.userName = "User Name is required";
      isValid = false;
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
      isValid = false;
    }

    if (role.trim() === "") {
      errors.role = "Role is required";
      isValid = false;
    }

    if (firstName.trim() === "") {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (lastName.trim() === "") {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone Number is invalid";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  roleHandler = (event) => {
    this.setState({
      role: event.target.value,
    });
  };

  firstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  lastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  phoneNumberHandler = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  profilePicHandler = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = e.target.result;
      this.setState({ profilePic: base64String });
    };

    reader.readAsDataURL(imageFile);
  };

  removeImage = () => {
    this.setState({ profilePic: "" });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      UserManagementService.createUser(this.state)
        .then((response) => {
          console.log(response);
          this.props.history.push("/Login");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "User Added Successfully",
          });
        })
        .catch((error) => {
          if (error.response && error.response.status === 500) {
            this.setState({
              errorMessage:
                "Failed to create user. Please try again later with different User Name.",
            });
          } else {
            this.setState({
              errorMessage: "An error occurred. Please try again.",
            });
          }
        });
    }
  };

  render() {
    const { profilePic, errors, errorMessage } = this.state;

    return (
      <div>
        <div id="header">
          <Header />
        </div>

        <div id="addUserbody">
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Add User</h3>
                <div className="card-body">
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}
                  <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label>User Name</label>
                      <input
                        placeholder="User Name"
                        name="userName"
                        className={`form-control ${
                          errors.userName ? "is-invalid" : ""
                        }`}
                        value={this.state.userName}
                        onChange={this.userNameHandler}
                      />
                      {errors.userName && (
                        <div className="invalid-feedback">
                          {errors.userName}
                        </div>
                      )}

                      <label>Password</label>
                      <input
                        placeholder="Password"
                        name="password"
                        className={`form-control ${
                          errors.password && "is-invalid"
                        }`}
                        value={this.state.password}
                        onChange={this.passwordHandler}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                      <label>Role</label>
                      <select
                        name="role"
                        className={`form-control ${errors.role && "is-invalid"
                          }`}
                        value={this.state.role}
                        onChange={this.roleHandler}
                      >
                        <option value="">Select Role</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                      </select>
                      {errors.role && (
                        <div className="invalid-feedback">{errors.role}</div>
                      )}
                      <label>First Name</label>
                      <input
                        placeholder="First Name"
                        name="firstName"
                        className={`form-control ${
                          errors.firstName && "is-invalid"
                        }`}
                        value={this.state.firstName}
                        onChange={this.firstNameHandler}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                      <label>Last Name</label>
                      <input
                        placeholder="Last Name"
                        name="lastName"
                        className={`form-control ${
                          errors.lastName && "is-invalid"
                        }`}
                        value={this.state.lastName}
                        onChange={this.lastNameHandler}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                      <label>Email</label>
                      <input
                        placeholder="Email"
                        name="email"
                        className={`form-control ${errors.email && "is-invalid"}`}
                        value={this.state.email}
                        onChange={this.emailHandler}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                      <label>Phone Number</label>
                      <input
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className={`form-control ${
                          errors.phoneNumber && "is-invalid"
                        }`}
                        value={this.state.phoneNumber}
                        onChange={this.phoneNumberHandler}
                      />
                      {errors.phoneNumber && (
                        <div className="invalid-feedback">
                          {errors.phoneNumber}
                        </div>
                      )}
                      <div className="form-group">
                        <label>Profile Picture</label>
                        {profilePic && (
                          <div className="preview-image-container">
                            <img
                              src={profilePic}
                              className="preview-image"
                              alt="Preview"
                            />
                          </div>
                        )}
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              name="profilePic"
                              className="custom-file-input"
                              onChange={this.profilePicHandler}
                            />
                            <label className="custom-file-label">
                              Choose file
                            </label>
                          </div>
                          {profilePic && (
                            <div className="input-group-append">
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={this.removeImage}
                              >
                                Remove
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-success" onClick={this.showAlert}>
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
