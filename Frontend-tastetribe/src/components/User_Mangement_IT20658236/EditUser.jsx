import React, { Component } from "react";
import UserManagementService from "../../services/UserManagementService";
import Header from "../User_Mangement_IT20658236/Header";
import Swal from "sweetalert2";

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
      errors: {} // Added errors object to track validation errors
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
    if (this.validateForm()) {
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

      UserManagementService.updateUser(user, this.props.match.params.id)
        .then((res) => {
          this.props.history.push(`/User/${this.props.match.params.id}`);
          Swal.fire("Success", "User updated successfully.", "success");
        })
        .catch((error) => {
          Swal.fire("Error", "An error occurred while updating the user.", "error");
        });
    }
  };

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
    let isValid = true;
    const errors = {};

    if (userName.trim() === "") {
      errors.userName = "User Name is required.";
      isValid = false;
    }

    if (password.trim() === "") {
      errors.password = "Password is required.";
      isValid = false;
    }

    if (role.trim() === "") {
      errors.role = "Role is required.";
      isValid = false;
    }

    if (firstName.trim() === "") {
      errors.firstName = "First Name is required.";
      isValid = false;
    }

    if (lastName.trim() === "") {
      errors.lastName = "Last Name is required.";
      isValid = false;
    }

    if (email.trim() === "") {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!this.validateEmail(email)) {
      errors.email = "Invalid email format.";
      isValid = false;
    }

    if (phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone Number is required.";
      isValid = false;
    } else if (!this.validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number format.";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  validateEmail = (email) => {
    // Email validation logic (you can replace it with your own email validation logic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePhoneNumber = (phoneNumber) => {
    // Phone number validation logic (you can replace it with your own phone number validation logic)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  render() {
    const { errors } = this.state;

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
                        className={errors.userName ? "form-control is-invalid" : "form-control"}
                        value={this.state.userName}
                        onChange={this.userNameHandler}
                        readOnly // Prevents editing the UserID field
                      />
                      {errors.userName && (
                        <div className="invalid-feedback">
                          {errors.userName}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        placeholder="Password"
                        name="password"
                        className={errors.password ? "form-control is-invalid" : "form-control"}
                        value={this.state.password}
                        onChange={this.passwordHandler}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Role</label>
                      <input
                        placeholder="Role"
                        name="role"
                        className={errors.role ? "form-control is-invalid" : "form-control"}
                        value={this.state.role}
                        onChange={this.roleHandler}
                        readOnly
                      />
                      {errors.role && (
                        <div className="invalid-feedback">
                          {errors.role}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        placeholder="First Name"
                        name="firstName"
                        className={errors.firstName ? "form-control is-invalid" : "form-control"}
                        value={this.state.firstName}
                        onChange={this.firstNameHandler}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        placeholder="Last Name"
                        name="lastName"
                        className={errors.lastName ? "form-control is-invalid" : "form-control"}
                        value={this.state.lastName}
                        onChange={this.lastNameHandler}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        placeholder="Email"
                        name="email"
                        className={errors.email ? "form-control is-invalid" : "form-control"}
                        value={this.state.email}
                        onChange={this.emailHandler}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className={errors.phoneNumber ? "form-control is-invalid" : "form-control"}
                        value={this.state.phoneNumber}
                        onChange={this.phoneNumberHandler}
                      />
                      {errors.phoneNumber && (
                        <div className="invalid-feedback">
                          {errors.phoneNumber}
                        </div>
                      )}
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
