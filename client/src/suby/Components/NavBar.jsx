

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className="navBarSection">
      <div className="companyTitle">
        <Link to='/' className="Link">
          <h2>SUBY</h2>
        </Link>

      </div>

      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="userProfile">
        Login/SignUp
      </div>



    </section>
  )
}

export default NavBar