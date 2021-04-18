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
                                    <Link exact="true" to="/" className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link exact="true" to="/menu" className="nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link exact="true" to="/about" className="nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link exact="true" to="/contact" className="nav-link">Contact</Link>
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