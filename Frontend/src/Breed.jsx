import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Breed() {
    const [breedlist, setBreedlist] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/breed-list")
            .then((result) => {
                setBreedlist(result.data.message)
            })
    }, [])

    return (
        <>
            <select>
            </select>
        </>
    )
}

export default Breed
