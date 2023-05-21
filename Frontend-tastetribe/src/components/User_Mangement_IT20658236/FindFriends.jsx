import React, { Component } from 'react';
import UserManagementService from '../../services/UserManagementService';
import Header from '../User_Mangement_IT20658236/Header';
import Post from './../User_Mangement_IT20658236/Post';

class FindFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchQuery: '',
      filteredUsers: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    UserManagementService.getAllUsers()
      .then((response) => {
        this.setState({ users: response.data, filteredUsers: response.data });
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  handleSearch = (event) => {
    const searchQuery = event.target.value;
    const { users } = this.state;
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return (
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phoneNumber.includes(searchQuery) ||
        user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fullName.includes(searchQuery.toLowerCase())
      );
    });
    this.setState({ searchQuery, filteredUsers });
  };

  render() {
    const { filteredUsers } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div id='header'>
          <Header />
        </div>
        <div id='findFriend1'>
          <h1>Find Friends</h1>
          <p>Find your friends and connect with them</p>
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <input
            type='text'
            className='form-control'
            placeholder='Search users...'
            value={this.state.searchQuery}
            onChange={this.handleSearch}
          />
        </div>
        <div id='friendContainer1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {filteredUsers.map((user) => (
            <div className='card1' key={user.id}>
              <div id='friendContainerCrdImg1'>
                <img src={user.profilePic} alt='Profile' className='profile-pic' />
              </div>
              <div id='friendContainerCrdDetails1'>
                <div className='card-details1'>
                  <h2>{user.userName}</h2>
                  <p>
                    {user.firstName} {user.lastName}
                  </p>
                  <p>{user.phoneNumber}</p>
                  <p>{user.email}</p>
                </div>
                <button className='btn btn-primary'>Add Friend</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FindFriends;
