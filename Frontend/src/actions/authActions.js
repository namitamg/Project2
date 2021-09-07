import { AUTH_LOGIN, AUTH_USER, ERROR_AUTH } from "./types"
import Axios from '../utils/api'
import jwt_decode from 'jwt-decode'
import { setHeaders } from "../utils/setHeaderToken"

export const authLogin = (data) => dispatch =>{
    Axios.post('auth/login' , data)
    .then((res)=> res.data)
    .then((data)=> {
        const decoded = jwt_decode(data.token)
        console.log("decode" , decoded)
        localStorage.setItem('jwtToken' , data.token)
        dispatch(setUser(decoded))
    })
    .catch((err)=>{
        dispatch({
            type : ERROR_AUTH,
            payload : err.reponse
        })
    })
}


//
export const setUser = (decoded) =>{
    return{
        type : AUTH_LOGIN,
        payload : decoded
    }
}


export const logoutUser = ()=>dispatch=>{
    console.log("logging out")
    localStorage.removeItem('jwtToken'); 
    dispatch(setUser({}))
    window.location.href = '/login'
    setHeaders(false)
}