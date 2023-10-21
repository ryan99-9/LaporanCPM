import React from 'react'
import {
    Nav,
    Navbar,
    Dropdown,
    Image,
} from 'react-bootstrap'
import { LOGO } from '../../asset'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './LandingPage.css'

class LandingPage extends React.Component {
   
    render() {
        return (
            <div  style={{ height: '100vh',marginTop:'-40px' }} >
                <Navbar variant='dark' fixed='top' className='px-5' style={styles.navbar} expand="lg">
                <Navbar.Brand href="#home">
                    <Image style={styles.image} src={LOGO} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        {/* <Nav.Link style={styles.navLink} as={Link} to='/' >Home</Nav.Link>
                        {/* <Nav.Link style={styles.navLink} href='/#footer'>Product</Nav.Link> */}
                        <Nav.Link style={styles.navLink} >Welcome to Digital Report System, Please Login to Access Dashboard!</Nav.Link>
                        {/* <div>Digital Report System</div> */}
                        {/* <Nav.Link className="mx-auto" href='/#footer'>Digital Report System</Nav.Link> */}
                    </Nav>
                    <Dropdown >
                    {/* <Dropdown.Toggle as={Link} to='/login'  variant='dark' id="dropdown-basic" style={{ backgroundColor: '#e8e8e8', border: 'none', color: 'black' }}>
                            Login
                        </Dropdown.Toggle> */}
                    <Dropdown.Item as={Link} to='/login' 
                        style={styles.dropdownItem}
                        
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#617a97')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#0b406b')}
                    >
                   Login
                    </Dropdown.Item>

                       
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
                {/* <div className='second_layer'> */}
                
                <br/>
                <br/>
                <br/>
      <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTx6wuAxVdN5bDQFlu4BaELTe-ZkIj-xB5kHRaRV5DpTplnoSoQ8xz2wxTIhQKsdCRCQ2ir4FVbYFYC/pubhtml?widget=true&amp;headers=false"
    //    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzywhRZxctcB7-7YlNDAqolh20IBOvVuZLxSIK6DE_4doNJiPxq2S01-rARrIU68DHMZSn1rkP_MJV/pubhtml?widget=true&amp;headers=false"
    //   src="https://docs.google.com/spreadsheets/d/1UG_XorWICDGfCbP6gm_fMYwA_6xduC5fM88FKvmy3mM/edit?usp=sharing;widget=true&amp;headers=false"
        // src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQN502bCWZL9vZkNjjMtE4ELYIN8bkAmL_CnB4YLMP7ae29X1rq505Wj8TkX711cgvqeC6UmgKx_P45/pubhtml?widget=true&amp;headers=false"
        width="100%" height="95%" padding="5rem" >

        </iframe>
   

            </div>
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
        paddingTop:'20px',
        color:'darkGrey',
        paddingLeft:'100px'
    },
    dropdownItem: {
        backgroundColor: '#0b406b',
        transition: 'background-color 0.3s',
        borderRadius: '10px',
        color: 'white',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
        
      },
      
}
const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}
export default connect(mapStateToProps)(LandingPage)


