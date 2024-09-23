

import React,{useState,useEffect} from 'react'
import { API_URl } from '../api';

const Chains = () => {
    const[vendorData,setvendorData]=useState([])
    const [scrollPosition,setScrollPosition]=useState(0);

    const VendorFirmHandler=async()=>{
        try {
          const response = await fetch(`${API_URl}/vendor/all-vendors`)
          const newData= await response.json()
          setvendorData(newData);
          console.log("this is api data",newData)
            
        } catch (error) {
            alert("Chains Data not fetched")
            console.error(error)
        }
    }
    useEffect(()=>{
      VendorFirmHandler()
    },[])

    const handleScroll=(direction)=>{
      const gallery =document.getElementById("chainGallery");
      const scrollAmount=500;

      if(direction==="left"){
        gallery.scrollTo({
          left: gallery.scrollLeft -scrollAmount,
          behavior:"smooth" 
        })
      }else if(direction==="right"){
          gallery.scrollTo({
            left: gallery.scrollLeft + scrollAmount,
            behavior:"smooth"
          })

        }
      }
    
   
  return (
    <>
    <div className="btnSection">
      <button onClick={()=>handleScroll("left")}>Left</button>
      <button onClick={()=>handleScroll("right")}>Right</button>
    </div>
    <h2>Top restaurant chains in Vadodara</h2> 
    <section className="chainSection" id="chainGallery" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
      
      {vendorData.vendors && vendorData.vendors.map((vendor)=>{
        return (
          <>
          <div className="vendorBox">
            {vendor.firm.map((item)=>{
              return(
                <>
                
                <div className="firmImage">
                  <img src={`${API_URl}/uploads/${item.image}`} />
                </div>

                {/* <div className="firmName">
                  {item.firmName}
                </div>
                <div className="firmArea">
                  {item.area}
                </div> */}


                </>
              )

            })}
          </div>
          </>
        )
      })}
    </section>
    </>
  )
}

export default Chains