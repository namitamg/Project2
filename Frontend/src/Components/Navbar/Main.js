import React, { useState } from "react"
import { Route, Switch } from "react-router"

import Navbar from "./Navbar"
 import Book from "../Book"
import Footer from "../Footer/Footer"
import Login from "../Login/Login"
import { Redirect } from "react-router-dom"
import Slidder  from "../Slidder"


import Cards  from "../Cards/Cards"

import SearchPage from "../Search/SearchPage"
// import Banner from "../Search/Banner"

import SignUp from "../Signup/Signup"
import {HotelCard} from "../Cards/index"
import Payment from "../Payment"
import PrivateRoutes from "../Login/PrivateRoute"


export default function Main(){

    const [auth , setAuth] = useState(false)

    


    const loginHandler=()=>{
        setAuth(true)
    }
    const logoutHandler=()=>{
        setAuth(false)
        localStorage.removeItem('key')
    }


    
    return(
        <div>
            <Navbar auth={auth} logoutHandler={logoutHandler} loginHandler={loginHandler} />
            
          
        
        
           <Route exact path="/" component={Slidder}></Route> 
          
           
           
            <Switch>
            
                <Route exact path="/" component={Cards} />
                
                <Route path="/search"> <SearchPage/> </Route>
                

                <Route exact  path="/SignUp" component={SignUp}/>
                <Route exact path="/SignIn"  render={(props)=><Login {...props} loginHandler={loginHandler}/>} />
               
               <Route path="/hotels/:id"  component={(props)=><HotelCard {...props}   />} />
              
             
              <PrivateRoutes auth={auth} path='/payment' component={(props) => <Payment {...props}  />} />

              
             {/* <Route exact path="/payment" component={Payment} />  */}

              
       

             
              
               <Route render={()=> <h1>Hotel Not Found</h1>} />
                </Switch>
                
              
                <Footer />
                
        </div>
    )
}