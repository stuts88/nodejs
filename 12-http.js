const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){

        res.end('About page')
    }
    res.end('<h1>Page not found</h1>')
})

server.listen(5000)