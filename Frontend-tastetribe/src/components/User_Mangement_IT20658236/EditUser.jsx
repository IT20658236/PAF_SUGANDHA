import React, { Component } from "react";
import UserManagementService from "../../services/UserManagementService";
import Header from "../User_Mangement_IT20658236/Header";

export default class EditUser extends Component {
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

  componentDidMount() {
    UserManagementService.getUserById(this.props.match.params.id).then(
      (res) => {
        const {
          userName,
          password,
          role,
          firstName,
          lastName,
          email,
          phoneNumber,
          profilePic,
        } = res.data;
        this.setState({
          userName,
          password,
          role,
          firstName,
          lastName,
          email,
          phoneNumber,
          profilePic,
        });
      }
    );
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

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      userName: this.state.userName,
      password: this.state.password,
      role: this.state.role,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      profilePic: this.state.profilePic,
    };

    UserManagementService.updateUser(user, this.props.match.params.id).then(
      (res) => {
        this.props.history.push(`/User/${this.props.match.params.id}`);
        alert("User Updated Successfully");
      }
    );
  };

  render() {
    return (
      <div>
        <div id="header">
          <Header />
        </div>
        <div id="addUserbody">
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Update User</h3>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label>User Name</label>
                      <input
                        placeholder="User Name"
                        name="userName"
                        className="form-control"
                        value={this.state.userName}
                        onChange={this.userNameHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        placeholder="Password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.passwordHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Role</label>
                      <input
                        placeholder="Role"
                        name="role"
                        className="form-control"
                        value={this.state.role}
                        onChange={this.roleHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        placeholder="First Name"
                        name="firstName"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.firstNameHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        placeholder="Last Name"
                        name="lastName"
                        className="form-control"
                        value={this.state.lastName}
                        onChange={this.lastNameHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.emailHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className="form-control"
                        value={this.state.phoneNumber}
                        onChange={this.phoneNumberHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Profile Picture</label>
                      {this.state.profilePic && (
                        <div className="preview-image-container">
                          <img
                            src={this.state.profilePic}
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
                        {this.state.profilePic && (
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
                    <button className="btn btn-success" type="submit">
                      Update
                    </button>
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
