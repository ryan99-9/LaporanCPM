import React from 'react'
// import { background } from '../../asset/index'
import NavigationBar from '../../component/navigationBar'
import './home.css'
import { connect } from 'react-redux'
const API = 'https://database-jersey.herokuapp.com/'

class Home extends React.Component {
   
    render() {
        return (
            <div  style={{ height: '100vh',marginTop:'40px' }} >
                <NavigationBar />
                {/* <div className='second_layer'> */}
               
                
                
      <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSs4RoxnIY8RO7Be1yncugG5p_fnACGDdrWw4S4zRrtPW6swCILSPFb-I6UQy9L7RETlxKB1s8LT0Ln/pubhtml?widget=true&amp;headers=false"
        // src="https://docs.google.com/spreadsheets/d/16Iz2ysNWsOPJPtdeB2sh35o50YCcwHHr6wbsiSW71Ns/edit?usp=sharing"
    //   src="https://docs.google.com/spreadsheets/d/1UG_XorWICDGfCbP6gm_fMYwA_6xduC5fM88FKvmy3mM/edit?usp=sharing;widget=true&amp;headers=false"
        // src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQN502bCWZL9vZkNjjMtE4ELYIN8bkAmL_CnB4YLMP7ae29X1rq505Wj8TkX711cgvqeC6UmgKx_P45/pubhtml?widget=true&amp;headers=false"
        width="100%" height="90%" padding="5rem" >

        </iframe>
   

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}
export default connect(mapStateToProps)(Home)


