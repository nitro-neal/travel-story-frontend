import Layout from "../components/MyLayout";
import Link from "next/link";
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
import axios from "axios";
import { logout } from "../globals";

class Logout extends React.Component {
  state = { clickedLogout: false };

  onClickLogout = e => {
    e.preventDefault();
    logout();
    this.setState({ clickedLogout: true });
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
                    {this.state.clickedLogout === false ? (
                      <div className="text-center py-4 mt-3">
                        <h1>Click logout to logout</h1>
                        <MDBBtn onClick={this.onClickLogout} color="cyan">
                          Logout
                        </MDBBtn>
                      </div>
                    ) : (
                      <div className="text-center py-4 mt-3">
                        <h1>Thank you</h1>
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

export default Logout;
