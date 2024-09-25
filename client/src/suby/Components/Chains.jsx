

import React, { useState, useEffect } from 'react'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { API_URl } from '../api';
import { MagnifyingGlass } from 'react-loader-spinner'

const Chains = () => {
  const [vendorData, setvendorData] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true)

  const VendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URl}/vendor/all-vendors`)
      const newData = await response.json()
      setvendorData(newData);
      console.log("this is api data", newData)
      setLoading(false);

    } catch (error) {
      console.error('failed to fetch data', error)
      setLoading(true);

    }
  }
  useEffect(() => {
    VendorFirmHandler()
  }, [])

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth"
      })
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth"
      })

    }
  }


  return (
    <>
      {/* <div className="loaderSection">
        {loading && <>
          <div className="loader">Loading...
          </div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />

        </>
        }
      </div> */}

      {/* <div className="chainHead">
        <h3>Top restaurant chains in Vadodara</h3>
        <div className="btnSection">
          <button onClick={() => handleScroll("left")}><GoArrowLeft className='btnicons' /></button>
          <button onClick={() => handleScroll("right")}><GoArrowRight className='btnicons' /></button>
        </div>
        <div className="loaderSection">
          {loading && <>
            <div className="loader">Your 🍝 is Loading...
            </div>
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />

          </>
          }
        </div> */}

        <div className='mediaChainSection'>
          <div className="loaderSection">
            {loading && <>
              <div className="loader">
                Your 🥣 is Loading...
              </div>
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
            </>

            }
          </div>
          <div className="btnSection">
          <button onClick={() => handleScroll("left")}><GoArrowLeft className='btnicons' /></button>
          <button onClick={() => handleScroll("right")}><GoArrowRight className='btnicons' /></button>
          </div>
          <h3 className='chainTitle'>Top restaurant chains in Vadodara</h3>
          <section className="chainSection" id="chainGallery" onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>

            {vendorData.vendors && vendorData.vendors.map((vendor) => {
              return (
                <>
                  <div className="vendorBox">
                    {vendor.firm.map((item) => {
                      return (
                        <>

                          <div className="firmImage">
                            <img src={`${API_URl}/uploads/${item.image}`} />
                          </div>
                          {/* <div className="chainsText">
                          <div className="firmName">
                            {item.firmName}
                          </div>
                          <div className="firmArea">
                            {item.area}
                          </div>
                        </div> */}



                        </>
                      )

                    })}
                  </div>
                </>
              )
            })}
          </section>
        </div>
      </>

      )
}

      export default Chains