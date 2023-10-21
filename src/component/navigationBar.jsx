import React from 'react'
import {
    Nav,
    Navbar,
    Dropdown,
    Button,
    Image,
    Badge
} from 'react-bootstrap'
import { LOGO } from '../asset'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../redux/action/userAction'

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar variant='dark' fixed='top' className='px-5' style={styles.navbar} expand="lg">
                <Navbar.Brand href="#home">
                    <Image style={styles.image} src={LOGO} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        {/* <Nav.Link style={styles.navLink} as={Link} to='/' >Home</Nav.Link>
                        {/* <Nav.Link style={styles.navLink} href='/#footer'>Product</Nav.Link> */}
                        <Nav.Link style={styles.navLink} >Digital Report System</Nav.Link>
                        {/* <div>Digital Report System</div> */}
                        {/* <Nav.Link className="mx-auto" href='/#footer'>Digital Report System</Nav.Link> */}
                    </Nav>
                    <Dropdown >
                        <Dropdown.Toggle  variant='dark' id="dropdown-basic" style={{ backgroundColor: '#e8e8e8', border: 'none', color: 'black' }}>
                            Welcome {this.props.username ? this.props.username : "Username"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {this.props.username ?
                                <>
                                    {/* <Dropdown.Item as={Link} to={this.props.role === 'admin' ? '/historyadmin' : '/history'}>History</Dropdown.Item> */}
                                    <Dropdown.Item onClick={this.props.logOut}>Logout</Dropdown.Item>
                                </>
                                :
                                <>
                                    <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item>
                                </>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const styles = {
    navbar: {
        backgroundColor: '#e8e8e8',
    },
    image: {
        height: '40px'
    },
    navLink: {
        color: 'white',
        justifyContent:'center'
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username,
        cart: state.userReducer.cart,
        role: state.userReducer.role
    }
}


export default connect(mapStateToProps, { logOut })(NavigationBar)