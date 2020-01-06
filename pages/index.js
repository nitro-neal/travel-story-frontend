import React, { Component } from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBBtn
} from "mdbreact";
import Layout from "../components/MyLayout";

class Index extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout>
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                  <MDBCardBody>
                    <MDBCardTitle className="h2">Travel Story</MDBCardTitle>
                    <p className="blue-text my-4 font-weight-bold">
                      Find travel stories and create memories
                    </p>
                    <MDBCardText>
                      Never stop the travel. Share your experiences with other
                      travelers and learn new tips along the way.
                    </MDBCardText>
                    <hr className="my-4" />
                    <div className="pt-2">
                      <MDBBtn color="primary" className="waves-effect">
                        Try now <MDBIcon far icon="gem" />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Layout>
      </div>
    );
  }
}

export default Index;
