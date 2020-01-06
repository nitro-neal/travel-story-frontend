import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBAnimation
} from "mdbreact";

import Layout from "../components/MyLayout";
import { register } from "../globals";

class Register extends Component {
  state = { registerClicked: false };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  register = async () => {
    let res = await register(
      this.state.userName,
      this.state.email,
      this.state.password
    );
    this.setState({ data: res.data });
    this.setState({ clickedLogin: true });
    console.log(res.data);
  };

  onSubmit = e => {
    e.preventDefault();
    this.register();
  };
  render() {
    return (
      <Layout>
        <MDBContainer>
          <MDBAnimation type="bounceIn">
            <MDBRow>
              <MDBCol>
                <MDBCard>
                  <MDBCardBody>
                    {this.state.registerClicked === false ? (
                      <form onSubmit={this.onSubmit}>
                        <p className="h4 text-center py-4">Sign up</p>
                        <div className="grey-text">
                          <MDBInput
                            name="userName"
                            label="Username"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            onChange={this.onChange}
                          />
                          <MDBInput
                            name="email"
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            onChange={this.onChange}
                          />

                          <MDBInput
                            name="password"
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" type="submit">
                            Register
                          </MDBBtn>
                        </div>
                      </form>
                    ) : (
                      <div>
                        <h1>Welcome {this.state.data.user.username}</h1>
                        <Link href="/">
                          <a>Go Explore...</a>
                        </Link>
                      </div>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBAnimation>
        </MDBContainer>
      </Layout>
    );
  }
}

export default Register;
