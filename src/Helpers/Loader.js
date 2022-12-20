import React from 'react'
import { BallTriangle} from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='d-flex justify-content-center h-100'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#0747a9"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    )
}

export default Loader