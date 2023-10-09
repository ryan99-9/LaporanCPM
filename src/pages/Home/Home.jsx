import React from 'react'
// import { background } from '../../asset/index'
import NavigationBar from '../../component/navigationBar'
import Axios from 'axios'
import { Carousel, Card, Button } from 'react-bootstrap'
import './home.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { BRI, BCA, LINKAJA, GOPAY, SHOPEE } from '../../asset'
const API = 'https://database-jersey.herokuapp.com/'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousels: [],
            products: [],
            wishlist: false,
            page: 1,
            prodPerPage: 4,
            max: 0
        }
    }
    componentDidMount() {
        Axios.get(`${API}slider`)
            .then(res => {
                this.setState({ carousels: res.data })
            })
        Axios.get(`${API}products`)
            .then(res => {
                this.setState({ products: res.data, max: Math.ceil(res.data.length / this.state.prodPerPage) })
            })
    }
    wishlist = (id) => {
        Axios.patch(`${API}products/${id}`, { wishlist: true })
            .then(res => {
                Axios.get(`${API}products`)
                    .then(res => {
                        this.setState({ products: res.data })
                        console.log(res.data)
                    })
            })
        this.setState({ wishlist: !this.state.wishlist })
        if (this.state.wishlist) {
            Axios.patch(`${API}products/${id}`, { wishlist: false })
                .then(res => {
                    Axios.get(`${API}products`)
                        .then(res => {
                            this.setState({ products: res.data })
                        })
                })
        }
    }
    // unWishlist = (id) => {
    //     Axios.patch(`${API}products/${id}` { wishlist: false })
    //         .then(res => {
    //             Axios.get('${API}products')
    //                 .then(res => {
    //                     this.setState({ products: res.data })
    //                 })
    //         })
    // }
    onNextPage = () => {
        this.setState({ page: this.state.page + 1 })

    }
    onPrevPage = () => {
        this.setState({ page: this.state.page - 1 })
    }
    onShowProduct = () => {
        let beginningIndex = (this.state.page - 1) * this.state.prodPerPage
        let currentProd = this.state.products.slice(beginningIndex, beginningIndex + this.state.prodPerPage)
        console.log(currentProd)
        return (
            currentProd.map(item => {
                return (
                    <Card style={{ width: '18rem', marginBottom: '30px' }}>
                        <Card.Img variant="top" src={item.images[0]} />
                        <Card.Body>
                            <Card.Title className='cardText'>{item.brand} {item.name}</Card.Title>
                            <Card.Text className='cardText'>
                                {item.colour}
                            </Card.Text>
                            <Card.Text className='cardText'>
                                IDR {item.price.toLocaleString()}
                            </Card.Text>
                            <Card.Text className='cardText'>
                                Stock {item.stock}
                            </Card.Text>
                            <div className='cardButton'>
                                <Button
                                    variant="light"
                                    onClick={() => this.wishlist(item.id)}
                                    // as={Link} to={`/?${item.id}`}
                                    style={{ backgroundColor: 'white', border: 'none', color: 'black', marginRight: '3px' }}
                                >{item.wishlist ?
                                    <i class="fas fa-heart" style={{ color: 'red' }}></i>
                                    :
                                    <i class="far fa-heart"></i>
                                    }
                                </Button>
                                <Button
                                    variant="light"
                                    style={{ backgroundColor: 'white', border: 'none', color: 'black' }}
                                    as={Link} to={`/detail?${item.id}`}
                                    target='_blank'
                                ><i class="fal fa-shopping-cart"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }
    render() {
        return (
            <div className='mainLayer w-100'>
                <NavigationBar />
                {/* <div className='second_layer'> */}

                <div className="home-container">
      

     
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQN502bCWZL9vZkNjjMtE4ELYIN8bkAmL_CnB4YLMP7ae29X1rq505Wj8TkX711cgvqeC6UmgKx_P45/pubhtml?widget=true&amp;headers=false"
        width="100%vw" height="700vh"></iframe>
    </div>

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


