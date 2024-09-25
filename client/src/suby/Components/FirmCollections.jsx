
import React, { useState, useEffect } from 'react'
import { API_URl } from '../api'
import { Link } from 'react-router-dom'

const FirmCollections = () => {

    const [firmData, setfirmData] = useState([])
    const [selectedRegion, setselectedRegion] = useState("All")


    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URl}/vendor/all-vendors`)
            const newFirmData = await response.json()
            setfirmData(newFirmData.vendors)
            console.log("firmData:", newFirmData)

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        firmDataHandler()
    }, [])
    const filterHandler = (region) => {
        setselectedRegion(region)


    }

    return (
        <div className="firmHead">
            <h3>Restaurants with online food delivery in Vadodara</h3>
            <div className="filterButton">
                <button className="filterbtn" onClick={() => filterHandler('All')}>All</button>
                <button className="filterbtn" onClick={() => filterHandler('South-Indian')}>South-Indian</button>
                <button className="filterbtn" onClick={() => filterHandler('North-Indian')}>North-Indian</button>
                <button className="filterbtn" onClick={() => filterHandler('Chinese')}>Chinese</button>
                <button className="filterbtn" onClick={() => filterHandler('Bakery')}>Bakery</button>
            </div>
            <section className="firmSection">

                {firmData.map((apple) => {
                    return apple.firm.map((item) => {
                        if (selectedRegion === "All" ||
                            item.region.includes(selectedRegion.toLocaleLowerCase())
                        ) {

                            return (
                                <>

                                    <Link to={`/products/${item._id}/${item.firmName}`} className='Link'>
                                        <div className="firmGroupBox">
                                            <div className="firmGroup">
                                                <img src={`${API_URl}/uploads/${item.image}`} />
                                                <div className='firmOffer'>
                                                    {item.offer}
                                                </div>
                                            </div>
                                            <div className="firmDetails">

                                                <strong>
                                                    {item.firmName}
                                                </strong>
                                                <div className="firmArea">{item.region}</div>
                                                <div className="firmArea">{item.area}</div>


                                            </div>
                                        </div>
                                    </Link>

                                </>

                            );
                        }

                    })


                })}
            </section>
        </div>
    )
}

export default FirmCollections