import React from "react"
import { Link } from "react-router-dom"

//this moment am build new element

const Header = () =>{

  return( 
     <React.Fragment>
      <nav className='navbar navbar-light bg-primary'>
        <div className="container bg-light">
           <Link  className='navbar-brand ' to='/'>  My money</Link>
      </div>
      </nav>
      </React.Fragment> 
  )
}


export default Header