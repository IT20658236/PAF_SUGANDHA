import React, { Component } from "react";
import UserManagementService from "../../services/UserManagementService";
import Header from "../User_Mangement_IT20658236/HeaderBeforeLogin";

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
    };
  }

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
    console.log(this.state);
    UserManagementService.createUser(this.state).then((response) => {
      console.log(response);
      //need to modify
      this.props.history.push("/User/:id");
      alert("User Added Successfully");
    });
  };

  render() {
    const { profilePic } = this.state;

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
                  <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label>User Name</label>
                      <input
                        placeholder="User Name"
                        name="userName"
                        className="form-control"
                        value={this.state.userName}
                        onChange={this.userNameHandler}
                      />
                      <label>Password</label>
                      <input
                        placeholder="Password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.passwordHandler}
                      />
                      <label>Role</label>
                      <input
                        placeholder="Role"
                        name="role"
                        className="form-control"
                        value={this.state.role}
                        onChange={this.roleHandler}
                      />
                      <label>First Name</label>
                      <input
                        placeholder="First Name"
                        name="firstName"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.firstNameHandler}
                      />
                      <label>Last Name</label>
                      <input
                        placeholder="Last Name"
                        name="lastName"
                        className="form-control"
                        value={this.state.lastName}
                        onChange={this.lastNameHandler}
                      />
                      <label>Email</label>
                      <input
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.emailHandler}
                      />
                      <label>Phone Number</label>
                      <input
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className="form-control"
                        value={this.state.phoneNumber}
                        onChange={this.phoneNumberHandler}
                      />
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
                      <button type="submit" className="btn btn-success">
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
