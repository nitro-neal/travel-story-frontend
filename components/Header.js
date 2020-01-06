// import React from "react";
import Link from "next/link";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";

// const linkStyle = {
//   marginRight: 15
// };

// const Header = () => (
//   <div>
// <Link href="/">
//   <a style={linkStyle}>Home</a>
// </Link>
//     <Link href="/about">
//       <a style={linkStyle}>About</a>
//     </Link>
//   </div>
// );

// export default Header;
class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
          <a href="/">
            <strong className="white-text">Travel Story</strong>
          </a>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left></MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </MDBDropdownItem>

                  <MDBDropdownItem>
                    <Link href="/logout">
                      <a>Logout</a>
                    </Link>
                  </MDBDropdownItem>

                  <MDBDropdownItem>
                    <Link href="/register">
                      <a>Register</a>
                    </Link>
                  </MDBDropdownItem>

                  <MDBDropdownItem>
                    <Link href="/myprofile">
                      <a>Profile</a>
                    </Link>
                  </MDBDropdownItem>

                  {/* <MDBDropdownItem href="/signup">Sign Up</MDBDropdownItem> */}
                  {/* <MDBDropdownItem href="/profile">My Profile</MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Header;
