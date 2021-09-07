import React, {useState} from "react"
import { Link , useHistory} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import "./Navbar.css";



export default function Navbar(props)  {
        const {auth  ,logoutHandler , loginHandler } = props
        
        const [query ,setQuery] = useState("")
        const history = useHistory()

        const handleSubmit =(e)=>{
            e.preventDefault()
            history.push(`/hotels/${query}`)
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
                   <Link to="/"><img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" width="120px" style={{marginRight:"2px" , marginBottom:"10px"}} /></Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">


                        <ul className="navbar-nav mr-auto container-fluid">
                            

                            <li className="nav-item col-6">
                                <form className="form-inline my-2 my-lg-0 inbutton" onSubmit={handleSubmit}>
                                
                                    <input className="form-control form-control-lg mr-lg-0 bg-light border "
                                        style={{ borderRadius: "5px 5px 5px 5px" }}
                                        name="query" 
                                        value={query}onChange={(e) => setQuery(e.target.value)}
                                        type="search" placeholder="Search cities" aria-label="Search" />
                                        <button className="btn btn-light btn-lg  my-1 my-sm-0 ml-0 col-1 border"
                                        style={{ borderRadius: "5px 5px 5px 5px" }}
                                        type="submit"><i className="fas fa-search text-danger "></i></button>

                                   
                                </form>
                            </li>

                            
                            
                        <li className="nav-item">
          <a className="nav-link active text-secondary" aria-current="page" href="#">Places To stay</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Experiences</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Explore your way</a>
        </li>


                        </ul>

                
     

                        


                        
                        
                    {!auth ?       <Link to="/SignUp" ><button className="nav-link btn btn-primary text-light mx-2 text-decoration-none"  >Login</button></Link> 
                                                 
                                : <button  className="btn btn-primary" onClick={logoutHandler}>Signout</button>}


                    </div>
                </nav>
               

            </div>

        )
    }





