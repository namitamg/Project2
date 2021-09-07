import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div>

          
                <div className="row pt-5 px-3 border-top mt-5 " style={{fontSize: "13px"}}>
                    <div className="col">


                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" ><b>About</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Airbnb for Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Airbnb plus</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Newsroom</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Airbnb Luxe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Investors</a>
                            </li>
                        </ul>


                    </div>
                    <div className="col">

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-secondary"><b>Community</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Host your home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary">Host an experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary">Resource centre</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col">

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" ><b>Support</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Help centre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary">Cancellation options</a>
                            </li>
                        </ul>

                    </div>
                   
                </div>

                <hr />




                <div className="row" style={{fontSize: "12px"}}>
                    {/* <div className="col pl-5">
                        <img src="" width="100px" className="mr-5" /> <span>Copyright © 2018 You Udemy, Inc.</span>
                     </div> */}
                        
                     <div className="col">
                        <form>
                            <div className="form-group col-6 float-left">
                                <select className="form-control" id="exampleFormControlSelect2">
                                    <option>English</option>
                                    <option>Japanese</option>
                                    <option>German</option>
                                    <option>Chinese</option>
                                    <option>French</option>
                                </select>
                            </div>
                        </form>

                    </div>
                        
                        
                        <div className="col">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link active text-secondary" >Terms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary">Privacy and Cookie Police</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" >Intellectual Property</a>
                                </li>
                            </ul>

                        </div>
                    

                </div>

            </div>

        )
    }
}

export default Footer