import React from 'react'


//import komponen dari react router DOM
import { Routes, Route } from 'react-router-dom'
//import component
import Home from './pages/Home/Home.jsx';
import LoginPage from './pages/Login/login.jsx'
import NotFound from './pages/notFound.jsx';

//import Action
import { keepLogin } from './redux/action';

import { connect } from 'react-redux'
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Menu from './pages/Menu/menu.jsx';
import UploadPdf from './pages/FiturPdf/uploadPdf.jsx';
import PdfList from './pages/FiturPdf/pdfList.jsx';




class App extends React.Component {
 
  render() {
    if (this.props.role === "admin") {
      return (
        <div>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/userareas' element={<UploadPdf />} />
            <Route path='/userareasb' element={<PdfList />} />
            {/* <Route path='/Register' element={<Register />} /> */}
            {/* <Route path='/detail' element={<DetailPage />} /> */}
            {/* <Route path='/HistoryAdmin' element={<HistoryAdmin />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      );
    } 
    // else if(this.props.role === "user") {
    //   return (
    //     <div>
    //       <Routes>
    //         <Route path='/' element={<Home />} exact />
    //         <Route path='/Login' element={<LoginPage />} />
    //         <Route path='/Register' element={<Register />} />
    //         <Route path='/detail' element={<DetailPage />} />
    //         <Route path='/Cart' element={<Cart />} />
    //         <Route path='/Wishlist' element={<Wishlist />} />
    //         <Route path='/History' element={<History />} />
    //         <Route path='*' element={<NotFound />} />
    //       </Routes>
    //     </div>
    //   );
    // } 
    else {
      return (
        <div>
          <Routes>
            {/* <Route path='/' element={<Home />} exact /> */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/userareas' element={<UploadPdf />} />
            <Route path='/userareasb' element={<PdfList />} />

            
            {/* <Route path='/Register' element={<Register />} />
            <Route path='/detail' element={<DetailPage />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Wishlist' element={<Wishlist />} />
            <Route path='/History' element={<History />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      );
    }

  }
}
const mapStateToProps = (state) => {
  return {
    role: state.userReducer.role
  }
}
export default connect(mapStateToProps, { keepLogin })(App);
