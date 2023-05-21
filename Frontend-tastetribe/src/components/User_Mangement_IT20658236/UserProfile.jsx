import React, { Component } from 'react';
import UserManagementService from '../../services/UserManagementService';
import Header from '../User_Mangement_IT20658236/Header';
import Post from './../User_Mangement_IT20658236/Post';
import swal from 'sweetalert';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    UserManagementService.getUserById(this.props.match.params.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  handleEdit = () => {
    this.props.history.push(`/Edit-User/${this.props.match.params.id}`);
  };

  handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: "Your account cannot be restored!",
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        UserManagementService.deleteUser(this.props.match.params.id).then(() => {
          swal('User deleted successfully', {
            icon: 'success',
          });
          this.props.history.push('/Add-User');
        });
      }
    });
  };

  render() {
  const { user } = this.state;

  return (
    <div>
      <div id='header'>
        <Header />
      </div>

      <div id='left'>
        <div className="profile-container">
          <div className="profile-header">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <h2>{user.email}</h2>
          </div>
          <div className="profile-details">
            <div className="detail-item">
              <h3>Username</h3>
              <p>{user.userName}</p>
            </div>
            <div className="detail-item">
              <h3>Role</h3>
              <p>{user.role}</p>
            </div>
            <div className="detail-item">
              <h3>Phone</h3>
              <p>{user.phoneNumber}</p>
            </div>
          </div>
          <div className="button-container">
            <button class="btn btn-primary" onClick={this.handleEdit}>Edit</button>
            <button class="btn btn-warning" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>

      <div id='right'>
        <Post />
      </div>
    </div>
  );
}
}

export default UserProfile;
