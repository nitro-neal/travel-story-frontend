import React, { Component } from "react";
import Layout from "../components/MyLayout";

import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText
} from "mdbreact";

import { getProfile } from "../globals";

class MyProfile extends Component {
  state = { username: "", profilePhoto: "", bio: "", trips: [], photos: [] };

  getUserInfo = async () => {
    let payload = await getProfile();
    console.log("GOT USER DATA");
    console.log(payload);
    this.setState({ username: payload.data.user.username });
    this.setState({ email: payload.data.user.email });
  };

  componentDidMount() {
    this.getUserInfo();
  }
  render() {
    return (
      <Layout>
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <MDBCardBody>
                  <MDBCardTitle className="h2">Profile</MDBCardTitle>
                  <p className="blue-text my-4 font-weight-bold">
                    Here is your profile
                  </p>
                  <MDBCardText>
                    <h3>Username: {this.state.username}</h3>
                    <h3>bio: {this.state.bio}</h3>
                    <h3>trips: {this.state.trips}</h3>
                    <h3>photos: {this.state.photos}</h3>
                  </MDBCardText>
                  <hr className="my-4" />
                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    );
  }
}

export default MyProfile;
