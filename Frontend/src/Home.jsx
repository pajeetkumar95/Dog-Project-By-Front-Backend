import React, { useState } from 'react'
import axios from 'axios'

function Home() {

    const [randomimage, setRandomImage] = useState('')

    function handleclick() {
        axios.get("http://localhost:5000/api/random")
            .then((result) => {
                // console.log(result)
                setRandomImage(result.data)
            })
    }
    console.log(randomimage)
    return (
        <>
            <button onClick={handleclick}>Get the Dog picture</button>
            {
                randomimage.length > 0 ? <img src={randomimage} alt='randomimage' /> : ''
            }
        </>
    )
}
export default Home