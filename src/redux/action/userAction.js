import Axios from 'axios'
export const login = (username, password) => {
    return (dispatch) => {
        if (username === "laporancpm" && password === "cpm123"){
            localStorage.setItem('idUser','laporancpm')
            return dispatch({
                type: 'LOGIN',
                payload: {
                    username : "laporancpm",
                    id: "200",
                    password: "cpm123",
                    role: "admin",
                    cart: []
                }
            })
        } else {
            return dispatch({
                type: 'ERROR_LOGIN'
            })
        }
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
        if (id === "laporancpm"){
            return dispatch({
                type: 'LOGIN',
                payload: {
                    username : "laporancpm",
                    id: "200",
                    password: "cpm123",
                    role: "admin",
                    cart: []
                }
            })
        }
       

    }
}