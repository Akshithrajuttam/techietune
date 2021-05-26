
const http = require('http')
const fs = require('fs')
const port = 8080
const server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('assests/index.html',function(error,data){
        if (error){
            res.writeHead(404)
            res.write("filenotfound.html")
        }else{
            res.write(data)
        }
       // res.write('hello wolrd')
            res.end()
    })
})
server.listen(port,function(error){
    if(error){
        console.log('something went erong',error)

    }else{
        console.log('server is listenering on port'+port)
    }
})