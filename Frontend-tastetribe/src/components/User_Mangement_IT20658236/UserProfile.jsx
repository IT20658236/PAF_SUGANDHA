import React, { Component } from 'react';
import UserManagementService from '../../services/UserManagementService';
import Header from '../User_Mangement_IT20658236/Header';
import Post from './../User_Mangement_IT20658236/Post';

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
        UserManagementService.deleteUser(this.props.match.params.id).then(() => {
            alert('User deleted successfully');
            this.props.history.push('/Add-User');
        });
    };

    render() {
        return (
            <div>
                <div id='header'>
                    <Header />
                </div>

                <div id='left'>
                    <div className="profile-container">
                        <div className="profile-header">
                            <img src={this.state.user.profilePic} alt="Profile" className="profile-pic" />
                            <h1>
                                {this.state.user.firstName} {this.state.user.lastName}
                            </h1>
                            <h2>{this.state.user.email}</h2>
                        </div>
                        <div className="profile-details">
                            <div className="detail-item">
                                <h3>Username</h3>
                                <p>{this.state.user.userName}</p>
                            </div>
                            <div className="detail-item">
                                <h3>Role</h3>
                                <p>{this.state.user.role}</p>
                            </div>
                            <div className="detail-item">
                                <h3>Phone</h3>
                                <p>{this.state.user.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="button-container">
                            <button onClick={this.handleEdit}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
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
