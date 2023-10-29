import React from "react";
import { Navbar, Nav, Dropdown, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LOGO } from "../asset";

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar
                variant="dark"
                fixed="top"
                className="px-5"
                style={styles.navbar}
                expand="lg"
            >
                <Navbar.Brand href="#home">
                    <Image style={styles.image} src={LOGO} />
                </Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Dropdown.Item
                            style={styles.link}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#d28429")
                                    (e.target.style.color = "white")

                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.0)")
                                    (e.target.style.color = "#133a6b")

                                }
                                as={Link}
                                to="/userareas"
                            >
                                Upload Pdf
                            </Dropdown.Item>
                            <Dropdown.Item
                             style={styles.link}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#d28429")
                                    (e.target.style.color = "white")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.0)")
                                    (e.target.style.color = "#133a6b")

                                }
                                as={Link}
                                to="/userareasb"
                            >
                                List Pdf
                            </Dropdown.Item>
                        </Nav>
                        <Dropdown>
                            <Dropdown.Item
                                as={Link}
                                to="/"
                                style={styles.dropdownItem}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#617a97")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = "#0b406b")
                                }
                            >
                                Home
                            </Dropdown.Item>
                            {/* <Dropdown.Menu>
                                {this.props.username
                                    ?
                                    <Dropdown.Item onClick={this.props.logout}>Logout</Dropdown.Item>
                                    :
                                    <>
                                        <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
                                    </>
                                }
                            </Dropdown.Menu> */}
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

const styles = {
    navbar: {
        backgroundColor: "#e8e8e8",
    },
    image: {
        height: "40px",
    },
    navLink: {
        paddingTop: "20px",
        color: "darkGrey",
        paddingLeft: "100px",
    },
    dropdownItem: {
        backgroundColor: "#0b406b",
        transition: "background-color 0.3s",
        borderRadius: "10px",
        color: "white",
        transition: "background-color 0.3s",
        cursor: "pointer",
    },
    link:{
        marginRight:"6px",
        marginLeft:"6px",
        backgroundColor: "rgba(255, 0, 0, 0.0)",
        cursor: "pointer",
        color: "#133a6b",
        borderRadius: "10px",
    }
};

export default NavMenu;
