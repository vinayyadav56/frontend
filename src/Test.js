import React from 'react'
import { useState } from 'react'


const array = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "B"
    },
    {
        id: 3,
        name: "C"
    },
    {
        id: 4,
        name: "D"
    },
]

const Test = () => {

    const [data, setdata] = useState(array)

    const filerData = (id) => {
        data.map((elem) => {
            return elem.id !== id
        })
    }


    console.log(data);

    return (
        <div>Test</div>
    )
}

export default Test