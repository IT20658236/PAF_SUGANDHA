import React, { Component } from 'react';
import UserManagementService from '../../services/UserManagementService';
import Header from '../User_Mangement_IT20658236/Header';
import Post from './../User_Mangement_IT20658236/Post';
//import './FindFriends.css'; // Import CSS file for styling

class FindFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        UserManagementService.getAllUsers()
            .then((response) => {
                this.setState({ users: response.data });
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    render() {
        const { users } = this.state;

        return (
            <div>
                <div id='header'>
                    <Header />
                </div>
                <div id='findFriend1'>
                    <h1>Find Friends</h1>
                    <p>Find your friends and connect with them</p>
                </div>


                    <div id="friendContainer1">
                        {users.map((user) => (
                            <div className="card1" key={user.id}>
                                <div id="friendContainerCrdImg1">
                                <img src={user.profilePic} alt="Profile" className="profile-pic" />
                                </div>
                                <div id="friendContainerCrdDetails1">
                                <div className="card-details1">
                                    <h2>{user.userName}</h2>
                                    <p>{user.firstName} {user.lastName}</p>
                                    <p>{user.phoneNumber}</p>
                                    <p>{user.email}</p>
                                </div>
                                <button className="btn btn-primary">Add Friend</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

        );
    }
}

export default FindFriends;
