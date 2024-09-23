

import React from 'react'
import NavBar from '../Components/NavBar'
import ItamsDisplay from '../Components/ItamsDisplay'
import Chains from '../Components/Chains'
import FirmCollections from '../Components/FirmCollections'
import ProductMenu from '../Components/ProductMenu'



const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <div className="landingSection">
        <ItamsDisplay/>
        <Chains/>
        <FirmCollections/>
        <ProductMenu/>
        
        </div>
        
    </div>
  )
}

export default LandingPage