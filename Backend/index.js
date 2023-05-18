import express from 'express';
import axios from 'axios';
import cors from 'cors'

const server = express()

server.use(cors({ origin: "http://localhost:5173" }))

// use express built in middleware json to parse all the requests in json format. we dont need to install express.json as it is already built in to express

server.use(express.json())

server.get("/api/random", (req, res) => {
    // console.log("Hello")
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then((result) => {
            res.json(result.data.message)
        })
})

server.get("/api/breed-list", (req, res) => {
    axios.get("https://dog.ceo/api/breeds/list/all")
        .then((result) => {
            res.json(result.data)
        })
})


server.listen(5000, () => {
    console.log('Server Started at Port 5000')
})