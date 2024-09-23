import React, {useState} from 'react'
import { itemData } from '../Data'

const ItemsDisplay = () => {
    const [displayItem, setDisplayItem] = useState(itemData)


  return (
    <>
    <h2>What's on your mind?</h2>
    <div className="itemSection">
        {displayItem.map((item)=>{
            return(
                <div className="gallery">
                    <img src={item.item_img} alt={item.item_img} />
                </div>
            )
        })}
    </div>
    </>
    
  )
}

export default ItemsDisplay