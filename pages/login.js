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
import { login } from "../globals";

class Login extends React.Component {
  state = { email: "", password: "", clickedLogin: false, data: "" };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  login = async () => {
    let res = await login(this.state.email, this.state.password);
    this.setState({ data: res.data });
    this.setState({ clickedLogin: true });
    console.log(res.data);
  };

  onSubmit = e => {
    e.preventDefault();
    this.login();
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
                    {this.state.clickedLogin === false ? (
                      <form onSubmit={this.onSubmit}>
                        <p className="h4 text-center py-4">Log in</p>
                        <div className="grey-text">
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
                            Login
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

export default Login;
