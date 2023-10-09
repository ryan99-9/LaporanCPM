import Axios from 'axios'
const API = 'https://database-jersey.herokuapp.com/'
export const login = (username, password) => {
    return (dispatch) => {
        if (username === "digibsd" && password === "digi123"){
            localStorage.setItem('idUser','digibsd')
            return dispatch({
                type: 'LOGIN',
                payload: {
                    username : "digibsd",
                    id: "200",
                    password: "digi123",
                    role: "admin",
                    cart: []
                }
            })
        } else {
            return dispatch({
                type: 'ERROR_LOGIN'
            })
        }

        // Axios.get(`${API}users?username=${username}&password=${password}`)
        //     .then(res => {
        //         // console.log(res.data[0]);
        //         // console.log(res.data);
        //         //Jika inputan salah
        //         if (res.data.length === 0) {
        //             return dispatch({
        //                 type: 'ERROR_LOGIN'
        //             })
        //         }//jika inputan benar
        //         else {
        //             //Menyimpan data idUser ke local storage
        //             localStorage.setItem('idUser', res.data[0].id)
        //             //Mengirim data ke userReducer
        //             return dispatch({
        //                 type: 'LOGIN',
        //                 payload: res.data[0]
        //             })

        //         }
        //     })
    }
}

export const errLoginfalse = () => {
    return (dispatch) => {
        return dispatch({
            type: 'ERROR_LOGIN_FALSE'
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        //menghapus data di storage
        localStorage.removeItem('idUser')
        //Kirim perintah ke userReducer
        return dispatch({
            type: 'LOG_OUT'
        })
    }
}

export const keepLogin = (id) => {
    return (dispatch) => {
        if (id === "digibsd"){
            return dispatch({
                type: 'LOGIN',
                payload: {
                    username : "digibsd",
                    id: "200",
                    password: "digi123",
                    role: "admin",
                    cart: []
                }
            })
        }
        Axios.get(`${API}users/${id}`)
            .then(res => {
                
            })

    }
}



export const register = (username, email, addingData) => {
    return (dispatch) => {
        // cek kesamaan username di database
        Axios.get(`${API}users?username=${username}`)
            .then(res => {
                if (res.data.length !== 0) {
                    return dispatch({
                        type: 'USERNAME_EMAIL_EXIST'
                    })
                }
                // cek kesamaan email di database
                Axios.get(`${API}users?email=${email}`)
                    .then(res => {
                        if (res.data.length !== 0) {
                            return dispatch({
                                type: 'USERNAME_EMAIL_EXIST'
                            })
                        }
                        // post data user baru
                        Axios.post(`${API}users`, addingData)
                            .then(res => {
                                console.log(res.data);
                                return dispatch({
                                    type: 'SUCCESS_REGIST'
                                })
                            })
                    })
            })
    }
}



    // return (dispatch) => {
    //     Axios.post('${API}users', addingData)
    //         return dispatch({
    //             type: 'SUCCESS_REGIST'
    //         })


    // }