import React from "react";
import { Nav, Navbar, Dropdown, Image } from "react-bootstrap";
import { LOGO } from "../../asset";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./LandingPage.css";

class LandingPage extends React.Component {
    render() {
        return (
            <div style={{ marginTop: "-40px", height: "100vh" }}>
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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={styles.navLink}>
                                Welcome to Digital Report System, Please Login
                                to Access Dashboard!
                            </Nav.Link>
                        </Nav>
                        <Dropdown style={styles.dropdown}>
                            <Dropdown.Item
                                as={Link}
                                to="/menu"
                                style={styles.dropdownItem}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#617a97")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = "#0b406b")
                                }
                            >
                                Menu
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/login"
                                style={styles.dropdownItem}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#617a97")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = "#0b406b")
                                }
                            >
                                Login
                            </Dropdown.Item>
                        </Dropdown>
                    </Navbar.Collapse>
                </Navbar>
                <br />
                <br />
                <br />
                <iframe
                    //   src="https://docs.google.com/presentation/d/e/2PACX-1vQaOIvw1ru7bTTdQ7QcR58AU94GdrkKWJlazuZBwqeotq4T0ZGuih70gv5TvRAl7lJYgUBgKj_XA9jU/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="93%"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"

                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTx6wuAxVdN5bDQFlu4BaELTe-ZkIj-xB5kHRaRV5DpTplnoSoQ8xz2wxTIhQKsdCRCQ2ir4FVbYFYC/pubhtml?widget=true&amp;headers=false"
                    width="100%"
                    height="95%"
                    padding="5rem"
                ></iframe>
            </div>
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
    dropdown: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    dropdownItem: {
        backgroundColor: "#0b406b",
        transition: "background-color 0.3s",
        borderRadius: "10px",
        color: "white",
        transition: "background-color 0.3s",
        cursor: "pointer",
        flex: 1,
        textAlign: "center",
        marginRight:"2px",
        marginLeft:"2px"
    },
};
const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer,
    };
};
export default connect(mapStateToProps)(LandingPage);
