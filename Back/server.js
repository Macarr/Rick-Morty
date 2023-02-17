// const http = require("http");
// const getCharById = require("./src/controllers/getCharById");
// const getCharDetail = require ("./src/controllers/getCharDetail");

// http.createServer((req, res)=>{
//  res.setHeader('Access-Control-Allow-Origin', '*');

//     let id = req.url.split('/').at(-1);

//     if(req.url.includes("onsearch")){

//         getCharById(res, id)
//     }

//     if(req.url.includes("detail")){

//         getCharDetail(res, id)
//     }

// })
// .listen(3001,"localhost")

const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./src/routes/index.js");

const cors = require("cors");

server.use(cors());
server.use(express.json());

server.use("/", router);

server.listen(PORT, () => console.log("Server raised in port " + PORT));
