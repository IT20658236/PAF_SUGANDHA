import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>

                <div id='PostBody'>
                <h1>Post Title</h1>
                <p>Post content goes here</p>
                <img id='imagePost' src={require("../../../src/components/User_Mangement_IT20658236/SamplePostImages/1.png")} />     

                <h1>Post Title</h1>
                <p>Post content goes here</p>
                <img id='imagePost'  src={require("../../../src/components/User_Mangement_IT20658236/SamplePostImages/2.png")} />     

                <h1>Post Title</h1>
                <p>Post content goes here</p>
                <img id='imagePost' src={require("../../../src/components/User_Mangement_IT20658236/SamplePostImages/3.png")} />     

                <h1>Post Title</h1>
                <p>Post content goes here</p>
                <img id='imagePost'  src={require("../../../src/components/User_Mangement_IT20658236/SamplePostImages/4.png")} />     

                <h1>Post Title</h1>
                <p>Post content goes here</p>
                <img id='imagePost' src={require("../../../src/components/User_Mangement_IT20658236/SamplePostImages/5.png")} />     
                </div>
            </div>
        );
    }
}

export default Post;
