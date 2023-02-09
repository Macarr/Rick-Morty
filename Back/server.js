var http = require("http");
const characters =require('./src/utils/data.js')



http.createServer((req, res)=>{
 res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("rickandmorty/character")){
       let id= req.url.split('/').at(-1);

        let charactersFilter = characters.find(character=> character.id === Number(id));

        res
        .writeHead(200, {"Content-Type":"application/json"})
        .end(JSON.stringify(charactersFilter))
    }
    
}) 
.listen(3001,"localhost")