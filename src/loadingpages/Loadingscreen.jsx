import React from 'react'
import loaderbg from "../images.loadingimgbg.png";
const Loadingscreen = () => {
  return (
    <>
       <div className='loader'>
        <div className='loader-bg-img'>
            <img src={loaderbg} alt="loaderbg" />
        </div>
       </div>
    </>
  )
}

export default Loadingscreen