import React from "react"
import { Link } from "react-router-dom"

const Header = () =>{
  return(

    <React.Fragment>
    <nav className="navbar navbar-light bg-light" >
     <div className="container">
       <Link className="navbar-brand" to='/' > My Money  </Link>
     </div>
    </nav>
    </React.Fragment>
  )
}

export default Header