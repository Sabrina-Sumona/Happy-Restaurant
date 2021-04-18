import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
            // isNavOpen: true
        }
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color='dark' expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">
                            Happy Restaurant
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active" exact>Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link" exact>Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link" exact>About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link" exact>Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div >
        );
    }
}

export default Navigation;