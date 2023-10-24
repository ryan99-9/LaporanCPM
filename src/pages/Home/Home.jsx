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
        width="100%" height="95%" padding="5rem" >

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


