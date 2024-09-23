

import React from 'react'

const NavBar = () => {
  return (
    <section className="NavBarSection">
        <div className="companyTitle">
            <h2>SUBY</h2>
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