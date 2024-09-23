
import React,{useState,useEffect} from 'react'
import { API_URl } from '../api'
import { Link } from 'react-router-dom'

const FirmCollections = () => {

    const [firmData,setfirmData] =useState([])

    const firmDataHandler =async()=>{
        try {
            const response=await fetch(`${API_URl}/vendor/all-vendors`)
            const newFirmData=await response.json()
            setfirmData(newFirmData.vendors)
            console.log("firmData:",newFirmData)

        } catch (error) {
            alert("firm data not fetched")
            console.error(error)
        }
    }
    useEffect(()=>{
        firmDataHandler()
    },[])

  return (
    <>
    <h2>Restaurants with online food delivery in Vadodara</h2>
    <section className="firmSection">
        {firmData.map((apple)=>{
            return(
                <>

                {apple.firm.map((item)=>{
                    return(
                        <Link to={`/products/${item._id}`}>
                        <div className="firmGroupBox">
                            <div className="firmGroup">
                              <img src={`${API_URl}/uploads/${item.image}`}/>
                              <div className='firmOffer'>
                                {item.offer}
                              </div>
                            </div>
                            <div className="firmDetails">
                                <p>{item._id}</p>
                                <strong>
                                {item.firmName}
                                </strong>
                                <div className="firmArea">{item.region}</div>
                                <div className="firmArea">{item.area}</div>

                                
                            </div>
                        </div>
                        </Link>
                    )

                })}

              
                
                
                </>
            )
        })}
    </section>
    </>
  )
}

export default FirmCollections